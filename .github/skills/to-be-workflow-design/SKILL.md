---
name: to-be-workflow-design
description: 'Workflow Interview, Execution Design, ABCD Design 결과를 기반으로 Human, AI/Agent, HITL, Rule/System을 연결한 End-to-End To-Be Workflow를 설계하는 Skill. 사용자가 Workflow를 작성하지 않고 AI가 필요한 이전 output만 참조하여 전체 초안과 수정안을 먼저 제시한다. 업무·수행방식·ABCD 모순은 원인 단계로 Back Loop하여 합의된 수정사항을 해당 output에 현행화하고 후속 영향을 재검토한다. 현재 단계 결과만 output/04-to-be-workflow.md에 저장하여 Task/Data Specification에 전달한다.'
---

# To-Be Workflow Design

## 목적

이전 단계의 업무 Task와 수행방식을 하나의 End-to-End To-Be Workflow로 재조립한다.

`Trigger → Task → Task → ... → Final Output`

누가 무엇을 받고, 판단하고, 수행하고, 다음 단계에 무엇을 넘기며,
어디에서 Human이 개입해야 하는지를 정의한다.
목표는 형식적인 단계 통과나 AI 사용량 증가가 아니라 업무적으로 타당하고
역할이 명확하며 다음 단계에서 Task와 Data를 구체화할 수 있는 흐름이다.

## 핵심 원칙

### 1. AI Workflow가 아닌 Work Workflow

Human, Human + AI Assist, AI + HITL, AI / Agent, Rule / System,
No Change 모두 정상적인 요소로 사용한다. 모든 Task를 AI로 연결하지 않는다.

### 2. 필요한 이전 Output을 자동 참조

- 시작 시 `output/`을 확인한다. 3단계 ABCD → 2단계 Execution → 1단계 Interview 순서로 필요한 만큼만 내려간다.
- 기본 파일은 `03-abcd-design.md`, `02-execution-design.md`, `01-workflow-interview.md`이다. 파일명뿐 아니라 업무·단계·내용·갱신 정보를 확인한다.
- 3단계에서 Agent Target, Awareness, Knowledge, Inference, Decision, Conduct, HITL, Boundary, Exceptions, Constraints를 읽는다.
- 전체 Task·Role Allocation이 필요하면 2단계를, 업무 원형·암묵지·실제 Decision 근거가 필요하면 관련 1단계 Task를 읽는다.
- 이전 파일을 무조건 전체 로드하거나 현재 결과에 복사하지 않는다. 실제 파일의 상대 링크와 Task ID로 연결한다.
- 재실행은 기존 4단계 결과·참조·변경 이력을 먼저 확인하고 필요한 앞 단계 항목만 대조한다.
- 입력 파일이 없거나 해당 업무에 Agent가 없어도 멈추지 않는다. 대화·프로젝트 자료로 가능한 Human/System 중심 초안을 제시하고 꼭 필요한 정보만 확인한다.

### 3. 사용자는 Reviewer

Task 순서, Workflow 그림, 역할 배치, HITL 위치, 빈 Template을 사용자에게 요구하지 않는다.
AI가 전체 초안, 연결, 예외·복귀경로, 누락·불필요 Task, 통합·분리 후보를 먼저 제시한다.
중요한 설계 이유만 설명하고 확인은 한 번에 최대 3개로 제한한다.
답변을 받으면 부분 변경만 보여주지 않고 전체 흐름을 다시 제시한다.

## 설계 단위

각 Task에 최소 `Task ID, Task Name, Owner / Execution Mode, Input,
Core Work, Decision, Output, Next`를 정의한다.
상세 Data Schema, Data Contract, API, Architecture는 다음 단계에서 설계한다.

## Workflow Design Framework

### A. Start / Trigger

사용자 요청, 업무 요청, 상태 변경, 파일 생성, 일정 도래,
이전 Workflow 결과 등 시작 조건을 정의한다. 불명확하면 후보부터 제안한다.

### B. Task Sequence

선행 의존성, 병렬 가능성, 순서 변경, Decision 분기, 복귀,
불필요한 Hand-off를 검토한다. Interview As-Is 순서를 그대로 복사하지 않는다.

### C. Role Allocation

Execution Design의 합의된 수행방식을 기본값으로 사용한다.
미합의 Mode는 Proposed로 유지한다. 전체 연결에서 부적절함이 발견되면 수정안을 제시한다.
Task별 실행 주체와 Mode를 분리하여 사람의 책임과 System의 실행을 명확히 한다.

### D. AI / Agent Placement

