---
name: 05-task-specification
description: 'To-Be Workflow의 각 Task를 Trigger, Input, Knowledge, Inference, Decision, Action, Output, Owner, HITL, Exception, Completion Condition으로 상세화하는 5단계 Task Specification Skill. AI가 필요한 이전 output만 참조하여 전체 명세 초안과 수정안을 먼저 제시하고 사용자는 Reviewer로 교정한다. Workflow, ABCD, Execution Design, Interview의 오류는 원인 단계로 Back Loop하여 합의된 이전 output을 현행화하고 후속 영향을 재검토한다. 현재 명세와 다음 Data Structure & Contract 단계 Handoff만 output/05-task-specification.md에 저장한다.'
---

# 05. Task Specification

## 실행 번호 안내

실행 요청 시 첫 안내에 `05/09 · Task Specification 실행`을 표시한다. 재개·Back Loop에서도 현재 단계 번호와 대상 항목을 함께 안내한다. 호출 이름은 `/05-task-specification`이며 이 변경은 업무 내용·output 번호·Finality 조건을 바꾸지 않는다.

## Finality Gate — 미종결 항목 심층 추적

- output의 △/Draft/Proposed/? Need Check/Recheck/Conflict/Missing/A Architecture Check 및 조건부 판정은 종결 전까지 추적한다. 기호만 바꾸거나 "후속 확인"으로 넘기고 끝내지 않는다.
- 미종결마다 Task ID·항목·현재 근거·원인·영향·추천 해결·대안·검증 방법·통과 기준·확인 책임을 기록한다. 기존 확인 필요/이력/Handoff 섹션을 사용하며 정해진 번호 형식은 유지한다.
- 필요한 로컬 근거와 책임 원본부터 조사하고 반례로 확인한다. 해결안을 먼저 작성한 뒤 결정을 바꾸는 핵심 질문만 매번 최대 1~3개 묻는다. 답변 후 원본 현행화→후속 영향 검토→동일 항목 재검증을 반복한다.
- Finality 종결은 근거/필요 검증·사용자 합의로 확정하거나 승인된 대안·제외를 원본과 후속 영향에 반영한 경우다. 조건부 진행·다음 단계 인계 자체는 종결이 아니다.
- 증거/도구/권한이 없어 더 확인할 수 없으면 미종결로 남기고 정확한 막힌 지점·필요 자료·다음 행동을 제시한다. 외부 호출 제한·단계 경계를 지키며 없는 API/권한/품질/검증 결과를 만들지 않는다.
- 미종결이 있으면 초안 저장은 허용하되 단계 완료/다음 단계 준비 완료/Ready/확정 기준선으로 표시하지 않는다. 다음 단계는 완료 승격 없이 조건부 초안 검토를 이어갈 수 있다. 확인된 Blocker·권한 제한은 우회하지 않는다.
- 인계 시 기존 Open Issues/Handoff에 항목 ID·Task ID·책임 원본 링크·원인/영향·필요 증거·추천/대안·통과 기준·재확인 단계/조건을 남긴다. 인계된 항목도 미종결이며 삭제하거나 자동 확정하지 않는다.
- 다음 단계 시작 시 이전 output의 미종결 목록을 확인하고 현재 범위에 관련된 항목의 원본·근거를 선택 참조해 다시 검증한다. 이미 받은 답을 재질문하지 않고 새 Data/Task/Architecture 근거로 해결안을 구체화한다.
- 종결 시 책임 원본 상태·근거·이력과 관련 후속 output을 현행화하고 재검증한다. 미해결 항목은 같은 ID로 다음 Handoff에 유지하며 검토 결과/막힌 지점/다음 행동을 기록한다. 후속 단계에서 판단할 항목도 누락하지 말고 재확인 책임을 연결한다.
- 기존 "Need Check를 남겨 종료 가능" 문구는 이 Gate를 충족할 때만 적용한다. 새 근거로 종결 결론이 깨지면 이유를 남기고 재개한다. 저장 후 미종결 누락·원본 정합성·종결 근거를 검사하고 채팅에는 종결/남은 조건을 구분한다.

## 목적

To-Be Workflow의 각 Task를 구현 가능한 업무 단위로 상세화한다.
4단계의 '누가 어떻게 일하는가'를 넘어 '정확히 무엇을 받아, 무엇을 알고,
어떻게 판단하고 수행하여 다음 Task에 무엇을 넘기는가'를 정의한다.

`Trigger → Input → Knowledge → Inference → Decision → Action → Output`

