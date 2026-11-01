import { marked } from 'marked';
import stylesheet from './viewer.css';
import DOMPurify from 'dompurify';
import mermaid from 'mermaid';
import { createIcons, BookOpen, FolderOpen, Download, Files, FileDown } from 'lucide';

createIcons({ icons: { BookOpen, FolderOpen, Download, Files, FileDown } });
mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: 'neutral', htmlLabels: false, flowchart: { useMaxWidth: false, htmlLabels: false } });
const element = id => document.getElementById(id);
let documents = [];
let selected = null;
let revision = 0;
let exportRoot;
let busy = false;
const notify = message => { element('notice').textContent = message; element('notice').style.display = 'block'; };
const escape = text => text.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const htmlName = path => path.replace(/\.md$/i, '.html');

function list() {
  element('files').replaceChildren();
  for (const record of documents.filter(record => record.path.toLowerCase().includes(element('filter').value.toLowerCase()))) {
    const button = document.createElement('button');
    button.textContent = record.path;
    button.classList.toggle('active', record === selected);
    button.addEventListener('click', () => show(record));
    element('files').append(button);
  }
}

async function render(record) {
  const article = document.createElement('article');
  const markdown = record.text.replace(/^\uFEFF/, '').replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '');
  article.innerHTML = DOMPurify.sanitize(marked.parse(markdown), { FORBID_TAGS: ['img', 'iframe', 'style', 'form', 'input', 'video', 'audio'], FORBID_ATTR: ['style'] });
  article.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (/^https?:/i.test(href)) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    else if (!href.startsWith('#') && !/\.md(?:#.*)?$/i.test(href)) { link.removeAttribute('href'); }
  });
  article.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((heading, index) => { heading.id = `section-${index}`; });
  article.querySelectorAll('table').forEach(table => { const wrap = document.createElement('div'); wrap.className = 'table-wrap'; table.replaceWith(wrap); wrap.append(table); });
  for (const code of article.querySelectorAll('code.language-mermaid')) {
    const diagram = document.createElement('div');
    diagram.className = 'diagram';
    const source = code.textContent;
    code.parentElement.replaceWith(diagram);
    try {
      const result = await mermaid.render(`diagram-${crypto.randomUUID()}`, source);
      diagram.innerHTML = DOMPurify.sanitize(result.svg, { USE_PROFILES: { svg: true, svgFilters: true }, ADD_TAGS: ['foreignObject', 'div', 'span'], ADD_ATTR: ['xmlns'] });
    } catch {
      const label = document.createElement('p'); label.className = 'diagram-error'; label.textContent = '흐름도 구문 오류';
      const pre = document.createElement('pre'); pre.textContent = source; diagram.append(label, pre);
    }
  }
  return article;
}

async function show(record) {
  const ticket = ++revision;
  selected = record; list();
  try {
    const article = await render(record);
    if (ticket !== revision) return;
    element('document').replaceChildren(...article.childNodes);
    element('document').hidden = false; element('empty').style.display = 'none';
    element('toc').replaceChildren();
    element('document').querySelectorAll('h1,h2,h3').forEach(heading => {
      const link = document.createElement('a'); link.href = `#${heading.id}`; link.textContent = heading.textContent;
      if (heading.tagName === 'H3') link.className = 'sub'; element('toc').append(link);
    });
    element('export').disabled = false; element('export-all').disabled = false;
    element('download-markdown').disabled = false;
    document.title = `${record.path} · Workflow Documents`; window.scrollTo(0, 0);
  } catch (error) { notify(`문서 표시 실패: ${error.message}`); }
}

element('open').addEventListener('click', () => element('folder').click());
element('filter').addEventListener('input', list);
element('folder').addEventListener('change', async event => {
  const files = [...event.target.files].filter(file => /\.md$/i.test(file.name));
  try {
    const loaded = await Promise.all(files.map(async file => ({ path: (file.webkitRelativePath || file.name).split('/').slice(1).join('/') || file.name, text: await file.text() })));
    documents = loaded.sort((first, second) => first.path.localeCompare(second.path, 'ko', { numeric: true }));
    revision++; selected = null; element('count').textContent = documents.length; element('filter').value = ''; list();
    element('toc').replaceChildren(); element('document').hidden = true; element('empty').style.display = 'flex';
    element('export').disabled = true; element('export-all').disabled = true;
    element('download-markdown').disabled = true;
    element('status').textContent = documents.length ? `${documents.length}개 문서` : 'Markdown 문서 없음';
    if (documents.length) await show(documents[0]);
  } catch (error) { notify(`폴더 읽기 실패: ${error.message}`); }
});

element('document').addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !selected) return;
  const href = link.getAttribute('href') || '';
  if (!/\.md(?:#.*)?$/i.test(href)) return;
  event.preventDefault();
  const resolved = new URL(href, `https://local.invalid/${selected.path}`);
  const target = documents.find(record => record.path === decodeURIComponent(resolved.pathname.slice(1)));
  if (target) show(target); else notify('선택한 폴더에 참조 문서가 없습니다.');
});

async function exportDocuments(records) {
  if (busy) return;
  if (!window.showDirectoryPicker) { notify('폴더 저장은 최신 Chrome 또는 Edge에서 지원됩니다.'); return; }
  busy = true;
  try {
    exportRoot = await window.showDirectoryPicker({ mode: 'readwrite', id: 'workflow-html' });
    if (exportRoot.name.toLowerCase() === 'output') throw new Error('output 대신 상위 프로젝트 폴더 또는 별도 html 폴더를 선택하세요.');
    const destination = exportRoot.name === 'html' ? exportRoot : await exportRoot.getDirectoryHandle('html', { create: true });
    const css = stylesheet;
    for (const record of records) {
      const article = await render(record);
      article.querySelectorAll('a').forEach(link => { const href = link.getAttribute('href'); if (href && /\.md(?:#.*)?$/i.test(href)) link.setAttribute('href', href.replace(/\.md(?=#|$)/i, '.html')); });
      const content = `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:; base-uri 'none'"><title>${escape(record.path)}</title><style>${css}</style></head><body><main><article>${article.innerHTML}</article></main></body></html>`;
      const parts = htmlName(record.path).split('/'); let directory = destination;
      for (const part of parts.slice(0, -1)) directory = await directory.getDirectoryHandle(part, { create: true });
      const handle = await directory.getFileHandle(parts.at(-1), { create: true });
      const writer = await handle.createWritable(); await writer.write(content); await writer.close();
    }
    notify(`${records.length}개 문서를 html/에 저장했습니다.`);
  } catch (error) { if (error.name !== 'AbortError') notify(`저장 실패: ${error.message}`); }
  finally { busy = false; }
}
element('export').addEventListener('click', () => exportDocuments([selected]));
element('export-all').addEventListener('click', () => exportDocuments([...documents]));

element('download-markdown').addEventListener('click', () => {
  if (!selected) return;
  const url = URL.createObjectURL(new Blob([selected.text], { type: 'text/markdown;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url; link.download = selected.path.split('/').at(-1);
  document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});