ABCD의 `Awareness → Brain → Conduct → Output`을 실제 흐름에 배치한다.
Trigger 발생 위치, 선행 Task의 Input 공급, Knowledge 확보 시점,
Decision과 Action의 연결, 다음 Task의 Output 사용 가능성을 확인한다.
Agent가 없는 업무에 새 Agent를 억지로 추가하지 않는다.

### E. HITL Placement

`Trigger → Human Role → Human Decision → Return Path`를 실제로 배치한다.
Approval, Exception, Low-confidence, High-risk, Knowledge 중 필요한 유형만 사용한다.
승인 → 다음 Task, 수정 → AI 재실행, 반려 → Human 처리 등 결과별 복귀·종료를 정의한다.
사람 검토가 없는 합의된 흐름에 임의의 승인 게이트를 추가하지 않는다.

### F. Input / Output Flow

Task 사이에서 이동하는 정보를 개념 수준으로 연결한다.
각 Input의 공급자와 Output의 수신자를 확인하고 다음 Task/Data 단계가 상세화할 수 있게 한다.
필요한 Input이 없으면 자료가 존재한다고 가정하지 않고 Gap을 표시한다.

### G. Decision Branch

Criteria, 가능한 결과, 실제 다음 행동을 연결한다.
Decision이 참고용 분류에만 쓰이면 그 사실을 명시하고 임의의 제외·종료 분기를 만들지 않는다.

### H. Exception Flow

Input·Knowledge 부족, 판단 불확실, Tool 실패, 반려, 권한 부족,
처리 불가 중 업무 흐름을 바꾸는 핵심 예외만 다룬다.
재시도·복귀·종결 조건과 책임자를 정의하고 앞 단계의 횟수 제한·자료 보존 정책을 계승한다.
채널 수집 실패, 글 분석 실패, 결과 저장 실패 등 서로 다른 실패를 한 루프로 합치지 않는다.

### I. End / Final Output

최종 Output과 완료 조건을 명확히 한다.
건별 완료, 일일 실행 완료, 장기 반복 Workflow를 구분하여 종료 상태의 무한 루프를 방지한다.
별도 Human 최종 결정이 범위 밖이면 결과 전달 경계까지만 설계한다.

## Workflow Optimization

Eliminate, Combine, Simplify, Reorder, Parallelize, Automate / Augment를 내부 Lens로 사용한다.
불필요 Task 제거, 통합, 판단·Hand-off 단순화, 재배치, 병렬화, AI/System 지원을 검토하되
무조건 개선하거나 전문 용어를 사용자에게 노출하지 않는다.
Task 분리·통합이 필요하면 기존 ID와 새 ID의 관계를 기록하고 원인 단계에 반영한다.

## End-to-End Consistency Check

초안 후 전체 Workflow를 다시 읽고 다음을 확인한다.

- Start: Trigger 명확성.
- Task: 각 Task의 목적과 누락·중복.
- Role: 실행 주체와 합의 상태.
- Input: 선행 공급 또는 Human 입력 경로.
- Decision: 결과별 실제 Flow 또는 참고 분류의 명시.
- Output: 다음 Task와의 연결.
- HITL: 개입 이유, Human 결정, 복귀경로.
- Exception: 처리·재시도·종결과 책임.
- End: 최종 Output과 종료조건.

## Back Loop

이전 결과를 억지로 유지하거나 현재 Workflow 안에서 이전 오류를 숨기지 않는다.

### Level 3: ABCD로 복귀

Trigger 불일치, Input 공급 불가, 과도한 Boundary, 여러 독립 Goal 혼재,
Brain Decision과 Conduct 단절, HITL Return Path 누락, 유용하지 않은 Output이면
관련 3단계 설계를 참조하고 수정안을 제시한다.

`03 참조 → 수정안 → 필요 시 확인 → 03 현행화 → 04 재검토`

### Level 2: Execution Design으로 복귀

AI보다 Rule/System·Human이 적합, HITL 필요/불필요, 비효율적인 Mode,
No Change 적합, 자동화로 Hand-off 증가이면 수행방식을 재검토한다.

`02 수정안·합의 → 02 현행화 → 영향받는 03 재검토/수정 → 04 재검토`

### Level 1: Workflow Interview로 복귀

Task 정의·업무 순서 오류, 핵심 Task 누락, 과도한 Decision 혼재,
Knowledge·Inference·Criteria 오해, Exception·Tacit Knowledge 누락이면 업무 원본을 재검토한다.
To-Be 순서가 As-Is와 다르다는 이유만으로 Interview의 실제 업무 사실을 바꾸지는 않는다.

`01 관련 항목 참조 → 수정안·필요 시 확인 → 01 현행화 → 영향받는 02/03 재검토 → 04 재검토`

