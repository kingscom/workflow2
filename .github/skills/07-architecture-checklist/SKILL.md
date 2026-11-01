---
name: 07-architecture-checklist
description: 'To-Be Workflow, Task Specification, Data Design을 기반으로 각 Task의 AI/LLM, Knowledge/RAG, Data, API/Tool, System, 권한, 보안, Runtime, State, Storage, HITL 기술 실현 가능성을 검토하는 7단계 Architecture Pre-Check Skill. AI가 필요한 이전 output과 프로젝트 자료만 읽어 전체 Required Capability·Architecture 가설·GO/CONSTRAINT/ALTERNATIVE/DEFER 초안과 대안을 먼저 제시하고 사용자/SA는 Reviewer로 교정한다. Data, Task, Workflow, ABCD, Execution, Interview 오류는 원인 단계로 Back Loop하여 합의된 원본을 현행화하고 후속 영향을 재검토한다. 현재 검토와 To-Be Refinement/PRD Handoff만 output/07-architecture-checklist.md에 저장한다.'
---

# 07. Architecture Checklist

## 실행 번호 안내

실행 요청 시 첫 안내에 `07/09 · Architecture Checklist 실행`을 표시한다. 재개·Back Loop에서도 현재 단계 번호와 대상 항목을 함께 안내한다. 호출 이름은 `/07-architecture-checklist`이며 이 변경은 업무 내용·output 번호·Finality 조건을 바꾸지 않는다.

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
- CONSTRAINT/ALTERNATIVE/DEFER/SA CHECK는 원인·실현 조건·증거를 각각 추적한다. 전체 △로 뭉개거나 모든 미확인을 BLOCKER로 만들지 않는다. 실제 환경 가용성은 근거 없이 GO로 승격하지 않는다.

## 목적과 경계

각 Task를 실제 기술 환경에서 만들 수 있는지 Build 전에 사전 검토한다.
Data, Knowledge, AI/LLM, RAG, Rule/Logic, API/Tool, Existing System,
Authentication, Authorization, Security, Privacy, Runtime, State, Storage,
HITL, Logging/Audit, Deployment Constraint를 필요한 수준으로 검토한다.

구현 가능성, 조기 Constraint, Alternative, MVP 제외 후보와 앞 단계 수정 필요성을 식별한다.
완전한 상세 Architecture·Production 보장을 하는 단계가 아니다.
`Workflow → Task → Data → Required Capability → Architecture Option` 순서를 지킨다.
기술·LLM·RAG·Agent를 먼저 정하고 업무에 끼워 맞추지 않는다.

## Reviewer-first와 선택 참조

- 사용자는 Architecture 작성자가 아닌 Reviewer다. 빈 Checklist, API 목록, LLM/RAG 선택,
  보안사항 작성, Architecture Diagram, 이전 내용 재입력을 요구하지 않는다.
- AI가 전체 Task의 Capability·가설·판정·추천·대안을 먼저 제시한다. 한 Task씩 질문하며 대기하지 않는다.
- 확인은 매번 핵심 1~3개로 제한한다. 먼저 가설과 대안을 제시하고 실제로 결정을 바꾸는 사실만 묻는다.
- 해당 업무의 최신 `output/06-data-design.md`를 먼저 읽는다. 파일명만 아니라 업무·참조·이력을 확인한다.
- 06의 Objects, Sources, Contracts, Knowledge, AI Context, State, HITL, Quality,
  Security/Privacy, Unknown Sources, Integration Candidates, Architecture Check를 읽는다.
- Task Logic은 05, Flow 변경 영향은 04, Agent Logic은 03,
  수행방식 근거는 02, 실제 업무·시스템 이해는 01의 관련 항목만 참조한다.
- 모든 output을 무조건 읽거나 복사하지 않는다. 필요한 프로젝트·사용자 제공 자료만 추가 참조한다.
- 재실행은 기존 07의 판정·근거·이력을 먼저 읽고 필요한 최신 원본과 대조한다.
- 입력이 부족해도 가능한 전체 가설을 만들고 부족한 근거를 표시한다.
- 현재 합의된 권한·수집·보존·재시도·승인 경계를 계승한다. 단순 기술 선호로 업무정책을 바꾸지 않는다.