Owner, Execution Mode, HITL, Exception, Constraint, Completion Condition을 함께 정의한다.
다음 Data Structure & Contract 단계가 상세 데이터를 설계할 수 있게 하되 여기서 Schema를 확정하지 않는다.

## 핵심 원칙

- 사용자는 Reviewer다. Task별 Input/Output/기준 작성이나 빈 Template 입력을 요구하지 않는다.
- AI가 전체 Task Spec 초안을 먼저 만들고 불확실성·수정안을 먼저 제시한다.
- 핵심 업무 사실만 한 번에 최대 3개 확인한다. 선택·교정형을 우선한다.
- 모든 Task를 자동화하거나 Agent처럼 분석하지 않는다. 단순 Rule 적용은 간결하게 기술한다.
- 이전 단계의 합의 상태·역할·권한을 계승한다. 새 상세 추정은 Proposed이지 자동 승인이 아니다.

## 선택적 입력 참조

1. `output/`에서 해당 업무의 최신 `04-to-be-workflow.md`를 찾는다. 이름뿐 아니라 업무·내용·갱신 이력을 확인한다.
2. Workflow Trigger, Task List/Sequence, Mode, I/O, Decision Branch, HITL, Exception,
   Final Output, Constraints, Open Issues를 우선 읽는다.
3. 필요한 경우에만 03 ABCD의 Agent Knowledge·Inference·Decision·Conduct·Boundary·State를 읽는다.
4. 역할 배정 근거는 02 Execution Design, 실제 업무 판단·암묵지·정보 의미는 01 Interview에서 관련 Task만 읽는다.
5. 이전 본문을 무조건 로드하거나 복사하지 않는다. 상대 파일 링크와 Task ID로 근거를 연결한다.
6. 재실행 시 기존 05의 참조·명세·변경 이력을 먼저 읽고 필요한 앞 단계와 대조한다.
7. 입력이 없으면 대화·프로젝트 자료로 가능한 전체 초안을 만들고 출처 부족을 표시한다. 이전 결과 재입력을 요구하지 않는다.

## Task Specification Framework

### A. Identity

- **Task ID:** Workflow ID를 그대로 유지한다. T1을 임의로 T01로 바꾸지 않는다.
- **Task Name:** 가능하면 동사 + 대상. 명칭만 바꿔도 ID 연결은 보존한다.
- **Purpose:** 존재 이유를 한 문장으로 기술한다.
- Workflow의 호출 지점·정기/복구 경로는 같은 Task의 실행 변형으로 먼저 상세화한다.
  독립 Task 분리·통합이 필요하면 04로 Back Loop하고 ID 매핑을 기록한다.

### B. Trigger

이전 Output 준비, 특정 Decision 결과, Human 요청, 상태 변경, 일정·조건, Exception 등
실제 시작조건을 정의한다. 단순 '이전 Task 이후'보다 준비되어야 하는 조건을 명시한다.

### C. Owner / Execution Mode

Human, Human + AI Assist, AI + HITL, AI / Agent, Rule / System, No Change를 계승한다.
주 수행자와 책임을 구분한다. 부적절한 Mode는 임의 변경하지 않고 02 Back Loop 수정안으로 제시한다.

### D. Input

- **Primary:** Task 수행을 직접 가능하게 하는 핵심 입력.
- **Supporting Context:** 해석에 필요한 기준·업무 상태·이력.
- **Previous Output:** 공급 Task와 전달 결과.

개념적 수준으로 정의한다. 상세 Field, Type, Required/Optional은 Data Contract 단계에 남긴다.

### E. Knowledge

- **정보지식:** 문서·데이터·정책·기록·사실.
- **경험지식:** 사례·Cue·노하우·암묵지. 확인되지 않은 담당자 경험을 꾸며내지 않는다.
- **논리지식:** Rule·Constraint·Criteria·Principle.
- **Required/Missing:** 새로 필요한 지식은 `△ Required Knowledge`, 미확인 출처는 Need Check.

Agent는 ABCD Brain을 계승한다. 단순 System에는 해당 지식만 간결하게 기술하고 없는 경험을 억지로 추가하지 않는다.

### F. Inference

Input과 Knowledge에서 판단·Output으로 가는 실제 논리를 설명한다.
비교·요약·분류·Rule 적용·원인 가설·유사사례·확률적 추론 등을 사용할 수 있다.
Deduction/Induction/Abduction/Analogy 등의 이름만 붙이지 않는다.
예: '기존 교육이력과 신규 요청을 비교하여 중복성과 차별성을 판단'.
별도 추론이 없으면 없음 또는 결정론적 Rule 적용으로 명시한다.

