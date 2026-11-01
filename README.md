# Workflow Design Skills

실제 업무와 그 안에 숨어 있는 판단 기준, 경험지식, 암묵지를 이해하고 수행방식·Agent·End-to-End Workflow로 구체화하는 VS Code Copilot Skill 모음입니다.

사용자가 빈 양식을 채우는 대신 AI가 업무 설명과 자료를 바탕으로 초안을 제시하고, 사용자는 틀리거나 불확실한 부분만 교정합니다.

## 4단계 설계

| 단계 | Skill | 설계 내용 | 로컬 결과 경로 |
|---|---|---|---|
| 1 | [Workflow Interview](.github/skills/workflow-interview/SKILL.md) | Task·지식·추론·판단·예외·암묵지 | `output/01-workflow-interview.md` |
| 2 | [Execution Design](.github/skills/execution-design/SKILL.md) | 수행방식·역할·HITL·설계 이유 | `output/02-execution-design.md` |
| 3 | [ABCD Design](.github/skills/abcd-design/SKILL.md) | Awareness·Brain·Conduct·Derived Value와 Agent 경계 | `output/03-abcd-design.md` |
| 4 | [To-Be Workflow Design](.github/skills/to-be-workflow-design/SKILL.md) | Task 순서·I/O·분기·HITL·예외·종료 | `output/04-to-be-workflow.md` |

결과는 Skill 실행 시 로컬에 생성됩니다. `output/`과 내보낸 `html/`은 Git에서 제외되며 저장소를 복제해도 업무 결과는 포함되지 않습니다.

수행방식은 Human, Human + AI Assist, AI + HITL, AI / Agent, Rule / System, No Change 중에서 선택합니다. 모든 Task를 AI로 전환하지 않습니다.

## 1단계 목적

업무 수행 과정을 다음 구조의 **Task & Decision Map**으로 정리합니다.

`Context → Task → Knowledge → Inference → Decision → Action/Output → Exception`

이 단계는 실제 업무를 이해하고 외재화하는 데 집중합니다. AI/Agent/HITL 적용 여부를 최종 결정하거나 Agent를 설계하지 않습니다.

## 사용 방법

1. 이 프로젝트를 VS Code에서 엽니다.
2. Copilot 채팅에서 `/workflow-interview`를 선택합니다.
3. 분석할 업무를 한두 문장으로 설명합니다. 참고 자료가 있으면 함께 제공합니다.
4. AI가 제시한 초안에서 틀린 부분을 교정하거나 확인사항에 답합니다.
5. 결과가 준비되면 `/execution-design 진행하자`, `/abcd-design 진행하자`, `/to-be-workflow-design 진행하자` 순서로 실행합니다.

후속 Skill은 필요한 이전 결과를 자동 참조하므로 내용을 다시 입력할 필요가 없습니다. AI가 전체 초안·수정안을 먼저 제시하고 사용자는 Reviewer로서 확인합니다.

입력 예시:

```text
/workflow-interview
저는 사내 교육 담당자입니다. 부서별 교육 요청을 받아 기존 과정과
중복되는지 확인하고, 대상자와 일정을 검토해 교육 운영안을 작성합니다.
```

명령이 목록에 보이지 않으면 VS Code의 Agent Skills 지원 및 설정을 확인합니다. Skill 정의는 [.github/skills/workflow-interview/SKILL.md](.github/skills/workflow-interview/SKILL.md)에 있습니다.

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

- 단계별 결과에는 해당 단계 내용만 저장하며 이전 결과 전체를 복사하지 않습니다.
- 필요한 업무 근거는 상대 링크와 Task ID로 연결합니다.
- 앞 단계 문제가 발견되면 원인 단계로 돌아가 AI가 수정안을 먼저 제시합니다.
- 합의된 업무 변경은 1단계, 역할 변경은 2단계, Agent 상세는 3단계에 현행화합니다.
- 변경 이력을 남기고 영향받는 후속 설계를 재검토합니다. 미검토 항목은 Need Check로 표시합니다.
- 사용자 수정사항을 보존합니다. 여러 업무는 업무별 접미사가 있는 파일로 구분합니다.

앞 단계 파일은 고정 스냅샷이 아니라 해당 단계의 최신 기준입니다. 구체적 진행 규칙과 산출물 형식은 각 Skill 정의에서 관리합니다.

## 현재 설계 사례

다음은 **교육 특강 주제 센싱** 업무의 설계 예시입니다. 실제 결과 문서는 로컬에서 관리합니다.

채널 관리 → 범위 확인 → 수집·동일 글 식별 → 자료 저장·기준 갱신 → AI 요약 → 결과 저장 → 검토 자료 제공

- AI는 글별 한국어 3문장 요약·태그를 생성하고 최종 특강 주제는 별도로 결정합니다.
- 자료 저장 후 기준을 갱신하며 요약 완료는 기다리지 않습니다.
- 요약 실패는 다음 실행에 해당 글만 재로딩·재분석 1회로 복구하고 재실패는 유지합니다.
- 결과 저장 실패는 AI 재호출 없이 생성 결과만 재저장합니다.
- 채널 삭제는 향후 수집 중단이며 기존 기록은 보존합니다.

미정 사항과 다음 Task/Data 단계 전달 내용은 로컬 4단계 결과에 기록하며 뷰어에서 확인할 수 있습니다.

## 로컬 문서 뷰어

[viewer.html](viewer.html)을 Chrome 또는 Edge에서 열고 **폴더 열기**로 `output/`을 선택합니다. 문서는 각각 표시되며 검색·목차·표·Mermaid 흐름도를 지원합니다.

**문서 저장** 또는 **전체 저장**을 누르고 프로젝트 폴더를 저장 위치로 선택하면 원본 폴더 밖의 `html/`에 문서별 독립 HTML을 생성합니다. 하위 폴더 구조와 문서 간 상대 링크도 유지합니다. 같은 이름의 HTML은 갱신되므로 별도 수정본은 다른 위치에 보관합니다. 폴더 저장은 File System Access API를 지원하는 Chrome/Edge가 필요합니다.

- `output/`과 `html/`은 Git에서 제외됩니다. 원본 Markdown은 수정하지 않습니다.
- 공유 시 루트의 [viewer.html](viewer.html)과 `viewer/` 폴더를 함께 전달합니다. 업무 문서는 번들에 포함되지 않습니다.
- Markdown·보안 필터·Mermaid·아이콘은 로컬 번들에 포함됩니다. 문서 로딩·저장에 서버나 외부 전송이 필요하지 않습니다.
- 뷰어 코드를 수정할 때만 `npm.cmd ci` 후 `npm.cmd run build`로 번들을 갱신합니다.

## 프로젝트 구조

```text
.github/
  skills/
    workflow-interview/
      SKILL.md
    execution-design/
      SKILL.md
    abcd-design/
      SKILL.md
    to-be-workflow-design/
      SKILL.md
output/
  01-workflow-interview.md
  02-execution-design.md
  03-abcd-design.md
  04-to-be-workflow.md
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

이 저장소는 Skill과 설계 문서를 제공하며 앱 실행이나 패키지 설치는 필요하지 않습니다. 수집·요약 시스템은 구현하지 않았습니다. 상세 Data Schema, API, Architecture는 후속 설계 범위이며 2~4단계 Skill 실행에서는 외부 시스템·Connector를 사용하지 않습니다.