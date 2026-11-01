---
name: 08-workflow-refinement
description: 'Architecture Pre-Check 결과를 To-Be Workflow, Task Specification, Data Design, ABCD, Execution Design에 반영하여 구현 가능한 To-Be Workflow v1.0과 PRD 기준선을 확정하는 8단계 Refinement Skill. AI가 필요한 이전 output만 읽어 Architecture Constraint·Alternative·DEFER·SA Check의 Task 영향을 분석하고 전체 통합 수정안과 대안을 먼저 제시하며 사용자/SA는 Reviewer로 교정한다. 오류·누락·모순은 원인 단계로 Back Loop하여 합의된 원본을 현행화하고 후속 영향을 재검토한다. 현재 Workflow·PRD Readiness·Handoff만 output/08-workflow-refinement.md에 저장한다.'
---

# 08. Workflow Refinement

## 실행 번호 안내

실행 요청 시 첫 안내에 `08/09 · Workflow Refinement 실행`을 표시한다. 재개·Back Loop에서도 현재 단계 번호와 대상 항목을 함께 안내한다. 호출 이름은 `/08-workflow-refinement`이며 이 변경은 업무 내용·output 번호·Finality 조건을 바꾸지 않는다.

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
- 01~07의 관련 미종결과 현재 통합안의 미종결을 Task ID로 연결한다. 원인 파일 현행화·후속 재검토·Architecture 재평가 및 PRD Gate를 통과해야 v1.0을 확정한다. 승인된 조건부 기준선도 운영 검증 완료와 구분한다.

## 목적과 경계

`Desired To-Be + Task Reality + Data Reality + Architecture Reality → Feasible To-Be Workflow v1.0`

Architecture Pre-Check를 업무설계에 통합해 실제 구현할 Workflow와 PRD 기준선을 정한다.
단순 메모·문서 표기 수정이 아니라 필요한 Task, Mode, HITL, Agent Boundary,
Data/Integration/Branch, MVP 범위 변경을 전체 설계에 반영한다.
PRD 상세, User Story, Acceptance Criteria 상세, UI, 코드, Infrastructure 구축은 수행하지 않는다.

## Reviewer-first와 선택 참조

- 사용자는 Workflow 수정 작성자가 아닌 Reviewer다. Architecture 반영, 대안 선택 목록,
  제외 Task 선정, 이전 내용 재입력을 사용자에게 떠넘기지 않는다.
- AI가 전체 영향도·추천 통합 수정안·대안을 먼저 제시한다. 질문은 핵심 최대 1~3개다.
- `output/`의 해당 업무 최신 07 Architecture Checklist부터 읽는다. 파일명뿐 아니라 업무·참조·이력을 확인한다.
- 07 결정에서 영향을 받는 06 Data, 05 Task, 04 Workflow 항목을 역추적한다.
  Agent는 03, 수행방식은 02, 실제 업무 사실은 01의 필요한 부분만 읽는다.
- 모든 output을 무조건 로드하거나 현재 결과에 복사하지 않는다. 실제 상대 링크·Task ID로 연결한다.
- 재실행이면 기존 08의 기준선·판정·변경 이력을 먼저 읽고 필요한 최신 원본과 대조한다.
- 입력이 부족해도 가능한 전체 통합 초안을 제시하고 근거 부족·가정을 표시한다.
- 기존 Confirmed/Proposed/Need Check를 계승한다. 기술 추천이나 침묵을 사용자 승인으로 간주하지 않는다.

## Architecture Decision Mapping

07의 GO, CONSTRAINT, ALTERNATIVE, DEFER, BLOCKER, SA CHECK를 Task에 매핑한다.
각 항목에 근거, 영향 대상, 기존 합의 여부, 필요한 수정·잔여 Dependency를 기록한다.