## Architecture Review Framework

### A. Capability

제품명이 아니라 Task가 요구하는 Text Generation, Classification, Extraction,
Summarization, Search, Retrieval, Reasoning, Rule Evaluation, Structured Output,
File Processing, State Management, Human Review, External Action, System Read/Write를 도출한다.

### B. AI / LLM

LLM 필요성, Rule/System 대체 가능성, 실제 Input Context 공급, Structured Output,
Grounding, 결과 검증, 불확실성, Human Review 필요성을 검토한다.
LLM으로 가능하다는 이유만으로 적용하지 않는다. 무조건 HITL을 추가하지 않는다.
구조 검증과 사실·업무 품질 검증을 구분한다. 모델 성공과 저장/외부 Action 성공도 구분한다.

### C. Knowledge / RAG

작고 고정된 지식을 Context에 직접 제공할 수 있으면 RAG는 불필요할 수 있다.
문서량·변경 빈도·선택 검색·근거 추적·Context 한도 때문에 Retrieval이 필요한지 검토한다.
RAG는 기본값이 아니다. 원본 Knowledge 부재를 Retrieval이 해결한다고 가정하지 않는다.

### D. Data Source

Source별 `Available / Likely Available / Unknown / Restricted / Unavailable`를 기록한다.
Available은 제공 자료로 존재·필요 접근 범위가 확인된 경우만 사용한다.
존재 후보와 실제 접근 가능성·권한을 구분한다. 확인되지 않은 Source는 Available이 아니다.

### E. Integration

Read, Write, Search, Update, Trigger, Notification Capability별 대상과 요구를 식별한다.
API, File Interface, Manual Alternative, Authentication, Authorization,
Network Access, Rate/Volume Constraint를 검토한다. 없는 API Spec·Endpoint를 만들지 않는다.
기존 재사용 가능한 Interface와 새로 구현해야 하는 Application Capability를 구분한다.

### F. Tool

Agent Conduct에 필요한 Search, File Reader, Database Query, API Call,
Code Execution, Notification, Document Generation의 제공·권한 범위를 검토한다.
미확인은 `? Tool Availability Check`로 남긴다. Skill 실행 중 해당 Tool을 실제로 호출하지 않는다.

### G. Authentication / Authorization

Authentication은 사용자·실행 주체 식별, Authorization은 허용 Resource/Action이다.
Read/Create/Update/Delete/Approve를 분리하고 최소권한을 적용한다.
Agent의 읽기·생성·갱신·외부 Action 권한을 구분한다. 업무상 허용과 기술 권한 확인은 별개다.

### H. Security / Privacy

개인정보·민감정보·기밀·외부 전송·저장·로그·업로드·Model Input/Output·권한·Secret을 검토한다.
확인되지 않은 정책은 만들지 않는다. 제안 통제와 실제 승인된 정책을 구분한다.
미확인 위험은 `Security Review Required`로 표시한다. Secret의 사용자 입력·대화 노출을 요구하지 않는다.

### I. Runtime

User Initiated, Local/Developer, Internal Server, Cloud Runtime, Scheduled Job,
Event Triggered, Unknown 중 필요한 실행 특성을 제안한다.
Runtime 가용성은 별도로 확인하고 Cloud Product·실제 배포환경을 강제 선정하지 않는다.

### J. State

현재 Task·Decision·HITL·Retry·Approval·Completion 등 실제 필요한 State만 식별한다.
없던 Approval State를 추가하지 않는다. 분석/자료/저장 실패, 자동/수동 시도,
취소·소진·재개를 구분하고 합의된 횟수·시점·종결을 지킨다. 상세 DB 설계는 하지 않는다.

### K. Storage