### 최소 수정과 영향 전파

1. 문제와 원인 단계를 식별한다.
2. 관련 output만 참조한다.
3. 수정 초안과 영향범위를 먼저 제시한다.
4. 필요한 경우 핵심 1~3개만 사용자 확인을 받는다.
5. 합의된 업무 변경은 1단계, 역할 변경은 2단계, Agent 상세는 3단계에 현행화한다.
6. 사용자 수정사항·관계없는 내용·Task ID 연결을 보존하고 간단한 변경 이력을 남긴다.
7. 영향받는 후속 설계만 재검토하고 4단계 전체 흐름을 갱신한다.
8. 재검토하지 못한 후속 항목은 해당 파일에 `? Need Check — 앞 단계 변경으로 재검토 필요`와 이유를 표시한다.

처음부터 다시 인터뷰하지 않는다. 단순 명칭 교정처럼 영향이 없는 변경은 전체 재계산하지 않는다.
AI 추정으로 확정 사실·권한을 바꾸지 않으며 합의되지 않은 수정은 Proposed로 남긴다.

## Interaction Workflow

1. **Load Previous Outputs:** 03 우선, 전체 Task·역할은 02, 업무 근거는 필요한 01만 읽는다.
2. **Build Workflow Draft:** 입력을 기다리지 않고 전체 v0.1, Mode, 분기, HITL, 예외, 최종 Output을 제시한다.
3. **Explain Key Decisions:** 통합·분리, Human 책임, 병렬화 등 중요한 판단만 설명한다.
4. **Self-review:** End-to-End 정합성을 검토하고 Back Loop 원인을 구분한다.
5. **Present Revision:** 문제 설명보다 질문부터 하지 않고 수정 Workflow와 필요 시 앞 단계 수정안을 먼저 제시한다.
6. **Critical Questions:** 필요한 경우 최대 3개, 선택·교정형을 우선한다.
7. **Rebuild Full Workflow:** 답변과 수정 결과를 반영하여 전체 흐름을 다시 보여준다.
8. **Repeat Until Stable:** Main Flow, 역할, Boundary, HITL, 분기·예외, I/O, 종료조건이 안정되면 완료한다.

## 상태 관리

- `✓ Confirmed`: 사용자 합의 또는 확인된 근거. 설계 권한·역할 위임은 명시적 합의가 필요하다.
- `△ Proposed`: AI 초안·미합의 수정. 앞 단계의 Proposed를 자동 Confirmed로 바꾸지 않는다.
- `? Need Check`: 후속 단계에 영향을 주는 미확인 사항.
- `⚠ Recheck`: 새로운 모순이 발견된 기존 Confirmed 항목의 임시 재검토 상태. 기존 근거·합의를 보존하고 해당 파일에 이유를 표시한다.

Recheck는 수정 결론의 승인과 다르다. 합의 후 관련 항목과 영향을 갱신한다.

## 완료 조건

Start, End-to-End Main Flow, Task 순서·Mode, Agent 연결,
Human 결정, HITL·복귀, 주요 Decision·Exception, 개념적 I/O,
Final Output, 이전 단계 정합성이 정의되면 완료한다.
Schema나 API 확정은 완료 조건이 아니다. 중요한 미합의 사항은 상태와 영향을 남긴다.

## 최종 산출물

# To-Be Workflow Design

## 1. Workflow Overview

- Workflow Name:
- Purpose:
- Trigger:
- Final Output:
- Main Actors:
- Status:
- Input References: 실제 앞 단계 파일 링크와 관련 Task ID.

## 2. To-Be Workflow

### Main Flow

텍스트 Flow 또는 Mermaid와 Task 표를 함께 제공한다. 정상 흐름, 중요 분기,
복귀·종료, 건별/실행별 완료를 구분한다. 다이어그램과 표의 연결을 일치시킨다.

## 3. Task Map

| ID | Task | Owner / Execution Mode | Input | Core Work / Decision | Output | Next | 상태 |
|---|---|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... | ... | ... |

## 4. Role Allocation

### Human
### Human + AI Assist
### AI + HITL
### AI / Agent
### Rule / System
### No Change

해당하지 않는 Mode는 없음과 이유를 짧게 기록한다.

## 5. Decision Flow

| Decision | Owner | Criteria | Result | Next Flow |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

## 6. HITL Flow

| Task | HITL Type | Trigger | Human Role / Decision | Return / Next |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

HITL이 없으면 없음과 이유를 기록한다. 억지로 생성하지 않는다.

## 7. Exception Flow

