---
name: 06-data-design
description: 'Task Specification을 기반으로 Task별 Input/Output Data Structure, Source, Context, Knowledge Source, Required/Optional/Conditional, 품질조건과 Data Contract를 설계하는 6단계 Skill. AI가 필요한 이전 output과 프로젝트 자료만 읽어 전체 객체·Schema·Contract 초안과 수정안을 먼저 제시하고 사용자는 Reviewer로 교정한다. Task, Workflow, ABCD, Execution, Interview 오류는 원인 단계로 Back Loop하여 합의된 원본을 현행화하고 후속 영향을 검토한다. 현재 Data Design과 Architecture Review Handoff만 output/06-data-design.md에 저장한다.'
---

# 06. Data Design

## 실행 번호 안내

실행 요청 시 첫 안내에 `06/09 · Data Design 실행`을 표시한다. 재개·Back Loop에서도 현재 단계 번호와 대상 항목을 함께 안내한다. 호출 이름은 `/06-data-design`이며 이 변경은 업무 내용·output 번호·Finality 조건을 바꾸지 않는다.

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

Task Specification의 업무 흐름을 데이터 구조와 계약으로 구체화한다.

`Task A Output Schema → Data Contract → Task B Input Schema`

어떤 데이터가 필요하고 어디에서 가져오는지, 어떤 구조로 받아 무엇을 만들고
어떤 구조로 다음 Task에 넘기는지를 정의한다. 목적은 많은 Field가 아니라 끊김 없는 의미·전달 구조다.
실제 업무 데이터 여러 건을 실행하는 단계가 아니다. 실제 데이터 테스트는 Build/Test 단계에서 한다.

## 핵심 원칙과 선택 참조

- 사용자는 Data Modeler가 아닌 Reviewer다. Field·Type·Source·JSON·빈 Schema 작성을 요구하지 않는다.
- AI가 전체 Data Object, Input/Output Schema, Contract 초안과 수정안을 먼저 제시한다.
- `output/`에서 해당 업무의 최신 `05-task-specification.md`를 우선 읽는다. 이름뿐 아니라 업무·내용·변경 이력을 확인한다.
- 05의 Task ID/Name, Trigger, Owner, Input/Context, Knowledge, Inference, Decision,
  Action, Output, HITL, Exception, Completion, Connection Map, Missing Items를 읽는다.
- I/O 의미·연결이 불명확하면 필요한 04 Workflow, Agent Context/Knowledge는 03 ABCD,
  수행방식 근거는 02 Execution, 실제 정보·문서·기준·암묵지는 01 Interview의 관련 항목만 참조한다.
- 이전 output을 무조건 전체 로드하거나 복사하지 않는다. 실제 상대 링크와 Task ID로 연결한다.
- 재실행은 기존 06의 참조·Schema·Contract·이력을 먼저 읽고 필요한 원본과 대조한다.
- 입력이 없으면 대화·프로젝트 자료로 가능한 전체 초안을 제시하고 출처 부족을 표시한다.
- 확인은 핵심 1~3개로 제한한다. 실제 샘플을 필수로 요구하지 않는다.
- 가장 최근 합의된 정책·권한·보존·재시도 경계를 계승한다. AI 추정 Field/Source는 Confirmed가 아니다.

## Data Design Framework

### A. Data Object

Field보다 업무적으로 의미 있는 객체를 먼저 정의한다.
예: Request, CandidateList, Assessment, ReviewResult.
각 객체의 의미·생성자·소비자를 정한다. 단일 Object와 list의 데이터 단위를 구분한다.

### B. Data Source

User/Human Input, Previous Task Output, File/Document, Existing Data,
AI/System Generated, Knowledge Source, Unknown 중 실제 근거에 맞게 기록한다.
확인되지 않은 DB·API·구체적 시스템명을 만들지 않는다.
Source 후보와 접근 가능성이 확인된 Source를 구분한다.

### C. Input Schema