### G. Decision

실제 Decision에 Question, Criteria, Possible Results, Next Flow를 정의한다.
결과별 Task·HITL·복귀·종료를 연결한다. 참고용 분류는 참고 정보임을 표시하고 저장 제외 분기를 만들지 않는다.
Decision이 없으면 `No explicit decision`을 기록한다.

### H. Action

실제 수행내용을 구체적으로 기술한다. '처리한다' 대신 결과 생성·비교·저장·Review 요청 등을 명시한다.
AI는 ABCD Conduct와 허용 권한을 계승한다. 존재하지 않는 API 호출을 확정하지 않는다.

### I. Output

다음 Task가 사용할 개념적 결과와 수신자를 정의한다. 실패 결과도 정상 Output과 구분한다.
Field Schema는 다음 단계에서 정의한다.

### J. HITL

`Trigger → Human Role → Human Decision → Return / Next`를 계승한다.
단순 '사람 검토'로 쓰지 않는다. 없으면 `None`을 기록한다.
일반 사용자 입력과 AI 승인 HITL, 선택적 사후 교정을 구분한다.
기존 무승인·응답 대기 없는 정책에 임의 게이트를 넣지 않는다.

### K. Exception / Constraint

중요한 Input 부족·Knowledge 부재·판단 불가·Tool 실패·반려·권한 부족만 정의한다.
`Exception → Handling / Owner → Return / Next / End`를 연결한다.
분석 실패·자료 저장 실패·결과 저장 실패를 구분하고 이전 재시도 제한·보존·종결 정책을 유지한다.
복구 불가·기능 미확인은 Need Check로 남기며 무한 재시도를 제안하지 않는다.

### L. Completion Condition

언제 완료되는지 검증 가능한 조건으로 정의한다. 이후 Acceptance Criteria의 기초다.
Action 성공, Output 생성, 결과 저장, Human 승인 등이 항상 같은 완료조건은 아니다.
Task 완료·실패 종결·복구 예약과 전체 Workflow 완료를 구분한다.

## Granularity / Boundary Check

명확한 목적, 하나의 주 수행자, 식별 가능한 Input, 의미 있는 Output을 기준으로 검토한다.

- 서로 다른 Goal·독립 Decision, Owner 변경, 여러 I/O 전환, 반복 HITL, 과도한 Agent 역할이면 분리를 검토한다.
- 독립 Output·Decision이 없고 같은 Owner의 내부 동작이면 통합을 검토한다.
- 항상 하나의 AI 호출로 처리되는 읽기/분류를 기술 동작별 Task로 과도하게 쪼개지 않는다.
- 분리·통합 결론은 04 수정안과 필요한 02/03 영향 검토를 거친다. 현재 Spec 안에서만 ID를 추가하지 않는다.

## Connection / Traceability / Self-review

전체 초안 후 모든 `Previous Output → Current Input`을 개념적으로 대조한다.
상세 Field-level 검증은 다음 Data Contract 단계에서 수행한다.
중요한 근거만 Workflow Task ID, ABCD Agent/Task ID, Execution Decision, Interview Decision과 연결한다.

각 Task의 Purpose, Trigger, Input, Knowledge, Inference, Decision/Criteria/Next,
Action, Output, Owner, HITL/Return, Exception, Completion을 재검토한다.
없는 항목은 명시적으로 없음으로 기록하고 실제 Gap은 숨기지 않는다.

## Back Loop

현재 명세로 이전 오류를 억지로 덮지 않는다. 원인 단계와 수정 초안·영향을 먼저 제시한다.

| 원인 단계 | 복귀 조건 | 영향 검토 경로 |
|---|---|---|
| 04 Workflow | 순서·누락·중복·분리/통합·I/O 연결·분기·HITL 위치·예외 복귀·최종 Output 오류 | 04 수정 및 ID/순서 매핑 → 05 재검토 |
| 03 ABCD | Agent Knowledge·Inference·Criteria·Conduct/Output·Boundary·HITL·State/Trigger 문제 | 03 수정 → 04 영향 검토/필요 시 수정 → 05 |
| 02 Execution | AI보다 System/Human 적합, HITL 필요/불필요, Mode 때문에 복잡, 자동화 실익 없음 | 02 수정 → 03/04 영향 검토 → 05 |
| 01 Interview | 업무 이해·지식·추론·기준·암묵지·예외·I/O 의미 오류 | 관련 01 수정 → 영향받는 02/03/04 검토 → 05 |

### 최소 수정과 영향 전파