- GO: 유지 후보. 다른 Task 변경에 영향받는지 확인한다.
- CONSTRAINT: 명시적 입력·권한·분기·완료조건·Context 제한 등으로 설계에 반영한다.
- ALTERNATIVE: 가장 현실적인 대체안 후보를 선택해 전후·이유·영향을 제시한다.
- DEFER: 핵심 목적에 필요한지 먼저 확인한다. 필요하면 Human/Manual 대안, 제외 가능하면 Post-MVP로 분리한다.
- BLOCKER: Workflow 변경, Mode 변경, Manual Fallback, Scope 제외의 대안을 먼저 만들고 추천한다.
- SA CHECK: 실제 환경 미확인을 사실로 확정하지 않는다. 가능하면 Safe Default + Upgrade Path로 처리한다.

Unknown을 불가로 단정하지 않는다. 대안이 원래 목적을 충족하지 못하면 조건부 경로로 남긴다.
예: 수동 시험 실행은 매일 자동 운영의 대체 완료가 아니다.
Safe Default로도 권한·보안승인·핵심 Source 부재를 우회하지 않는다.
07의 Alternative/DEFER 추천을 이미 승인된 변경처럼 적용하지 않는다.

## Refinement Framework

### Keep
GO 영역은 불필요하게 변경하지 않고 다른 수정의 영향만 검토한다.

### Constrain
보안/권한·Data 가용성·HITL·AI Context·실행/저장 조건을 실제 Flow와 Task 완료조건에 연결한다.
모든 Constraint를 복잡한 기술로 해결하려 하지 않는다.

### Substitute
목적을 충족하는 가장 단순한 대안을 추천한다.
소량 고정 Knowledge는 Direct Context, 단일 요약은 단일 AI Task,
Human으로 충족 가능한 외부 등록은 Manual Fallback 후보로 제시한다.
모델/권한/시스템 가용성은 미확인 상태를 유지하며 Mode·권한·범위 변경은 합의 후 반영한다.

### Defer
전체 To-Be와 Current Build를 구분한다. DEFER는 실패가 아니다.
필수 Task를 삭제해 목적이 끊기지 않게 대안을 연결하고 미래 Upgrade 조건을 기록한다.

### Blocker Resolution
사용자에게 해결책부터 요구하지 않는다. 문제→추천안→대안→결정에 필요한 사실 순서로 제시한다.
대안 확정·실현 조건 없이 BLOCKER를 해결됐다고 표시하지 않는다.

### SA Check Handling
비핵심 Unknown 때문에 전체 초안을 멈추지 않는다. 미확인을 조건부 설계·명시 Dependency로 남긴다.
실제 SA 확인과 AI의 논리적 대안 설계를 구분한다. 사내 API·Network·모델·권한·Runtime을 추정하지 않는다.

## 영향 분석과 우선순위

각 변경에 Before / After / Reason / Impact를 기록하고 관련 원본 단계를 식별한다.
예: AI→AI+HITL은 02 역할, 03 Conduct, 04 Flow, 05 Task, 06 HITL Data, 07 검토에 영향.
Runtime 후보만 바뀌고 업무 Logic 영향이 없으면 Workflow를 불필요하게 바꾸지 않는다.

우선순위: BLOCKER → Security/Permission → Data Availability → Workflow Feasibility
→ Agent/HITL → Integration → Runtime/State → Optional Optimization.
가장 단순한 구현을 우선하되 확정된 기능·복구/보존 요구를 편의상 제거하지 않는다.

## 전체 재구성과 Reconciliation

수정을 개별 Patch 목록으로만 남기지 않고 최신 전체 Workflow를 다시 만든다.
Trigger→모든 Task/Owner→Decision/HITL/예외/복귀/종료→Final Output을 표현한다.
참고 분류와 실제 분기, 사용자 수동 요청과 승인 HITL을 구분한다.