Input, Output, Intermediate Result, Knowledge, Human Decision, Audit 중 보존 필요가 있는 것만 정의한다.
안전 보존·다음 실행 재조회·Checkpoint 갱신·일관성의 실제 실현 방법과 확인 근거를 검토한다.
저장 실패 payload를 어디에서도 보존할 수 없다면 재저장이 가능하다고 표시하지 않는다.
덮어쓰기·오래된 예약 결과·동시 갱신의 충돌과 적용 순서도 해당 Workflow에서 필요하면 검토한다.

### L. HITL Architecture

필요한 경우 `AI Result → Review Queue/UI → Human Decision → State Update → Resume`를 연결한다.
표시 근거·검토 위치·반환값·저장·재개/반려 경로를 정의한다. HITL 있음으로 끝내지 않는다.
HITL이 없으면 None과 이유를 기록한다. 일반 Human Input·수동 요청과 승인 HITL을 구분한다.

### M. Logging / Audit

필요한 AI Decision, Human Approval, System Action, Exception, Error, Knowledge Source를 추적한다.
민감 원문·Secret을 무조건 로그로 저장하지 않는다. Action·상태 변경과 필요한 근거를 최소 기록한다.

### N. Volume / Performance

건수·파일/본문 크기·응답시간·동시 사용자·Batch/Real-time을 필요한 경우만 검토한다.
정보가 없으면 수치를 만들지 않는다. MVP 방향에 영향을 주는 규모 제약만 우선 확인한다.

### O. Failure / Recovery

LLM/Invalid Output/Retrieval/API/권한/Data Missing/Human 응답 부재 등의 핵심 실패별
`Retry / Fallback / Human / Stop`을 제안한다. 기존 합의된 복구 정책을 초과하는 Retry는 제안 상태로만 남긴다.
자동 재시도, 수동 개입, 저장만 복구, 운영 장애를 구분한다. 무한 루프·중복 외부 Action을 피한다.

## Feasibility Decision과 Recommendation

각 Task에 기본 판정 하나와 필요 시 미확인/Blocker 표식을 함께 기록한다.

- `✓ GO`: 구현 가능성이 충분하고 핵심 Dependency가 명확함. 사내환경을 확인하지 못했으면 실행 준비 완료 GO로 표시하지 않는다.
- `△ CONSTRAINT`: 가능하나 Data, Runtime, 보안, 검토 등의 조건이 존재함.
- `↔ ALTERNATIVE`: 다른 수행/구현 방식이 더 현실적. 예: Write Interface 불명확 → Human 등록 후보.
- `⏸ DEFER`: 현재 Camp/MVP에서 핵심 Dependency·권한·범위 문제로 어렵다는 후보 판정. 실패가 아니다.
- `? SA CHECK`: 실제 환경 확인 필요. 기본 판정과 별도로 남긴다.
- `⚠ BLOCKER`: 다음 단계 진행을 실제로 막는 확인된 필수 Source/Runtime/권한/보안 문제만 해당한다.

단순 미확인은 BLOCKER가 아니다. 대안이 있으면 CONSTRAINT/ALTERNATIVE로 처리한다.
GO는 실제 통합·운영 테스트 완료를 뜻하지 않는다. 판정 근거·조건·자료 출처를 기록한다.
모든 Task에 Recommended Architecture, Alternative, Dependency, Impact를 가능한 범위로 제시한다.
전체 설계 초안은 Proposed이며 사용자 합의·SA 확인을 새 가설과 구분한다.
ALTERNATIVE/DEFER 후보를 제시했다고 기존 업무/자동화/MVP 범위가 승인 없이 바뀐 것으로 기록하지 않는다.

## Logical Architecture와 Consistency Check

전체 Task 검토 후 제품보다 Capability 중심의 텍스트 Diagram을 만든다.
`User → Input → Workflow/Application → Output/System`에 필요한 LLM, Knowledge,
Rule, Data/State Store, Retrieval, HITL, External System, Logging을 연결한다.
사용하지 않는 구성요소는 추가하지 않는다. 상세 Infrastructure Diagram을 만들지 않는다.