1. 문제 지점과 원인 단계를 식별하고 관련 output만 읽는다.
2. 수정 초안·영향범위를 제시한다. 질문부터 하거나 전체 인터뷰를 재시작하지 않는다.
3. 필요한 업무 사실·설계 권한은 최대 3개만 확인한다.
4. 합의된 변경 또는 확인된 사실 교정만 해당 원본에 현행화한다. AI 추정은 Proposed로 유지한다.
5. Task ID·수동 수정·기존 합의 근거를 보존하고 짧은 변경 이력을 남긴다.
6. 분리/통합은 04와 ID 매핑, Mode 변경은 Owner/HITL/Action 및 02/03,
   명칭만 변경되면 연결 로직 영향만 최소 검토한다.
7. 영향받는 후속 output을 재검토·수정한다. 미검토 항목은 해당 파일에 Need Check와 이유를 남긴다.
8. 최신 Workflow 기준으로 전체 05 연결을 다시 검토한다. 전체 이전 본문을 복사하지 않는다.

## Interaction Workflow

1. 최신 04와 재실행 시 기존 05를 읽는다.
2. 필요한 03/02/01 근거만 선택 참조한다.
3. 모든 핵심 Task의 전체 Spec Draft를 먼저 생성한다.
4. Task 크기·Boundary와 Output/Input 연결을 검토한다.
5. Missing Input/Knowledge/Criteria/Output, Owner/HITL 불일치, 예외·완료 누락을 탐지한다.
6. 수정 초안과 필요 시 Back Loop를 먼저 제시한다.
7. AI가 결정할 수 없는 중요한 사실만 최대 3개 확인한다.
8. 합의된 원본을 현행화하고 후속 영향을 검토한다.
9. 부분 수정만 보여주지 않고 전체 Task Spec을 최신 흐름과 재검토한다.
10. 안정되면 05 결과와 Data Contract Handoff를 저장한다.

## 상태 및 완료

- `✓ Confirmed`: 확인된 사실·사용자 합의. 권한·Mode 승인은 명시적 합의 필요.
- `△ Proposed`: AI 초안·미합의 상세 설계.
- `? Need Check`: 중요 미확인 사항·후속 영향 미검토.
- `⚠ Recheck`: 기존 Confirmed 모순 발견. 기존 근거를 보존하고 원본에 이유를 남긴다.

Recheck는 새로운 수정 결론의 승인이 아니다.
모든 핵심 Task의 Framework 항목(없음 포함), 개념적 연결·분기, Workflow/ABCD 정합성이
정의되어 Data Contract에서 Schema를 구체화할 수 있으면 완료한다.
핵심 모순은 해결하거나 Must Resolve로 명시하고 조건부 초안임을 표시한다.
데이터 타입·API 미정만으로 불필요하게 업무 확인을 반복하지 않는다.

## 최종 산출물

# Task Specification

## 1. Specification Overview

Workflow, Purpose, Number of Tasks, Start, Final Output, Status, Input References를 기록한다.
Task 수와 호출 지점 수를 구분한다.

## 2. Task Specification Summary

| ID | Task | Owner / Mode | Trigger | Input | Core Work | Decision | Output | Next | 상태 |
|---|---|---|---|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

## 3. Detailed Task Specifications

각 Workflow Task ID별로 다음 항목을 반복한다. 같은 Task의 실행 변형은 내부에서 구분한다.

### [Task ID]. [Task Name]

- **Purpose:**
- **Owner / Execution Mode:**
- **Trigger:**
- **Input:** Primary / Supporting Context / Previous Output와 공급 Task.
- **Knowledge:** 정보지식 / 경험지식 / 논리지식 / Required-Missing.
- **Inference:** 실제 분석 논리 또는 없음.
- **Decision:** Question / Criteria / Results / Next Flow 또는 No explicit decision.
- **Action:** 구체적인 수행내용.
- **Output:** 결과와 수신 Task.
- **HITL:** Type / Trigger / Human Role / Human Decision / Return-Next 또는 None.
- **Exception:** Situation / Handling-Owner / Return-Next-End.
- **Constraint:** 권한·보존·재시도 등 제약.
- **Completion Condition:** 검증 가능한 완료·실패/예약 경계.
- **Status / References:** 필요한 근거만 연결.

## 4. Task Connection Map

| From | Output | To | Input | 연결 상태 |
|---|---|---|---|---|
| ... | ... | ... | ... | ✓ / △ / ? |

연결 정합성과 사용자 합의 상태를 구분한다.

## 5. Decision & Branch Map