- Human/AI Boundary: AI 필요성, Rule 대체, Human Judgment 누락, 과도/부족 HITL, Agent 권한을 재검토한다.
- Task: ID/Name/Trigger/Owner/Input/Knowledge/Inference/Decision/Action/Output/HITL/Exception/Completion을 맞춘다.
- Data: Producer/Consumer/Input/Output/HITL/Decision/Manual Fallback을 연결하고 필수값·Source를 검증한다.
- Architecture: 바뀐 대안이 Constraint를 실제 해결했는지 재평가하고 07의 판정·조건을 현행화한다.
- Resolved는 선택된 대안의 논리/업무 해결인지 실제 환경 검증인지 명시한다. 미확인 API가 Available이 된 것은 아니다.
- 실패·재시도·예약·취소·덮어쓰기·저장 증거·권한의 기존 경계를 유지한다. 바꾸려면 영향과 합의를 남긴다.

## Back Loop

| 원인 단계 | 복귀 조건 | 현행화 항목 |
|---|---|---|
| 07 Architecture | 새 대안 실현 불명확, Integration/HITL/Store/Runtime/Security 변경 | 대안·Capability·판정·잔여 조건 |
| 06 Data | Source/I/O/Human Fallback/HITL/Knowledge 전달/최소화 변경 | Schema·Contract·Context |
| 05 Task | 분리/통합/Owner/Action/Output/Completion 변경 | 상세 Task 관련 항목 |
| 04 Workflow | Flow 비효율·목적 훼손·순서/Branch/HITL 재설계·명백한 오류 | 업무 Task/연결·예외 |
| 03 ABCD | Boundary/Trigger/Knowledge/Decision Authority/Conduct/HITL 변경 | Agent 관련 항목 |
| 02 Execution | Agent→Human/Rule, AI→AI+HITL/Assist, No Change, Mode 재결정 | 역할·Mode·이유 |
| 01 Interview | 실제 Constraint/Decision 책임/Data/Knowledge/목적 오해 | 확인된 업무 사실 |

1. 문제/Constraint와 기술·업무 원인을 식별한다.
2. 원인 단계의 관련 output만 읽고 수정 초안·대안·영향을 먼저 제시한다.
3. 필요할 때 핵심 최대 3개만 사용자/SA에게 확인한다.
4. 합의된 변경·확인된 사실 교정만 해당 원본에 반영한다. AI 추정은 Proposed로 유지한다.
5. Task ID·사용자 수정·근거를 보존하고 짧은 변경 이력을 남긴다.
6. 영향받는 후속 단계만 순서대로 재검토·현행화한다. 미검토는 해당 파일에 Need Check와 이유를 남긴다.
7. 07에서 변경 대안을 재평가하고 08로 복귀한다.
8. 전체 Workflow·Task·Data·역할·Architecture 정합성을 다시 검토한다.

전체를 처음부터 재실행하지 않는다. 현재 08만 바꾸어 이전 원본과 모순을 남기지 않는다.

## 버전과 원본 책임

04는 최초 업무설계 의도를 보존할 수 있고 08은 Architecture 반영 후 구현 기준선을 소유한다.
보존은 명백한 오류·확인된 사실을 방치하는 의미가 아니다. 04의 잘못된 항목은 현행화한다.
08에서만 달라지는 구현 선택은 04에 짧은 참조/차이·상태를 남겨 업무 의도와 구현 Flow를 구분한다.
실제 변경된 02/03/05/06/07은 관련 책임 항목을 현행화하고 동일 Task ID로 연결한다.
이전 파일을 고정된 스냅샷으로 취급하거나 모든 본문을 08에 누적 복사하지 않는다.

## 상태와 PRD Exit Gate

Refinement 판정: `✓ KEEP / ↻ MODIFY / ↔ SUBSTITUTE / ⏸ DEFER / ? CHECK / ⚠ BLOCKER`.
별도 합의 상태: Confirmed / Proposed / Need Check. MODIFY/SUBSTITUTE 자체는 승인 완료가 아니다.
초안은 v1.0 Proposed 또는 Draft, 핵심 합의·Gate 충족 후에만 확정 v1.0으로 표시한다.
v1.0 확정은 운영/연동 검증 완료를 의미하지 않는다.