전체 Workflow Task, Data 실제 전달, Knowledge 공급, ABCD Awareness→Brain→Conduct,
HITL Return, System Read/Write, Security, Runtime, Failure/Fallback을 재검토한다.
논리 가능성과 실제 환경 가용성의 근거를 구분하고 가용성을 확인하지 못한 Dependency를 숨기지 않는다.

## Back Loop

Architecture는 앞 단계 검증 Gate다. 업무설계 오류를 기술로 억지 우회하지 않는다.

| 원인 단계 | 복귀 조건 | 수정 책임 |
|---|---|---|
| 06 Data | Source 불가, 과도한 Data, Context 제공 불가, Contract 비현실, Knowledge 혼동, HITL/State 누락, 불필요 반출 | Source/Schema/Contract/Context |
| 05 Task | 과대 Task·독립 Capability 혼재, I/O/Completion 구현 불가, HITL 비현실, 분리 필요 | Task I/O/Action/Completion |
| 04 Workflow | API 의존으로 Flow 변경, 자동 Action 불가, Human 추가, 순서/Integration/HITL 위치 변경 | Task/Flow/역할 연결 |
| 03 ABCD | Awareness/Knowledge 접근 불가, Decision 검증 불가, Conduct 무권한, Scope 과대, HITL 필요 | Awareness/Brain/Conduct/경계 |
| 02 Execution | Rule/Human이 현실적, 자동화 실익 부족, AI 단독 Risk, No Change 적합 | Mode/역할/HITL |
| 01 Interview | 실제 시스템/Data/업무 Judgment/Constraint/I/O 오해 | 확인된 업무 사실 |

1. Architecture Issue를 식별하고 기술 문제인지 업무설계 문제인지 구분한다.
2. 원인 단계의 관련 항목만 참조한다. 전체 과정을 다시 시작하지 않는다.
3. 수정안과 Architecture Alternative를 먼저 생성하고 필요 시 핵심 최대 3개만 확인한다.
4. 합의된 변경·확인된 사실 교정만 원인 output에 현행화한다. AI 추정은 Proposed로 유지한다.
5. Task ID·사용자 수정·근거를 보존하고 짧은 변경 이력을 남긴다.
6. 영향받는 후속 output을 순서대로 재검토·수정한다. 미검토는 해당 output에 Need Check와 이유를 표시한다.
7. 새 Source/Task/Flow 영향이 다른 원인 단계에 걸리면 필요한 범위만 거슬러 검토한다.
8. 최신 결과로 전체 07을 재평가·갱신한다. 이전 본문 전체를 복사하지 않는다.

단순 Runtime 선택처럼 업무 Logic에 영향이 없으면 이전 단계로 돌아가지 않는다.
Source 미확인을 불가로 단정해 기존 자동 Flow를 무조건 Human으로 바꾸지 않는다.

## SA Review / Architecture Clinic

AI가 작성할 것: Capabilities, Logical Architecture, 대안, Dependency 후보, Failure/Fallback, Risk.
SA 확인할 것: 실제 API, Network, 보안정책, 허용 LLM, Runtime, 권한, 배포환경.
사내환경을 추정·확정하지 않는다. 실제 제공 자료에서 확인한 것만 사실로 기록한다.
교육에 SA가 참여하면 채워진 GO/CONSTRAINT/ALTERNATIVE/DEFER 후보와 Unknown Dependency를 Review Sheet로 제공한다.
SA 역시 빈 Checklist 작성자가 아닌 가설 교정·확정 Reviewer다.

## Interaction Workflow