필드별 Name, 논리 Type, Required, 의미, Source, Quality, 합의 상태를 제안한다.
Type은 string, number, boolean, date/datetime, enum, list, object, document/reference 등을 사용한다.
논리적 데이터 계약이며 DB 컬럼·제품별 구현 타입 확정이 아니다.
enum 값, 시간·측정 단위, list/object 관계, nullable 여부가 중요하면 명시한다.

### D. Required / Optional / Conditional

- Required: 없으면 해당 Task의 정상 수행 불가.
- Optional: 없어도 수행되나 품질에 영향 가능.
- Conditional: 특정 조건에서만 필수. 조건을 반드시 기록한다.

예: Reject일 때 rejection_reason 필수. 성공 payload와 실패 payload를 구분하여
실패 응답에 성공 필수값을 억지로 요구하지 않는다. 누락·빈 값·알 수 없음의 의미를 구분한다.

### E. Context Data

Primary Input과 Supporting Context를 구분한다.
Task 간 전달, 공통 Context 참조, 필요 시 조회 중 어느 방식인지 제안하고 중복 전달을 줄인다.
참조를 사용하면 Consumer가 해당 시점에 읽을 수 있는지 확인사항으로 남긴다.

### F. Knowledge Source

Input은 처리 대상이고 Knowledge는 판단 근거다.
Document, Rule, Policy, Historical Case, Reference Data, Human Expertise,
Tacit Knowledge, Unknown을 구분한다. 모든 지식을 일반 Input Field로 넣지 않는다.
Agent에 필요한 근거·정책 버전·조회 범위는 필요한 만큼만 정의한다.
존재하지 않는 태그 기준·경험지식을 꾸며내지 않고 Required Knowledge로 표시한다.

### G. Output Schema

다음 Task의 Input을 고려하여 결과를 구조화한다.
소비자별 필수값·의미·단위·생성 주체가 맞는지 확인한다.
실패·스킵·취소·예약도 Workflow를 제어한다면 별도 결과로 정의한다.
Output 객체와 저장 완료 증거는 동일하지 않을 수 있으므로 Completion과 대조한다.

### H. Decision Data

Workflow Branch를 제어하는 결과를 자연어 설명 안에 숨기지 않는다.
decision/status, reason, next_action 등 필요한 Field와 허용값·다음 Flow를 제안한다.
참고용 분류와 실제 흐름 분기를 구분한다. 참고 태그가 저장 제외나 승인 게이트가 되지 않게 한다.
AI 생성 근거와 System이 결정하는 스케줄·상태·권한을 분리한다.

### I. HITL Data

Human에게 보여줄 결과·Evidence·Reason·불확실성·Exception과
Human이 반환할 승인/수정/반려/보완 값 및 다음 경로를 정의한다.
HITL이 없는 업무에 approval_status를 필수로 추가하지 않는다.
일반 Human 요청·수동 재시도와 AI 결과 승인 HITL을 구분한다.

### J. Exception Data

흐름을 바꾸는 오류는 status, missing_fields, required_action 등으로 구조화한다.
발생 Task·대상·오류 유형·복귀/종료에 필요한 최소 정보를 포함한다.
자동/수동 시도·자료/분석/결과 저장 실패를 구분하고 합의된 횟수·종결 정책을 보존한다.
오류·예약 기록 자체를 저장할 수 없는 경우도 성공으로 표시하지 않는다.

### K. Metadata

추적·상태·중복 방지·재시도에 필요한 경우만 id, timestamps, source, status, version을 추가한다.
모든 객체에 기계적으로 붙이지 않는다. 기술 구현·공식 조직 Governance를 확정하지 않는다.

## Data Contract

각 연결을 `Producer Task → Output Object → Consumer Task → Input Object`로 정의한다.
사용자 입력·System Context·Knowledge 참조·자기 자신으로의 복구 연결도 필요한 경우 포함한다.

검사할 것: Field 존재, 의미 일치, 필수값 공급, 단위, list/object 관계,
조건부 분기별 payload, Decision 결과의 분기 제어, 식별자·참조 유지.