| Situation | Detected By | Handling / Owner | Return / End |
|---|---|---|---|
| ... | ... | ... | ... |

## 8. Input / Output Flow

| From | Output | To | Input | 정합성 |
|---|---|---|---|---|
| ... | ... | ... | ... | ✓ / △ / ? |

상세 Schema는 다음 단계에서 정의한다. 정합성 상태를 사용자 합의 상태와 구분한다.

## 9. Key Design Decisions

중요한 Decision별 기존/제안 변경/이유/합의 상태를 기록한다.

## 10. Back Loop Log

이전 단계 수정이 없으면 `No Back Loop`를 기록한다.

| From | Back To | 발견 문제 | 수정 내용 | 영향 |
|---|---|---|---|---|
| Workflow | ABCD / Execution / Interview | ... | ... | ... |

## 11. Open Issues

다음 Task/Data 단계에 실제 영향을 주는 핵심 사항만 남긴다.

## 12. Next Stage Handoff

다음 `Task Specification / Data Structure`가 사용할 정보만 정리한다.

### Workflow
### Task List
### Execution Mode
### Task Input / Output
### Knowledge Requirement
### Inference / Decision
### Agent Tasks
### HITL
### Human Tasks
### Rule/System Tasks
### Decision Branch
### Exceptions
### Constraints
### Open Issues

이전 상세 근거는 필요한 Task ID와 참조 파일로 연결하고 전체 본문을 누적하지 않는다.

## Output 저장 및 검증

- 완료 후 현재 To-Be Workflow와 Handoff만 `output/04-to-be-workflow.md`에 저장한다. 폴더가 없으면 생성한다.
- 01~03 전체 본문을 복사하지 않는다. 이 단계의 순서·연결·분기 설계를 저장하며 과거 근거는 참조한다.
- 파일이 있으면 먼저 읽고 동일 업무의 갱신 시 사용자 수정을 보존한다. 다른 업무와 겹치면 `04-to-be-workflow-<업무-slug>.md` 등으로 별도 저장한다.
- Back Loop 합의사항은 원인 단계 파일에 반영한 뒤 후속 영향을 검토하고 현재 결과를 갱신한다.
- 저장 후 12개 필수 섹션, 참조 파일, Task ID·Next·I/O 연결, Diagram/표 일치, 분기·복귀·종료, 권한·상태·재시도 정책을 검증하고 파일 오류를 확인한다.
- 채팅에는 저장 링크와 핵심 변경을 안내한다. 저장 도구가 없으면 결과를 채팅으로 제공하고 저장 불가를 명시한다.

## 외부 시스템 제한

실행 중 외부 시스템·Connector를 사용하지 않는다.
현재 대화, 프로젝트 파일, 사용자 제공 자료, 이전 output만 사용한다.
API·시스템 기능·권한이 확인되지 않았으면 실제 존재한다고 가정하지 않고
`? Architecture Check Required`로 표시하여 후속 단계로 넘긴다.
설계가 기능 구현 완료를 의미하지 않음을 구분한다.

## 금지사항

1. Workflow를 사용자에게 그리게 하지 않는다.
2. 이전 결과를 다시 입력하도록 요구하지 않는다.
3. As-Is 순서를 그대로 To-Be로 복사하지 않는다.
4. 모든 Task를 AI로 변경하지 않는다.
5. 가능하다는 이유만으로 Agent를 유지하지 않는다.
6. Rule/System이 적절한 곳에 LLM을 넣지 않는다.
7. HITL을 단순 확인으로 기계적으로 추가하지 않는다.
8. 필요한 HITL의 Return Path를 누락하지 않는다.
9. Decision 결과와 실제 Branch를 연결하지 않은 채 두지 않는다.
10. 모든 예외를 상세화하여 흐름을 과도하게 복잡하게 만들지 않는다.
11. 상세 Data Schema/API/Architecture를 확정하지 않는다.
12. 이전 오류를 현재 Workflow에서 억지로 해결하지 않는다.
13. Back Loop 시 처음부터 다시 입력시키지 않는다.
14. 이전 output 전체를 현재 output에 복사하지 않는다.

## Interaction Style

필요한 이전 Output 참조 → 전체 End-to-End 초안 → 역할·Agent·HITL·Decision·I/O 연결
→ 자체 검토 → 문제 탐지 → 필요 시 01/02/03 Back Loop 수정안
→ 핵심 1~3개 확인 → 합의된 원본 현행화 → 후속 영향 재검토
→ 전체 수정 Workflow 제시 → 안정되면 04 저장

사용자는 작성자가 아닌 Reviewer다. AI가 가능한 범위에서 전체 구조와 수정안을 먼저 제안한다.