1. 최신 06을 읽는다. 재실행이면 기존 07 참조·이력을 먼저 읽는다.
2. Task Logic/Flow/Agent 근거가 필요할 때만 05~01과 제공 프로젝트 자료를 추가 참조한다.
3. 모든 Task의 Required Capabilities를 도출한다.
4. Task별 가장 단순한 Architecture Hypothesis와 추천·대안·Dependency·Impact를 제시한다.
5. GO/CONSTRAINT/ALTERNATIVE/DEFER 및 SA CHECK/BLOCKER를 근거와 함께 초안화한다.
6. 전체 Logical Architecture를 만든다.
7. Data/AI/Knowledge/Integration/Security/HITL/Runtime/State/Storage/Failure 자체 검토를 수행한다.
8. 앞 단계 설계를 깨는 Constraint의 원인과 Back Loop 필요성을 판단한다.
9. 질문보다 수정안·대안을 먼저 제시한다.
10. 반드시 필요한 사실만 한 번에 최대 3개 확인한다.
11. 합의된 원본 변경과 후속 영향 검토를 수행한다.
12. 최신 전체 Architecture를 재평가하고 07 및 다음 단계 Handoff를 저장한다.

## 완료 조건

Task별 Capability/Option/추천/대안/Dependency/Impact/판정,
Data Source·AI/LLM·Knowledge/RAG·Integration/Tool·권한·Security/Privacy,
HITL·State/Storage·Runtime/Logging·주요 Failure/Fallback·Blocker,
Logical Architecture와 이전 단계 정합성이 검토되면 사전 검토 완료다.
SA 미확인과 조건부 경로는 남길 수 있으나 실제 환경 검증 완료로 표현하지 않는다.
핵심 BLOCKER가 남으면 다음 단계 진행 제한·대안·해결 필요사항을 명시한다.

## 최종 산출물

# Architecture Pre-Check

## 1. Architecture Overview
Workflow, Review Scope, Key Architecture Direction, Overall Status, Major Constraints, Input References.

## 2. Task Feasibility Map
| Task | Mode | Required Capability | Architecture Option | Dependency | Status |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... |

각 Task에 Recommended Architecture / Alternative / Dependency / Impact를 추가한다.

## 3. AI / LLM Design
| Task | AI Need | Required Context | Structured Output | Validation | HITL | Status |
|---|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... | ... |

## 4. Knowledge / RAG
| Task | Knowledge | Access Method | RAG Need | Evidence Need | Status |
|---|---|---|---|---|---|
| ... | ... | Direct/Retrieval | Yes/No/Maybe | ... | ... |

## 5. Data & Storage
| Data | Source | Access | Storage Need | State Need | Constraint |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... |
Access에 Source Availability와 실제 확인 근거를 기록한다.

## 6. Integration & Tool
| Task | Required Action | Target | Read/Write | Interface | Status |
|---|---|---|---|---|---|
| ... | ... | ... | ... | API/File/Manual/Unknown | ... |

## 7. Authentication / Authorization
| Actor | Resource/Action | Required Permission | Status |
|---|---|---|---|
| ... | ... | ... | ... |

## 8. Security / Privacy
| Item | Risk | Required Review / Control | Status |
|---|---|---|---|
| ... | ... | ... | ... |
확인된 정책과 제안 통제를 구분한다.

## 9. HITL Architecture
| Task | Trigger | Review Surface | Human Action | Resume | Status |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... |
없으면 None과 이유, 일반 Human 입력과의 구분을 남긴다.

## 10. Runtime / State / Logging
### Runtime
### State
### Storage
### Logging / Audit
필요할 때만 Volume/Performance 미확인·Constraint를 함께 기록한다.

## 11. Failure & Fallback
| Failure | Impact | Recommended Fallback |
|---|---|---|
| ... | ... | Retry/Fallback/Human/Stop |
횟수·재개/종결·상태 보존의 기존 정책을 계승한다.

## 12. Logical Architecture
텍스트 Diagram을 우선 사용하고 실제 Task와 연결한다. 상세 Infrastructure는 확정하지 않는다.

## 13. Architecture Decision
### GO
### CONSTRAINT
### ALTERNATIVE
### DEFER
### BLOCKER
해당 없음은 None과 이유를 기록한다. 추천 후보와 합의된 범위를 구분한다.

## 14. SA Check Required
실제 환경을 확인해야 하는 항목만 중요도 순으로 정리한다. 항목별 영향·필요 증거를 남긴다.