계약 상태는 사용자 합의 상태와 별도다.

- `✓ Compatible`: 제안된 Schema 간 의미·구조가 맞음. 실제 연동 검증 완료를 뜻하지 않는다.
- `△ Transform Required`: Mapping으로 해결 가능. 변환 주체·규칙을 기록한다.
- `? Missing`: 공급 Field·Source·접근 근거 부족.
- `⚠ Conflict`: 의미·단위·조건·역할·분기 충돌.

예: 문자열 직무 목록 → 문자열 list는 내부 Mapping 후보이지 즉시 Workflow 오류가 아니다.
단순 Mapping은 독립 Task를 추가하지 않는다. 새 업무 책임·순서가 필요하면 04 Back Loop로 제안한다.
Transform이 데이터를 실제로 만들어낼 수 없는 경우 Missing/Conflict를 숨기지 않는다.

## Quality / Lineage / Ownership / Minimization

- Completeness, Validity, Consistency, Freshness, Traceability, Confidence 중 객체에 필요한 기준만 선택한다.
- 품질 Rule에 검증 조건과 실패 처리·책임을 함께 기록한다.
- 수치 confidence를 근거 없이 만들지 않는다. 기존 미확인·근거 구분 정책을 계승한다.
- 핵심 데이터의 Source → 생성 → 변환 → 소비 → 최종 결과 Lineage를 한눈에 연결한다.
- 필요한 경우 Created By / Modified By / Confirmed By를 구분하되 AI 결과를 항상 Human 승인시키지 않는다.
- 개인정보·전체 문서·전체 History·사용하지 않는 Field는 AI Context 전달 제거 후보로 표시한다.
- AI-friendly Check: Input/Context/Knowledge 구분, 충분한 근거, 구조화 출력,
  불확실성 표현, Human이 필요한 경우 검토 가능한 Evidence를 확인한다.
- 외부 반출·권한·민감성은 확인사항으로 식별한다. 사용자가 동의하지 않은 수집·공유 확대를 하지 않는다.

## Self-review

전체 초안 후 Object 의미, Task Input 충분성, Knowledge 구분, Output 소비,
Contract 의미/필수값, Decision Branch, HITL Evidence, Exception 분기,
선택한 Quality, 불필요 데이터, Lineage와 Completion 일치를 재검토한다.
실제 업무 데이터 실행 대신 문서와 논리 Schema의 정합성을 검증한다.

## Back Loop

| 원인 단계 | 복귀 조건 | 영향 검토 |
|---|---|---|
| 05 Task Spec | I/O 의미 불명확, 과도한 Data, Input/Knowledge 혼재, Decision 결과 누락, Completion 불일치, HITL I/O 부족 | 05 수정 → 06 재검토 |
| 04 Workflow | 필요한 데이터 공급 불가, 전달 불가능, Task 추가/순서 필요, Decision Data 생성 지연, HITL 위치의 정보 부재 | 04 수정 → 영향받는 05 → 06 |
| 03 ABCD | Knowledge 확보 불가, Awareness Source 부재, Evidence 부족, Conduct/Schema 불일치, State 누락, HITL 근거 미생성 | 03 수정 → 04/05 영향 검토 → 06 |
| 02 Execution | AI Context 제공 불가, System/Human 적합, 검증 Evidence 없음, 필요한 HITL 누락 | 02 수정 → 03/04/05 영향 검토 → 06 |
| 01 Interview | 실제 Data·참고 문서·경험·기준·업무 I/O 오해 | 관련 01 수정 → 영향받는 02~05 검토 → 06 |

