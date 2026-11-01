# Workflow Design Skills

실제 업무와 그 안에 숨어 있는 판단 기준, 경험지식, 암묵지를 이해하고 수행방식·Agent·End-to-End Workflow로 구체화하는 VS Code Copilot Skill 모음입니다.

사용자가 빈 양식을 채우는 대신 AI가 업무 설명과 자료를 바탕으로 초안을 제시하고, 사용자는 틀리거나 불확실한 부분만 교정합니다.

## 9단계 설계

| 단계 | Skill | 설계 내용 | 로컬 결과 경로 |
|---|---|---|---|
| 01 | [01-workflow-interview](.github/skills/01-workflow-interview/SKILL.md) | Task·지식·추론·판단·예외·암묵지 | `output/01-workflow-interview.md` |
| 02 | [02-execution-design](.github/skills/02-execution-design/SKILL.md) | 수행방식·역할·HITL·설계 이유 | `output/02-execution-design.md` |
| 03 | [03-abcd-design](.github/skills/03-abcd-design/SKILL.md) | Awareness·Brain·Conduct·Derived Value와 Agent 경계 | `output/03-abcd-design.md` |
| 04 | [04-to-be-workflow-design](.github/skills/04-to-be-workflow-design/SKILL.md) | Task 순서·I/O·분기·HITL·예외·종료 | `output/04-to-be-workflow.md` |
| 05 | [05-task-specification](.github/skills/05-task-specification/SKILL.md) | Task 상세·완료 조건·예외 | `output/05-task-specification.md` |
| 06 | [06-data-design](.github/skills/06-data-design/SKILL.md) | Data·Source·Schema·Contract | `output/06-data-design.md` |
| 07 | [07-architecture-checklist](.github/skills/07-architecture-checklist/SKILL.md) | Capability·실현 조건·대안·미종결 | `output/07-architecture-checklist.md` |
| 08 | [08-workflow-refinement](.github/skills/08-workflow-refinement/SKILL.md) | 설계 정합화·범위·PRD 기준선 | `output/08-workflow-refinement.md` |
| 09 | [09-prd-generation](.github/skills/09-prd-generation/SKILL.md) | 독립형 텍스트 Final PRD·MVP·AC·Build Boundary | `output/09-final-prd.md` |

결과는 Skill 실행 시 로컬에 생성됩니다. `output/`과 내보낸 `html/`은 Git에서 제외되며 저장소를 복제해도 업무 결과는 포함되지 않습니다.

수행방식은 Human, Human + AI Assist, AI + HITL, AI / Agent, Rule / System, No Change 중에서 선택합니다. 모든 Task를 AI로 전환하지 않습니다.

## 1단계 목적

업무 수행 과정을 다음 구조의 **Task & Decision Map**으로 정리합니다.

`Context → Task → Knowledge → Inference → Decision → Action/Output → Exception`

이 단계는 실제 업무를 이해하고 외재화하는 데 집중합니다. AI/Agent/HITL 적용 여부를 최종 결정하거나 Agent를 설계하지 않습니다.

## 사용 방법

1. 이 프로젝트를 VS Code에서 엽니다.
2. Copilot 채팅에서 `/01-workflow-interview`를 선택합니다.
3. 분석할 업무를 한두 문장으로 설명합니다. 참고 자료가 있으면 함께 제공합니다.
4. AI가 제시한 초안에서 틀린 부분을 교정하거나 확인사항에 답합니다.
5. 후속 검토는 `/02-execution-design 진행하자`부터 위 표의 번호순으로 해당 Skill을 선택해 실행합니다. 미종결 인계는 완료가 아니며 각 단계의 Finality Gate에 따라 원인 단계로 돌아가 재검증합니다.

Skill 호출 이름과 폴더에는 `01`~`09` 접두사가 있습니다. 실행 시작 안내도 `07/09 · Architecture Checklist 실행`처럼 현재 단계를 표시합니다. 이전 번호 없는 슬래시 호출 대신 위 이름을 사용합니다. 최종 09 Gate를 실제 통과한 경우에만 `DESIGN COMPLETE`이며 이후 Build로 진행합니다.

후속 Skill은 필요한 이전 결과를 자동 참조하므로 내용을 다시 입력할 필요가 없습니다. AI가 전체 초안·수정안을 먼저 제시하고 사용자는 Reviewer로서 확인합니다.

입력 예시:

```text
/01-workflow-interview
저는 사내 교육 담당자입니다. 부서별 교육 요청을 받아 기존 과정과
중복되는지 확인하고, 대상자와 일정을 검토해 교육 운영안을 작성합니다.
```

명령이 목록에 보이지 않으면 VS Code의 Agent Skills 지원 및 설정을 확인합니다. Skill 정의는 [.github/skills/01-workflow-interview/SKILL.md](.github/skills/01-workflow-interview/SKILL.md)에 있습니다.

## 인터뷰 진행 방식