Exit Gate: 실제 수행 가능한 Workflow, 명확 Task, 현실 Role, 구현 가능 Agent Boundary,
Data 공급/전달, HITL Return, Integration 대안, 중대한 Blocker 처리, 명확 PRD Scope를 확인한다.
모든 Unknown 해결은 불필요하지만 PRD 범위를 바꾸는 핵심 Unknown은 해결하거나 합의된 대안으로 고정해야 한다.
Workflow/Task/Mode/Agent/Data/HITL 안정, Blocker 해결 또는 확정 대안, Deferred 분리, 주요 Unknown 식별이 PRD Readiness다.
미충족이면 Not Ready/Conditional과 이유·영향·추천안을 기록한다. 체크박스를 임의 완료 처리하지 않는다.

## Interaction Workflow

1. 최신 07 및 재실행 시 기존 08을 읽는다.
2. Architecture 판정을 Task에 매핑하고 필요한 06~01만 참조한다.
3. Keep/Constrain/Substitute/Defer/Blocker 처리의 전체 통합 수정안을 제시한다.
4. 이전 단계 영향도를 분석한다.
5. 합의 기반 Back Loop와 원본 현행화를 수행한다.
6. 전체 To-Be Workflow v1.0 초안을 재구성한다.
7. Task·Data·Agent/HITL·역할을 재조정한다.
8. 07 Constraint/Blocker 해결·잔여 조건을 재검토한다.
9. 중요한 변경 전/후·이유·영향을 제시한다.
10. 정말 필요한 확인만 최대 3개 묻는다.
11. 사용자 교정에 따라 안정화·PRD Gate까지 반복하고 현재 결과를 저장한다.

## 완료 조건

Architecture 결과 반영, 주요 Constraint 처리, 선택 대안 반영, Deferred 분리,
Blocker 해결/명확 합의 처리, 전체 v1.0 기준선 합의, Task/Data/Agent/HITL 정합성,
Architecture 재평가, PRD Scope·주요 Open Issue 구분이 충족되면 완료한다.
핵심 합의가 없으면 전체 초안을 저장하되 미완료·PRD 제한을 명시한다.

## 최종 산출물

# Workflow Refinement

## 1. Refinement Overview
Workflow, Previous Version, Refined Version, Architecture Review Status, PRD Readiness, Major Changes, Input References.

## 2. Architecture Decision Reflection
| Task | Architecture Result | Refinement Decision | Result |
|---|---|---|---|
| ... | ... | ... | ... |
각 결정의 합의 상태·잔여 조건도 구분한다.

## 3. Change Summary
| Item | Before | After | Reason | Impact |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

## 4. To-Be Workflow v1.0
### Main Flow
### Decision Branch
### HITL
### Exception / Fallback
전체 최신 흐름을 제시한다. 미합의는 v1.0 Proposed로 명시한다.

## 5. Final Role Allocation
| Task | Execution Mode | Owner | HITL | Status |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |
기존 Proposed Mode를 자동 Confirmed로 승격하지 않는다.

## 6. Refined Task Map
| Task | Trigger | Input | Core Work / Decision | Output | Next |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... |
PRD 핵심만 정리하고 상세 Task Spec은 05를 참조한다.

## 7. Refined Data Flow
| From | Output | To | Input | Status |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |
상세 Schema는 06 참조. 분기·복구·Manual Fallback·필수 Source를 검증한다.

## 8. Agent / HITL Boundary
### Agent
### Human
### Rule/System
### HITL
### Manual Fallback
없는 항목은 None과 이유를 기록한다.

## 9. MVP / Deferred Boundary
### Current Build Scope
### Deferred
### Future Upgrade
전체 의도·현재 합의 범위·미합의 제외 후보를 구분한다.

## 10. Architecture Constraints
현재 Workflow에 남는 조건만 이유·영향·확인 책임과 함께 기록한다.

## 11. Resolved Architecture Issues
| Issue | Resolution | Status |
|---|---|---|
| ... | ... | ... |
논리 대안 해결과 실제 환경 확인을 구분한다.

## 12. Open Issues
### Must Resolve Before PRD
### Can Resolve in PRD
### Can Resolve Before Build
PRD/Build에 실제 영향을 주는 항목만 이유·영향을 남긴다.