| Task | Decision / Criteria | Result | Next |
|---|---|---|---|
| ... | ... | ... | ... |

## 6. HITL Map

| Task | Type | Trigger | Human Role / Decision | Return / Next |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

HITL이 없으면 섹션은 유지하고 None과 이유를 기록한다.

## 7. Exception Map

| Task | Exception | Handling / Owner | Return / Next / End |
|---|---|---|---|
| ... | ... | ... | ... |

핵심 Exception만 포함한다.

## 8. Missing / Required Items

### Must Resolve
업무 의미·핵심 역할·분기 등 다음 단계 전에 해결해야 하는 항목과 영향을 기록한다.
### Can Resolve in Data Contract
개념적 입력·출력의 상세 Field·Type·필수 여부 등.
### Can Resolve in Architecture
기능 존재·연동·저장·보안 구현 등. Architecture Check Required를 표시한다.

## 9. Back Loop Log

수정이 없으면 No Back Loop를 기록한다.

| From | Back To | 발견 문제 | 수정 내용 | 영향 |
|---|---|---|---|---|
| Task Spec | 04 / 03 / 02 / 01 | ... | ... | ... |

## 10. Next Stage Handoff

다음 Data Structure & Contract에 필요한 내용만 정리한다.

### Task List
### Task Input / Output
### Previous → Next Connections
### Required Context
### Required Knowledge
### Decision Results
### HITL Inputs / Outputs
### Exception Inputs / Outputs
### Missing Data Items
### Architecture Check Items

상세 근거는 앞 단계 파일과 Task ID로 연결한다.

## 저장 및 검증

- 현재 Task Specification과 Handoff만 `output/05-task-specification.md`에 저장한다.
- 01~04 전체 본문을 복사하지 않는다. Back Loop 합의는 원인 단계 파일에도 반영한다.
- 기존 파일을 먼저 읽고 동일 업무는 수동 수정을 보존하여 갱신한다.
  다른 업무와 충돌하면 `05-task-specification-<업무-slug>.md`를 사용한다.
- 저장 후 10개 필수 섹션, 실제 참조 파일, Workflow ID/Task 수, 모든 Task의 Framework,
  I/O 공급·수신, 결과별 Next, HITL·예외 복귀, 완료조건·권한·재시도 정책을 검증한다.
- 파일 오류를 확인하고 저장 링크·주요 수정·미확인 사항을 안내한다.
- 저장 불가 시 결과를 채팅에 제공하고 저장하지 못했음을 명시한다.

## 다음 단계 경계와 외부 시스템 제한

Field Schema, Data Type, Required/Optional, API Endpoint, DB Schema, LLM Model,
RAG Architecture, 인증/권한 구현, 상세 UI를 확정하지 않는다.
필요성만 Data Contract Required 또는 Architecture Check Required로 표시한다.

실행 중 외부 시스템·Connector를 사용하지 않는다. 현재 대화·프로젝트 파일·사용자 자료·이전 output만 사용한다.
확인되지 않은 API/System/Data Source가 존재한다고 가정하지 않는다. 명세는 기능 구현 완료가 아니다.

## 금지사항

1. 사용자에게 빈 Task Spec 작성이나 이전 내용 재입력을 요구하지 않는다.
2. 모든 Task에 Decision을 억지로 만들지 않는다.
3. Knowledge/Inference를 과도하게 확장하거나 단순 System을 Agent처럼 분석하지 않는다.
4. Workflow 오류를 Spec 안에서만 해결하거나 Agent 권한을 임의 변경하지 않는다.
5. 이전 오류를 무시하거나 합의되지 않은 수정안을 원본의 Confirmed로 덮어쓰지 않는다.
6. 상세 Schema를 확정하거나 확인되지 않은 기능·데이터를 가정하지 않는다.
7. 긴 질문목록을 제시하거나 처음부터 다시 인터뷰하지 않는다.
8. 이전 output 전체를 복사하거나 Task를 미세 기술 동작으로 과도하게 분해하지 않는다.
9. Completion Condition 없이 완료 처리하지 않는다.

## Interaction Style

04 자동 참조 → 필요한 근거만 역추적 → 전체 Task Spec 초안 → 크기·연결 검토
→ Gap/모순 탐지 → 원인 단계 Back Loop 수정안 → 핵심 최대 3개 확인
→ 합의된 원본 현행화 → 후속 영향 검토 → 전체 Spec 재검토 → 05 저장.

사용자는 Reviewer이며 AI가 가능한 전체 명세와 수정안을 먼저 제시한다.