1. **초안 제시:** 업무 목적, 예상 흐름, 핵심 판단 지점을 먼저 정리합니다.
2. **불확실성 표시:** 확인된 사실과 AI의 추정, 확인이 필요한 항목을 구분합니다.
3. **핵심 확인:** 한 번에 최대 3개의 확인사항만 요청합니다.
4. **모델 갱신:** 답변을 반영해 Task 순서와 지식, 추론, 판단, 예외를 다시 검토합니다.
5. **결과 정리:** 다음 단계에 필요한 수준으로 구조화되면 인터뷰를 종료합니다.

판단이 많이 개입되거나, 숙련도에 따라 결과가 달라지거나, 예외가 많은 Task를 우선 분석합니다.

## 상태 표시

| 상태 | 의미 |
|---|---|
| ✓ Confirmed | 사용자가 직접 말했거나 자료에서 확인된 내용 |
| △ Draft | 현재 정보를 바탕으로 AI가 제안한 초안 |
| △ Proposed | 후속 단계의 미합의 설계 제안 |
| ? Need Check | 중요하지만 근거가 부족하여 확인이 필요한 내용 |
| ⚠ Recheck | 기존 합의 항목에서 모순이 발견되어 재검토 중인 상태 |

AI의 추정을 실제 판단 기준이나 암묵지로 확정하지 않습니다. 역할·권한 위임에는 명시적 합의가 필요합니다. 미확인 사항은 최종 결과에도 남길 수 있습니다.

## 1단계 산출물

**Task & Decision Map**은 다음 7개 섹션으로 구성됩니다.

1. 업무 개요
2. Workflow
3. Task & Decision Map
4. 핵심 암묵지
5. 핵심 Decision
6. 확인이 필요한 사항
7. 다음 단계 전달용 요약

각 Task에는 Input, Knowledge, Inference, Decision, Action/Output, Exception과 상태를 기록합니다. Knowledge는 정보지식, 경험지식, 논리지식으로 구분합니다.

다음 **Work Execution Design** 단계에 전달할 Task Candidates에는 Task ID, 이름, Input/Output, Knowledge, Inference, Decision, Exception, Risk, Validation 가능 여부와 확인 상태를 포함합니다.

## 저장 및 Back Loop

- 01~08 결과에는 해당 단계 내용만 저장하며 이전 결과 전체를 복사하지 않습니다.
- 01~08 및 내부 검토에서 필요한 업무 근거는 상대 링크와 Task ID로 연결합니다. 09 이관용 PRD에는 개발에 필요한 규칙과 계약을 자체 포함합니다.
- 앞 단계 문제가 발견되면 원인 단계로 돌아가 AI가 수정안을 먼저 제시합니다.
- 합의된 업무 변경은 1단계, 역할 변경은 2단계, Agent 상세는 3단계에 현행화합니다.
- 변경 이력을 남기고 영향받는 후속 설계를 재검토합니다. 미검토 항목은 Need Check로 표시합니다.
- 사용자 수정사항을 보존합니다. 여러 업무는 업무별 접미사가 있는 파일로 구분합니다.

앞 단계 파일은 고정 스냅샷이 아니라 해당 단계의 최신 기준입니다. 구체적 진행 규칙과 산출물 형식은 각 Skill 정의에서 관리합니다.

## 외부 개발도구용 PRD

09는 최종 PRD 한 문서만 옮겨 개발할 수 있는 독립형 문서를 생성합니다. 이전 output은 작성·검증에만 참조하며 이관 본문에는 설계 원본 링크나 "앞 단계 참조" 지시를 넣지 않습니다. 필요한 요구사항·AI 판단 기준·데이터 계약·상태·예외·복구 규칙·AC는 본문에 풀어 씁니다. 실제 제품의 출처 URL이나 입출력 파일명은 구현 정보로 포함할 수 있습니다.

출력은 큰 표·Mermaid 없이 제목·문단·평면 목록 중심의 14개 섹션입니다.

1. 제품 개요
2. MVP 범위와 비목표
3. 사용자 흐름과 최종 결과
4. 기능별 구현 요구사항
5. AI 처리와 판단 기준
6. 데이터와 입출력 계약
7. 업무 규칙과 분기
8. 상태와 실패·복구
9. 사용자 수행과 승인 경계
10. 연동과 보안
11. 실행 환경과 개발 경계
12. Acceptance Criteria와 요구사항 연결
13. 구현 순서와 완료 기준
14. 문서 상태와 미확정 결정

기존 25섹션 PRD는 09 재실행 시 ID·사용자 교정을 보존하면서 새 구조로 재편합니다. 스킬 업데이트나 Viewer 저장이 기존 문서를 자동 재작성하지는 않습니다. Draft도 같은 구조를 사용하지만 핵심 미종결이 있으면 Build-ready가 아닙니다. 모든 Must→AC·독립성·Finality Gate 통과 시만 FINAL로 확정합니다.

## 현재 설계 사례