## 15. Back Loop Log
없으면 No Back Loop.
| From | Back To | Architecture Issue | 수정 내용 | 영향 |
|---|---|---|---|---|
| Architecture | 06/05/04/03/02/01 | ... | ... | ... |
미합의 수정은 제안임을 표시하고 원본 수정 완료로 기록하지 않는다.

## 16. Next Stage Handoff
### Feasible Tasks
### Constrained Tasks
### Alternative Tasks
### Deferred Tasks
### Architecture Constraints
### Required Capabilities
### Data / Knowledge Requirements
### Integration Requirements
### HITL Requirements
### Security Requirements
### Runtime / State Requirements
### SA Confirmed Items
### Unresolved Items
### MVP Architecture Recommendation
다음 To-Be Refinement/PRD에서 필요한 정보만 정리한다. 상세 근거는 원본 파일·Task ID로 참조한다.

## 저장 및 검증

- 현재 검토 결과와 To-Be Refinement/PRD Handoff만 `output/07-architecture-checklist.md`에 저장한다.
- 01~06 본문 전체를 복사하지 않는다. 실제 상대 링크와 Task ID로 참조한다.
- 기존 동일 업무 파일은 읽고 사용자 변경을 보존한다. 다른 업무 충돌은 `07-architecture-checklist-<업무-slug>.md`로 저장한다.
- Back Loop 합의는 관련 원본에도 반영하고 영향받는 후속 결과를 순서대로 검토한 뒤 07을 갱신한다.
- 저장 후 16개 섹션, Task ID/참조 링크, Source/Capability/Dependency/판정 근거,
  SA 미확인 분리, 권한/보안/HITL/State/Failure 경계, 추천·대안·영향과 원본 정합성을 검증하고 파일 오류를 확인한다.
- 채팅에는 저장 링크·핵심 추천·미확인/진행 제한을 안내한다. 저장 불가 시 결과와 미저장 사실을 제공한다.

## 외부 시스템 제한과 금지사항

외부 시스템·Connector를 사용하지 않는다. 현재 대화·프로젝트 파일·사용자 제공 기술/업무자료·이전 output만 사용한다.
실제 시스템/API/권한/보안정책은 제공 자료에서 확인된 것만 사실로 취급하고 미확인은 SA CHECK로 남긴다.

1. 빈 Checklist·이전 결과 재입력·불필요한 전체 환경 질문을 요구하지 않는다.
2. 제품/기술을 업무보다 먼저 선택하거나 모든 AI Task에 RAG·모든 Task에 Agent를 적용하지 않는다.
3. API·사내 권한·LLM/Cloud/Runtime 가용성을 추정해 확정하지 않는다.
4. 보안정책을 임의로 만들지 않는다. 보안승인·권한 신청을 실제 완료로 표시하지 않는다.
5. 업무설계 오류를 기술로 억지 우회하거나 앞 단계 모순을 무시하지 않는다.
6. 대안이 있는데 즉시 BLOCKER로 판단하거나 모든 미확인을 Blocker로 만들지 않는다.
7. 합의 없이 Task/Flow/Mode/MVP 범위를 변경하지 않는다. Back Loop로 전체 과정을 재시작하지 않는다.
8. 이전 output 전체를 복사하지 않는다.
9. Production 상세 Architecture, Infrastructure Provisioning, API 개발, 권한 신청,
   보안승인, Cloud Resource 생성, Physical DB Schema, 상세 UI, 코드 구현을 수행하지 않는다.

## Interaction Style

06 자동 참조 → 필요한 05~01 → 전체 Capability·Architecture 가설
→ GO/CONSTRAINT/ALTERNATIVE/DEFER → Logical Architecture → 자체 검토
→ Constraint/Blocker → 원인 단계 수정안+대안 → 핵심 최대 3개 확인
→ 합의 원본 현행화·후속 영향 검토 → 전체 Architecture 재평가 → 07 저장.

사용자와 SA는 AI가 채운 가설을 검토·수정·확정하는 Reviewer다.
목표는 복잡한 Diagram이 아니라 실제 구현 가능성·제약·대안·업무 수정 필요성을 Build 전에 드러내는 것이다.