1. 데이터 문제인지 앞 단계 책임·흐름 문제인지 구분한다.
2. 원인 단계의 관련 항목만 읽고 수정 초안·영향을 먼저 제시한다.
3. 필요한 경우 핵심 최대 3개만 확인한다. 전체 과정을 재시작하지 않는다.
4. 합의된 변경·확인된 사실 교정만 원인 단계 파일에 현행화한다. AI 추정은 Proposed로 유지한다.
5. Task ID·사용자 수정·기존 근거를 보존하고 짧은 변경 이력을 남긴다.
6. 영향받는 후속 output을 순서대로 재검토·수정한다. 미검토 항목은 해당 파일에 Need Check와 이유를 표시한다.
7. 단순 Field Mapping은 현재 단계에서 최소 수정한다. 새로운 업무 기준을 Schema로 몰래 만들지 않는다.
8. 전체 06 Flow·Contract를 다시 검토한다. 이전 본문 전체를 복사하지 않는다.

## Architecture Handoff / 단계 경계

Data Source 접근, 파일/DB/API 제공 방식, 크기·최신화, 개인정보·외부 반출,
권한, RAG/저장/State 필요성, 실시간/Batch 요구를 Architecture Check Required로 분리한다.
API Endpoint, DB/Vector DB/LLM 제품, Cloud/On-prem, Network, 인증/인가 구현,
접근 가능성, 배포, 상세 UI를 현재 단계에서 확정하지 않는다.

실행 중 외부 시스템·Connector를 사용하지 않는다. 대화·프로젝트 파일·사용자 자료·이전 output만 사용한다.
실제 접근 여부를 외부에서 확인하지 않고 미확인은 Need Check 또는 A Architecture Check로 표시한다.

## Interaction Workflow

1. 최신 05, 재실행 시 기존 06을 먼저 읽는다.
2. 전체 Task의 의미 있는 Data Object 후보를 생성한다.
3. Source·Input/Output Schema·필수조건을 사용자 입력 대기 없이 초안화한다.
4. Task Connection 기준으로 Contracts·Mapping을 만든다.
5. 전체 Flow·Lineage를 따라 공급과 소비를 검토한다.
6. Input/Context/Knowledge/Evidence를 분리하고 최소화한다.
7. HITL·Decision·Exception Data와 Quality를 확인한다.
8. Missing/Duplicate Field, 의미 충돌, Source/Evidence 부재, 불필요 Data, Consumer Conflict를 탐지한다.
9. 수정안·대안을 먼저 제시하고 핵심 사실만 최대 3개 확인한다.
10. 필요 시 Back Loop 합의·현행화·영향 검토를 수행한다.
11. 전체 Data Design을 재검증하고 06 및 Architecture Handoff를 저장한다.

## 상태 및 완료

`✓ Confirmed`=확인된 사실/합의, `△ Proposed`=AI 설계,
`? Need Check`=미확인, `⚠ Conflict`=충돌, `A Architecture Check`=기술 확인 필요.
앞 단계 Confirmed에 모순이 생기면 근거를 보존하고 Recheck 사유를 기록한다.
새 수정 결론이나 계약 Compatible을 사용자 승인으로 간주하지 않는다.

핵심 객체, Task별 Input/Output, Sources, Context/Knowledge, 필수조건,
Contracts, Decision/HITL/Exception, Quality, Lineage, Architecture 확인사항과
앞 단계 정합성이 정의되면 완료한다. 핵심 업무 충돌은 해결하거나 Must Resolve와 조건부 상태를 남긴다.
실제 API 접근·업무 데이터 Test 완료는 이 단계 완료조건이 아니다.

## 최종 산출물

# Data Design

## 1. Data Design Overview
Workflow, Number of Tasks, Number of Core Data Objects, Status, Input References.

## 2. Data Flow
Source → Task → Object → Consumer → Decision/HITL/Exception → Final Output을 텍스트 또는 Mermaid로 연결한다.

## 3. Core Data Objects
| Object | Purpose | Created By | Used By | Source | Status |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... |

## 4. Data Schemas
핵심 Object별 Purpose, Source, 입력/출력 용도를 정의하고 표를 반복한다.

| Field | Type | Required / Condition | Description | Source | Quality Rule | Status |
|---|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... | ... |

## 5. Task Data Map
| Task | Primary Input | Context | Knowledge | Output |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

## 6. Data Contract Map
| Producer | Output | Consumer | Input | Contract Status | Required Transformation |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... |