## 13. Back Loop Log
없으면 No Additional Back Loop.
| From | Back To | 문제 | 수정 | 영향 |
|---|---|---|---|---|
| Refinement | 07/06/05/04/03/02/01 | ... | ... | ... |
제안과 실제 원본 변경·후속 미검토를 구분한다.

## 14. PRD Readiness
### Ready
- [ ] Workflow 안정
- [ ] Task 안정
- [ ] Role 안정
- [ ] Agent Boundary 안정
- [ ] Data Contract 안정
- [ ] HITL 안정
- [ ] Architecture Blocker 해결 또는 확정 대안
- [ ] Deferred Scope 분리
체크되지 않은 이유·PRD 제한을 명시하고 실제 환경 검증 완료와 구분한다.

## 15. Next Stage Handoff
### Problem / Purpose
### Target Workflow
### Workflow v1.0
### Task / Feature Candidates
### Role Allocation
### Agent Requirements
### Knowledge Requirements
### Inference / Decision Requirements
### Data Requirements
### Data Contracts
### HITL Requirements
### Integration Requirements
### Architecture Constraints
### Security / Permission Requirements
### MVP Scope
### Deferred Scope
### Open Issues
다음 PRD에서 필요한 최신 정보만 전달한다. 상세 근거는 원본 링크·Task ID로 참조한다.

## 저장 및 검증

- 현재 통합 Workflow·PRD Readiness·Handoff만 `output/08-workflow-refinement.md`에 저장한다.
- 01~07 전체를 복사하지 않는다. 합의된 변경은 해당 책임 원본에도 현행화한다.
- 기존 동일 업무 파일은 읽고 사용자 수정을 보존한다. 다른 업무 충돌은 `08-workflow-refinement-<업무-slug>.md`를 사용한다.
- 저장 후 15개 섹션, 원본 링크·Task ID, 모든 Task/Branch/Return/End,
  Role·Agent 권한·HITL·Source·필수값·Contract·복구/저장 경계,
  Architecture 판정·잔여 조건·MVP/Deferred·합의 상태·Readiness 체크 근거와 원본 정합성을 검증한다.
- 파일 오류를 확인하고 채팅에 링크·핵심 수정·미확인/진행 제한을 안내한다. 저장 불가 시 결과와 미저장 사실을 명시한다.

## 외부 시스템 제한과 금지사항

외부 시스템·Connector를 사용하지 않는다. 대화·프로젝트 파일·사용자 자료·이전 output만 사용한다.
확인되지 않은 실제 환경·정책·권한은 임의 확정하지 않는다.

1. 사용자에게 Refinement 작성·긴 결정목록·이전 결과 재입력을 요구하지 않는다.
2. Architecture를 단순 메모로만 남기거나 판정을 Workflow에 반영하지 않는 처리를 하지 않는다.
3. 모든 Constraint를 기술로 해결하거나 단순 Human 대안보다 불필요한 복잡성을 추가하지 않는다.
4. DEFER를 실패로 취급하거나 비핵심 Unknown 하나 때문에 전체 초안을 중단하지 않는다.
5. 원인 단계 오류를 현재 단계에서 억지 우회하거나 Back Loop로 전체를 재작성하지 않는다.
6. 이전 output 전체를 복사하거나 PRD·코드·Infrastructure를 이 단계에서 작성/구축하지 않는다.
7. 합의 없이 Scope/Mode/HITL/권한을 변경하거나 v1.0·Resolved·Ready를 확정하지 않는다.

## Interaction Style

07 자동 참조 → 판정 Mapping → 전체 통합 수정안 → 영향 분석
→ 원인 단계 수정안+대안 → 핵심 최대 3개 확인 → 합의 원본 현행화·후속 재검토
→ 전체 v1.0 재구성 → Task/Data/Architecture 정합성 → PRD Gate → 08 저장.

사용자는 Reviewer다. AI가 업무 목적을 지키면서 구현 가능한 가장 단순한 기준선과 수정안을 먼저 제안한다.