다음은 **교육 특강 주제 센싱** 업무의 설계 예시입니다. 실제 결과 문서는 로컬에서 관리합니다.

사용자 프로그램 시작 → 채널·범위 확인 → 수집·URL 식별 → 원문 저장·기준 갱신 → 요청 자료 준비 → 사용자 Copilot Chat 분석 → JSON 가져오기·검증 → 결과 저장·조회

- AI는 글별 한국어 3문장 요약·태그를 생성하고 최종 특강 주제는 별도로 결정합니다.
- 지정 공개 글 본문 전체를 Chat 요청에 포함하며 분석 실행·결과 전달은 사용자 수행입니다. 자동 Chat 재호출은 없습니다.
- 안전한 원문·범위 보존 후 최근 저장 글의 게시 시각으로 기준을 갱신하며 요약 완료는 기다리지 않습니다. 다음 수집은 그 시각 이후만 대상이며 같은 시각은 제외합니다.
- 게시 날짜만 있으면 해당 날짜 00:00을 비교값으로 사용하고 실제 시각과 정책 기본값을 구분합니다.
- 기존 자동 분석 예약은 이력을 보존하며 수동 분석 대기로 전환합니다. 형식 오류·다른 글·오래된 결과는 거절하고 동일 반환은 중복 저장하지 않습니다.
- 결과 저장 실패는 안전 보존된 같은 payload를 다음 사용자 실행에 저장만 1회 재시도하며 재실패는 유지합니다.
- 수동 재로딩은 새 본문·성공 결과를 함께 교체하고 실패면 기존 쌍을 유지합니다. 다른 성공 교정본 적용에는 명시 사용자 요청과 최신성 확인이 필요합니다.
- 채널 삭제는 향후 수집 중단이며 기존 기록은 보존합니다.

시간대·Source 접근·Chat 한도·계약/저장 구현 등의 미종결은 로컬 단계별 결과에서 관리합니다. 이 사례는 설계이며 수집·분석 프로그램이나 실제 검증 완료를 의미하지 않습니다.

## 로컬 문서 뷰어

[viewer.html](viewer.html)을 Chrome 또는 Edge에서 열고 **폴더 열기**로 `output/`을 선택합니다. 문서는 각각 표시되며 검색·목차·표·Mermaid 흐름도를 지원합니다.

**문서 저장** 또는 **전체 저장**을 누르고 프로젝트 폴더를 저장 위치로 선택하면 원본 폴더 밖의 `html/`에 문서별 독립 HTML을 생성합니다. 하위 폴더 구조와 문서 간 상대 링크도 유지합니다. 같은 이름의 HTML은 갱신되므로 별도 수정본은 다른 위치에 보관합니다. 폴더 저장은 File System Access API를 지원하는 Chrome/Edge가 필요합니다.

**Markdown 다운로드** 아이콘은 선택 문서를 원본 내용 그대로 `.md` 파일로 내려받습니다. 외부 개발도구에는 FINAL 상태의 독립형 PRD Markdown을 전달합니다. 다운로드는 참조 제거·14섹션 변환·FINAL 판정을 수행하지 않습니다. HTML 저장과 별개이며 저장 위치는 브라우저 다운로드 설정을 따릅니다.

- `output/`과 `html/`은 Git에서 제외됩니다. 원본 Markdown은 수정하지 않습니다.
- 공유 시 루트의 [viewer.html](viewer.html)과 `viewer/` 폴더를 함께 전달합니다. 업무 문서는 번들에 포함되지 않습니다.
- Markdown·보안 필터·Mermaid·아이콘은 로컬 번들에 포함됩니다. 문서 로딩·저장에 서버나 외부 전송이 필요하지 않습니다.
- 뷰어 코드를 수정할 때만 `npm.cmd ci` 후 `npm.cmd run build`로 번들을 갱신합니다.

## 프로젝트 구조

```text
.github/
  skills/
    01-workflow-interview/SKILL.md
    02-execution-design/SKILL.md
    03-abcd-design/SKILL.md
    04-to-be-workflow-design/SKILL.md
    05-task-specification/SKILL.md
    06-data-design/SKILL.md
    07-architecture-checklist/SKILL.md
    08-workflow-refinement/SKILL.md
    09-prd-generation/SKILL.md
output/  (01~09 결과, 로컬 실행 시 생성, Git 제외)
README.md
viewer.html
viewer/
  viewer.css
  viewer-source.js
  viewer-bundle.js
html/  (로컬 HTML 내보내기, Git 제외)
package.json
package-lock.json
```

이 저장소의 Skill 사용과 번들 Viewer 열기에는 앱 서버나 패키지 설치가 필요하지 않습니다. Viewer 소스 변경 시에만 개발 의존성과 빌드가 필요합니다. 수집·요약 시스템은 구현하지 않았습니다. 설계 Skill은 로컬 문서와 사용자 자료를 사용하며 외부 시스템·Connector 호출이나 실제 연동·보안승인 완료를 가정하지 않습니다.