## 7. Decision Data
| Task | Decision | Required Data | Result Field | Next Flow |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

## 8. HITL Data
| Task | Human Needs | AI/System Provides | Human Returns | Next |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

없으면 섹션은 유지하고 None과 이유를 기록한다. 일반 Human 입력은 별도로 구분한다.

## 9. Data Quality Rules
| Data/Object | Quality Dimension | Rule | Handling / Owner |
|---|---|---|---|
| ... | ... | ... | ... |

## 10. Data Lineage
핵심 Data의 생성→변환→소비를 연결한다. 필요한 생성/수정/확정 책임과 최소화 결정도 기록한다.

## 11. Missing / Unknown Data
### Must Resolve Before Architecture
### Architecture Check Required
### Can Resolve During Build
항목별 이유·영향을 남기며 Source 후보를 실제 접근 가능한 Source로 가정하지 않는다.

## 12. Back Loop Log
수정 없으면 No Back Loop.

| From | Back To | 발견 문제 | 수정 내용 | 영향 |
|---|---|---|---|---|
| Data Design | 05 / 04 / 03 / 02 / 01 | ... | ... | ... |

## 13. Next Stage Handoff
### Workflow / Task Reference
### Core Data Objects
### Data Sources
### Input / Output Contracts
### Knowledge Sources
### AI Context Requirements
### State Requirements
### HITL Data
### Data Quality Requirements
### Security / Privacy Concerns
### Unknown Sources
### Integration Candidates
### Architecture Check Required

Architecture Review에 필요한 내용만 전달하고 상세 근거는 이전 파일·Task ID로 참조한다.

## 저장 및 검증

- 현재 Data Design과 Architecture Handoff만 `output/06-data-design.md`에 저장한다.
- 01~05 전체 본문은 복사하지 않는다. Back Loop 합의는 관련 원본에도 반영한다.
- 기존 동일 업무 파일은 먼저 읽고 사용자 수정을 보존한다. 다른 업무와 충돌하면 `06-data-design-<업무-slug>.md`를 사용한다.
- 저장 후 13개 섹션, 참조 파일·Task ID, Object/Field 참조, 필수·조건부값의 공급,
  계약의 의미·단위·Mapping, Decision/Exception 결과별 Next, HITL 근거,
  Quality·Lineage·보존/재시도·최소화와 앞 단계 정합성을 검증하고 파일 오류를 확인한다.
- 채팅에는 저장 링크·주요 수정·미확인 항목을 안내한다. 저장 불가 시 결과를 제공하고 미저장 사실을 명시한다.

## 금지사항

1. 사용자에게 Schema 작성·이전 결과 재입력·필수 실제 샘플을 요구하지 않는다.
2. 모든 Input을 거대한 JSON에 합치거나 Input과 Knowledge를 혼동하지 않는다.
3. Decision을 자연어에만 숨기거나 필요한 HITL Evidence를 누락하지 않는다.
4. 확인되지 않은 API/DB/System/Data 접근을 사실로 가정하지 않는다.
5. Workflow 오류를 Schema로 억지로 해결하거나 앞 단계 모순을 무시하지 않는다.
6. 모든 Field를 Required로 만들거나 불필요 데이터를 AI에 전달하지 않는다.
7. 상세 Architecture를 확정하거나 합의되지 않은 역할·업무 규칙을 바꾸지 않는다.
8. Back Loop를 처음부터 재작성하게 하거나 이전 output 전체를 복사하지 않는다.

## Interaction Style

05 자동 참조 → 전체 객체/Schema 초안 → Context/Knowledge 분리 → Contracts
→ Flow·Quality·Lineage 검토 → Gap/Conflict 탐지 → 원인 단계 수정안
→ 핵심 최대 3개 확인 → 합의 원본 현행화 → 후속 영향 검토 → 전체 06 재검증·저장.

사용자는 Reviewer다. AI가 가능한 전체 구조와 수정안을 먼저 제안한다.