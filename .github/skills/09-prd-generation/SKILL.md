---
name: 09-prd-generation
description: 'Workflow Refinement까지의 설계를 외부 개발도구로 옮길 수 있는 독립형 텍스트 중심 Final PRD로 통합하는 9단계 Skill. 이전 output은 내부 작성·검증에만 참조하고 최종 문서에는 원본 링크 없이 요구사항·AI 기준·데이터 계약·상태·예외·MVP·AC·Build 경계를 자체 포함한다. AI가 전체 초안을 먼저 작성하고 사용자와 교정한다. 핵심 미종결은 책임 원본과 후속 영향을 현행화하며, 모든 Must와 AC·독립성·Finality Gate 통과 시만 FINAL 및 DESIGN COMPLETE를 선언하고 output/09-final-prd.md에 저장한다.'
---

# 09. Final PRD

## 실행 번호 안내

실행 요청 시 첫 안내에 `09/09 · Final PRD 실행`을 표시한다. 재개·Back Loop에서도 현재 단계 번호와 대상 항목을 함께 안내한다. 호출 이름은 `/09-prd-generation`이며 이 변경은 업무 내용·output 번호·Finality 조건을 바꾸지 않는다.

## 목적과 경계

앞 단계 업무설계를 개발 가능한 요구사항으로 번역한다. 새 제품이나 기능을 상상하지 않는다.
`Workflow → Product Flow`, `Task → Feature/FR`, `Trigger → Start Condition`,
`Input/Output → Data Requirement`, `Knowledge → Knowledge Requirement`,
`Inference → AI/Logic`, `Decision → Decision Rule`, `Conduct → Action`,
`HITL → Human Review`, `Exception → Exception Handling`, `Architecture → Technical Constraint`.
이 단계에서 PRD·MVP Vertical Slice·Acceptance Criteria·Build Boundary를 함께 확정한다.
Pipeline은 01 Interview→02 Execution→03 ABCD→04 Workflow→05 Task→06 Data→07 Architecture→08 Refinement→09 Final PRD다.
Gate 통과 시 `Build-ready Final PRD v1.0` 및 `DESIGN COMPLETE`로 설계를 종료한다.
별도 10번째 설계 Skill 없이 Final PRD→Build→Test→Fix→MVP로 진행한다.
Physical DB Schema, 코드, Infrastructure, 권한 신청·보안승인은 수행하지 않는다.

## 외부 개발도구 이관용 독립 문서

- 최종 산출물은 이 PRD 한 문서만 외부 개발도구에 전달해 개발할 수 있는 독립형 문서다. 앞 단계 파일·Skill·대화·Viewer를 함께 옮긴다고 가정하지 않는다.
- 이전 output의 선택 참조와 Back Loop는 내부 작성·검증 절차다. 최종 PRD에는 원본 링크/경로·첨부파일 의존·"06 참조"·"앞 단계 합의대로" 같은 지시를 넣지 않는다. 링크만 삭제하지 말고 해당 규칙/계약/판정/예외 내용을 본문에 풀어 쓴다.
- 제품에서 실제 사용하는 출처 URL·Endpoint·입출력 파일명은 구현 정보라 포함할 수 있다. 설계 문서를 찾아 읽기 위한 URL/경로·출처 링크는 제외한다. 실제 Interface/권한을 발명하지 않는다.
- 텍스트 중심 Markdown: 짧은 제목, 설명 문단, 평면 목록, 번호 순서, Feature/Requirement별 반복 블록. 큰 표·Mermaid·이미지·HTML·각주·별도 문서의 렌더링에 의존하지 않는다. 필요한 JSON 메시지 예시는 코드 블록으로 자체 포함할 수 있다.
- 내부 Task/단계/Issue 분류 용어만으로 요구를 설명하지 않는다. 개발자가 이해할 기능명/입력/조건/행동/출력/실패를 작성하고 문서 내 Feature/Requirement/AC ID는 유지한다.
- 데이터 객체·핵심 필드·타입·필수/조건부·관계·ID/버전/중복·교체·복구 계약, AI 기준/근거/불확실성, 모든 Branch/Return을 빠뜨리지 않는다. 필요한 상세를 내부 참조로 대체하지 않는다.
- 최종본에는 현재 승인된 기준과 짧은 변경 요약만 포함한다. 과거 대화·철회안·Back Loop 전체 이력·책임 원본 링크는 내부 원본에 보존하고 이관 본문에 누적 복사하지 않는다.
- Draft도 동일한 독립 구조를 사용하되 미확정 요구/결정과 영향·필요 확인을 본문에 명시한다. 참조를 제거하는 과정에서 미종결을 지우거나 FINAL로 승격하지 않는다.
- 재실행 시 기존 25섹션 형식도 읽어 기존 ID/사용자 교정/정책을 계승하고 아래 14섹션 구조로 재편한다. ID 삭제·재번호로 추적성을 끊지 않는다.

## Reviewer-first와 선택 참조

- 사용자는 작성자가 아닌 Reviewer다. 빈 PRD, Feature 목록, User Story, Acceptance 기준 작성을 요구하지 않는다.
- AI가 가능한 전체 PRD 초안·수정안·기본안·대안을 먼저 작성한다. 확인은 결정을 바꾸는 핵심 최대 1~3개다.
- 최신 해당 업무 `output/08-workflow-refinement.md`의 버전·상태·근거·Handoff·미종결부터 읽는다.
- 재실행이면 기존 `output/09-final-prd.md`의 Requirement ID·교정·이력·미종결도 먼저 확인한다. 이전 `output/09-prd.md`가 있으면 교정과 ID를 계승하되 이전 초안을 최신 Build 기준으로 혼동하지 않도록 버전·경로를 명시한다.
- 08의 Problem/Purpose, 전체 Workflow, Task/Feature Candidates, Role, Agent, Knowledge,
  Inference/Decision, Data/Contracts, HITL, Integration, Security, Constraint, MVP/Deferred/Open Issues를 기준으로 한다.
- 필요한 근거만 07 Architecture, 06 Data Field/Contract, 05 Task Completion,
  04 Flow, 03 Brain/Conduct, 02 Mode, 01 실제 업무 Decision으로 역추적한다. 전체 output을 무조건 로드/복사하지 않는다.
- 08 확정 v1.0은 기준선이다. 08이 Proposed/Not Ready이면 상태를 계승해 조건부 PRD 초안 검토를 이어갈 수 있지만 확정 기준선으로 표현하지 않는다.
- 확정된 BLOCKER/권한 제한을 우회하지 않는다. 안전한 기본안도 미합의면 Proposed이며 승인된 대체 Scope가 아니다.

## Finality Gate — 미종결 항목 심층 추적과 종결

- output의 △/Draft/Proposed/? Need Check/Recheck/Conflict/Missing/A Architecture Check 및 조건부 판정을 종결 전까지 추적한다. "후속 확인"만 적고 종료하지 않는다.
- 각 항목의 ID·Task ID·관련 Requirement ID·책임 원본 링크·현재 근거·원인·영향·필요 증거·추천/대안·검증 방법·통과 기준·확인 책임을 기록한다.
- 이전 미종결 목록을 확인하고 현재 PRD와 관련된 원본·근거를 선택 참조해 재검증한다. 이미 받은 답은 다시 묻지 않고 새 Feature/Data/Constraint 근거로 해결안을 구체화한다.
- 로컬 조사→반례 검토→수정안 먼저 제시→핵심 최대 1~3개 확인→책임 원본 현행화→후속 영향 재검토→동일 항목 재검증을 반복한다.
- Finality 종결은 필요한 근거/검증·사용자 합의로 확정하거나 승인된 대안·제외를 원본과 후속 영향에 반영한 경우다. 조건부 진행·다음 단계 인계 자체는 종결이 아니다.
- 핵심 미종결이 있으면 초안 저장은 허용하되 단계 완료/다음 단계 준비 완료/Ready/확정 기준선/FINAL/DESIGN COMPLETE로 표시하지 않는다. 09 안에서 검토를 이어가며 Build에 해결 책임을 떠넘기지 않는다.
- 미해결은 같은 항목 ID로 내부 추적을 유지하고 14절 상태·미확정 결정에 독립적인 설명으로 포함한다. 필요 증거·통과 기준·재확인 책임/조건·막힌 지점·다음 행동을 남긴다. 원본 링크는 내부 검토에서만 사용하며 기존 항목을 삭제하거나 자동 확정하지 않는다.
- 종결 시 책임 원본의 상태·근거·이력과 관련 후속 output을 현행화하고 재검증한다. 새 근거로 결론이 깨지면 이유를 보존하고 재개한다.
- 증거/도구/권한 때문에 확인 불가면 미종결과 정확한 진행 제한을 명시한다. 없는 API·권한·품질·검증 결과를 만들지 않는다. 외부 호출 제한과 단계 경계를 지킨다.
- 승인된 Deferred/Future 및 Build Logic에 영향을 주지 않는 External Operational Detail만 핵심 종결 대상에서 분리할 수 있다. 미합의 후보를 Deferred로 바꿔 Gate를 통과시키지 않는다.

## Finality 분류·해결·Sweep

| 분류 | 기준 | 해결 |
|---|---|---|
| Build Critical | Feature/Decision/I/O/Human·AI/HITL/Data Source/Architecture가 불명확하여 구현 불가 | 근거·합의·Back Loop로 반드시 해결 |
| Quality Critical | Output/AI 품질·Exception 기대행동이 없어 정답 판단 불가 | 측정 가능한 AC·샘플·판정 방법까지 설계 |
| External Dependency | 실제 API/권한/Runtime/보안승인을 현재 자료로 확인 불가 | 사실을 조작하지 않고 승인된 방식으로 Build 의존성 제거 |
| Non-Critical | 현재 Build와 검증에 영향 없음 | 영향 근거와 책임을 기록하고 승인된 Deferred/Future 또는 운영 상세로 분리 |

- Existing Evidence→AI Resolution→필요 시 2~3개 대안→Recommended Default→필수 사용자 확인 최대 1~3개→원인 Back Loop→후속 재계산→동일 항목 재검증 순서로 처리한다.
- 외부 Unknown은 Safe Default→Manual Fallback→Alternative→Scope Reduction→Deferred 순으로 비교한다. 업무 목표·자동화/Human 경계·MVP 변경은 명시 합의가 필요하며 사용자 침묵을 승인으로 보지 않는다.
- 승인된 대체안도 실제 이용 가능성·Data/Decision/AC/권한·E2E 의존성을 검증한다. 수동 대체가 원래 Goal을 깨면 종결안이 아니며, 사용자 거절/증거 부족이면 초안 미종결로 남긴다.
- Finality는 △ Proposed/Need Check를 기호만 Final로 바꾸는 것이 아니다. 각 항목을 근거·합의에 따라 Final/Deferred/Removed/Replaced로 처리하고 원본 이력·대체 ID·영향을 남긴다.
- Conflict는 최신 파일이 자동 정답이 아니다. 원래 업무 근거·사용자 합의까지 역추적하고 모든 관련 후속 결과를 정합화한다.
- 초안 작성 시와 저장 직전 관련 01~09 output 전체를 로컬 텍스트 검색한다. 전체 문서를 무조건 읽지 않고 검색된 현재 항목만 원본으로 추적한다.
- 검색 상태: △, ?, ⚠, Proposed, Need Check, Recheck, Conflict, SA Check, Architecture Check Required, Must Resolve, Open Issue, Missing, Unknown, TBD, 미정, 확인 필요, 결정 필요, 추후 결정, 조건부 판정.
- 기호/문자만으로 미종결 판정하지 않는다. 템플릿·과거 이력·승인 Deferred와 현재 핵심 항목을 구분해 누락/오탐을 검사한다. 승인 BLOCKER를 이름만 지우거나 우회하지 않는다.

## PRD Framework

| 영역 | 작성 기준 |
|---|---|
| Problem/Context | 실제 업무 상황·문제·개선 이유·Workflow 범위. 확인되지 않은 Business Value/수치 금지 |
| Goal | 구현 결과 중심. 추상적 혁신·새 목적을 추가하지 않음 |
| Non-Goal | 기존 범위 밖·승인된 Deferred·Future·Production 비포함. Unknown Integration을 임의 제외하지 않음 |
| Users/Actors | 실제 Human/AI/System 역할만. 불필요 Persona 생성 금지 |
| Product Flow | Start→Human/System/AI→Decision/Exception/HITL Return→Output→End. 사용자 시작과 글별 수동 요청 구분 |
| Feature Map | 사용자 기능 단위로 Task를 통합/분리 가능. Task=Feature 기계적 1:1 매핑 금지 |
| Functional Requirements | 조건·행동·결과가 검증 가능한 "시스템은 ...해야 한다" 문장 |
| AI/Agent | Input/Context/Knowledge/Inference/Decision/Structured Output/Evidence/Uncertainty/Escalation/Allowed·Prohibited Action |
| Knowledge | Required(없으면 불가)/Supporting(품질 보조)/Human(사람 판단) 구분, RAG는 Architecture 판정 계승 |
| Data | Objects·핵심 Field·Required/Conditional·Source·Quality·Decision/HITL Data·Contract를 자체 포함. 06은 내부 검증에만 참조 |
| Decision | Inputs·Criteria·Results·Next. 미확정 Rule을 임의 확정하지 않음 |
| HITL | Trigger·Human Sees/Action/Decision·Return/Resume·Audit. 없으면 None과 이유, 일반 Human Input과 분리 |
| Integration | Required/Optional/Deferred/Unknown 구분. 필요 Capability와 실제 Interface 가용성 구분 |
| Exception | Missing/Invalid/Knowledge/AI Output/Tool/Permission 등 Workflow에 영향을 주는 핵심 오류만 |
| Security/Permission | 실제 확인 정책과 제안 통제 구분. 미확정은 Security Review Required, Secret 요청 금지 |
| State | 실제 Branch/Retry/Cancel/Completion과 일치. 분석 성공·저장 성공·자동/수동 이력 분리 |
| Output | 최종 자료·필수 내용·형식·상태. 이 PRD의 Acceptance Criteria와 연결 |
| Technical Constraints | Architecture 근거와 영향. Requirement와 제약을 혼동하지 않음 |
| MVP/Deferred/Future | 08의 합의 Scope 계승, 승인되지 않은 후보를 확정 제외하지 않음 |
| Open Issues | Critical/External/Non-Critical 분류·해결·승인 제외 근거, 핵심 미종결은 Build 인계 금지 |

## Requirement ID와 추적성

- Feature=`F01`, Functional=`FR-001`, AI=`AI-01`, Knowledge=`KR-01`,
  Decision=`DR-01`, HITL=`HR-01`, Integration=`IR-01`, Exception=`ER-01`.
- 기존 ID는 재실행/수정 때 안정적으로 유지한다. 제거/대체는 이유·대체 ID를 기록한다.
- 핵심 Requirement의 원본 링크+Task/Object/Decision 근거는 내부 검토에서 추적한다. 이관 PRD의 12절에는 Requirement ID→AC ID를 평면 텍스트 목록으로 연결하고, 해당 요구의 규칙/계약은 본문에 자체 포함한다. 외부 개발자가 원본을 읽어야 이해되는 상태는 Gate 실패다.
- 우선순위 Must/Should/Could와 합의 상태 Confirmed/Proposed/Need Check/Recheck/Deferred는 별도다. Must라고 Confirmed가 아니다.
- FR에는 기능 수준, AI/HITL/Data에는 해당 상세 책임을 두어 중복 선언을 줄인다. 같은 Rule을 서로 다르게 작성하지 않는다.
- 근거 없는 신규 기능·Actor·강제 승인·추가 AI 호출·외부 Action·Scope 확장 금지.
- 모델 성공과 저장/외부 Action 완료를 구분한다. 실패·재시도·예산·취소·수동 덮어쓰기 정책은 원본 계승, 변경은 합의 후 반영.

## Back Loop

| 원인 단계 | 복귀 조건 | 현행화 책임 |
|---|---|---|
| 08 Refinement | MVP/Deferred 불명확, v1.0 모순, Boundary/핵심 Open Issue | 최신 Workflow/Scope/Gate |
| 07 Architecture | Feasibility/Integration/Tool/Runtime/Security/State·Storage 변화 | Capability/Option/조건·대안 |
| 06 Data | Field/Output/Decision/HITL/Source/Contract 부족·불일치 | Schema/Contract/Source |
| 05 Task | Task/Action/Completion/Criteria/I/O 모호 | Task 상세 명세 |
| 04 Workflow | Flow/Branch/HITL Return/순서/Final Output 오류 | 업무 Flow, 05~08 영향 검토 |
| 03 ABCD | Knowledge/Inference/Authority/Conduct/Boundary 부족 | Agent 설계·경계 |
| 02 Execution | AI 불필요, Rule/Human 적합, HITL/Mode 변경 | 역할·권한·수행방식 |
| 01 Interview | Problem/Goal/실제 Criteria/I/O/Tacit Knowledge 오해 | 확인된 업무 사실 |

1. PRD Gap을 식별하고 문구 문제와 설계 문제를 구분한다. 문구로 모순을 덮지 않는다.
2. 원인 단계의 관련 부분만 읽고 수정 초안·대안·영향을 먼저 제시한다.
3. 필요한 핵심 확인만 최대 1~3개 묻는다. 승인된 수정/확인된 사실만 책임 원본에 반영한다.
4. 이전 합의·사용자 수정·ID를 보존하고 짧은 근거/일시 이력을 남긴다.
5. 영향받는 후속 output을 순서대로 현행화·재검토한 뒤 09 전체 Flow/Requirement 정합성을 갱신한다.
6. 미검토는 Need Check와 이유를 기록한다. 전체 단계를 처음부터 재실행하거나 모든 원본을 복사하지 않는다.

## 상태·버전·Quality Gate

- Confirmed=근거/합의, Proposed=AI 초안, Need Check=미확인,
  Recheck=기존 결론 재검토, Deferred=승인 제외 또는 후보 상태를 별도로 명시.
- PRD v0.1→검토/Back Loop 반영 v0.x. 08 Proposed를 확정 v1.0으로 표기하지 않는다.
- 이 Skill에서 모든 Gate를 통과하면 Build-ready Final PRD v1.0 / Final 상태로 승격하고 `DESIGN COMPLETE`를 선언한다. 파일 생성만으로 자동 승격하지 않는다.
- Requirement별 Necessary/Clear/Testable/Traceable/Feasible/Scoped 검토.
- 전체 Workflow Alignment, Task Coverage, Agent/Data/Architecture/Scope Alignment,
  Human Boundary, Exception/End/Resume, Testability, 중복·근거 없는 기능 여부를 자체 검토.
- 14개 섹션과 Testable Requirement 작성은 초안 구조 충족이지 종결과 다르다. 독립성 검사도 통과해야 한다.
- 완료 조건: Problem/Goal/Workflow/Feature/FR/AI/Knowledge/Data/Decision/HITL/Exception/Architecture/MVP/AC/Build Boundary Final(비해당은 근거 있는 None), 모든 Must↔AC 연결, Build Critical·Quality Critical·현재 MVP Architecture Blocker 0건, 핵심 Proposed/Need Check/Recheck/Conflict 0건.
- 14절 수치는 실제 내부 항목 Register에서 계산한다. 이관 본문에는 미확정 결정/영향/확인 조건을 링크 없이 설명한다. 승인 Deferred/Future와 비의존 운영 상세는 별도 목록이며 원래 Blocker·해결/제외 근거를 숨기지 않는다.
- 설계 AC가 확정됐다는 것과 구현 테스트가 통과했다는 것을 구분한다. 미실행 테스트를 Passed로 작성하지 않는다.

## MVP와 Acceptance Criteria 확정

- 실제 Input→핵심 Knowledge/Inference/Decision→Output→필요 HITL까지 E2E Vertical Slice를 AI가 먼저 제안한다.
- 핵심 업무 대표성·K-I-D·직접 결과 검토·외부 의존 최소·하루 Build 가능성을 비교한다. Day 3/하루 Build는 교육 일정이 확인된 경우 목표로 적용하고 미확인 일정·구현 가능성을 보장하지 않는다.
- In Scope/Out of Scope/Deferred·Future를 구분하고 08의 합의 Scope 변경은 Back Loop 및 사용자 합의 후 확정한다.
- 모든 Must Requirement(FR뿐 아니라 AI/Data/Decision/HITL/Integration/Exception/Security 등)에 최소 하나의 AC를 연결한다. AC 누락은 Gate 실패다.
- AC ID는 `AC-F01-01`, `AC-AI01-01`, `AC-HR01-01` 등 안정적으로 유지한다. Given/When/Then 또는 Input/Expected Behavior/Expected Output으로 검증 가능한 기대행동을 작성한다.
- AI AC는 Input·Knowledge·Output 필수 Field·Decision Criteria·Evidence·Uncertainty/HITL·허용 Action을 검증한다. "잘 분석한다"나 AI 자기평가만으로 통과시키지 않는다.
- Function/Data/Knowledge/Inference/Decision/Workflow/HITL/Exception을 검토하고 정상·핵심 실패·재시도/복구·취소·경계 사례를 필요한 만큼 포함한다.
- 품질 판단이 필요한 경우 대표 입력/기대결과·검토자·측정 방법·통과 기준을 설계한다. 임의 Business Value/Production 수치나 실행한 적 없는 품질 결과를 만들지 않는다.
- Build/Manual/Existing/Deferred 책임과 연결점을 명확히 한다. Existing / Assume에는 확인 근거 또는 승인된 로컬 대체 조건이 필요하다. Unknown 핵심 의존성을 Assume으로 숨기지 않는다.

## Interaction Workflow

08 및 기존 09/미종결 확인→필요한 07~01 선택 참조→전체 v0.1 초안→Workflow/Task/ABCD/Data/Architecture를 요구사항으로 변환
→Quality Self-review→Gap/미종결 심층 검토→원인 Back Loop 수정안→핵심 1~3개 합의
→책임 원본/후속 현행화→MVP/AC/Build Boundary 확정→Must↔AC 검증→Finality Sweep 재실행
→독립형 개발 문서 재편/원본 참조 의존 검사→핵심 미종결이면 초안 저장/검토 지속, 실제 종결이면 09 저장→FINAL→DESIGN COMPLETE.

## 최종 산출물

# Build-ready Final PRD v1.0

위 제목은 Gate 통과 후 사용한다. 미종결 Draft는 Final PRD Draft v0.x로 제목·상태를 구분한다.

각 절은 아래 내용으로 채운다. 표 대신 문단·평면 목록·반복 블록을 사용한다. 별도 설계 문서 링크·Task 번호 설명에 의존하지 않는다.

## 1. 제품 개요
제품명, 버전, 갱신일, Draft/FINAL 상태, 문제, 구현 목표, 사용자와 역할. 개발자가 첫 절에서 무엇을 만들지 이해할 수 있게 작성한다. Source Workflow 버전/경로는 이관 본문에 넣지 않는다.

## 2. MVP 범위와 비목표
실제 Input부터 최종 Output까지의 핵심 범위, 포함 기능, 명시 비목표, 승인 Deferred/Future와 확장 조건. 후보 제외와 승인 제외를 구분한다. 일정은 확인 근거가 있는 경우만 작성한다.

## 3. 사용자 흐름과 최종 결과
시작 조건부터 완료까지 번호 순서로 설명한다. 사용자 입력/AI/System 행동, 주요 분기, 실패 후 복귀, 결과 조회·필수 내용/형식/상태를 포함한다. 그림 없이 읽을 수 있어야 한다.

## 4. 기능별 구현 요구사항
Feature별로 다음 블록을 반복한다: 기능 ID/이름, 목적, 담당자, 시작 조건, 입력, Requirement ID와 Must/Should/Could·합의 상태, 시스템 행동, 출력, 완료 조건, 예외/AC ID. 기존 FR ID를 보존한다. 요구는 검증 가능한 문장으로 작성한다.

## 5. AI 처리와 판단 기준
AI ID별 Input/Context/Required·Supporting·Human Knowledge와 KR ID, Inference, Decision, Structured Output, Evidence, Uncertainty, Escalation, 허용/금지 Action. 실제 의미 기준·판정 예시·근거 부족 처리·품질 검증 방법을 본문에 적는다. AI가 없으면 None과 이유.

## 6. 데이터와 입출력 계약
객체별 이름/목적/Source/핵심 필드·타입·필수/조건부·관계·품질조건. 요청/반환 메시지, ID 발급 주체·입력 버전·중복·검증·적용·보존·교체 계약을 자체 포함한다. 필요한 정상/실패 JSON 예시는 합성 예시·미실행임을 표시한다. 물리 DB 구현을 발명하지 않는다.

## 7. 업무 규칙과 분기
DR ID별 입력, 비교/판정 기준, 결과별 다음 행동. 날짜/시각·URL·태그·순서·동시성·교체·재시도 예산 등 해당 업무의 핵심 규칙을 구체적으로 쓴다. 미확정 Rule은 상태/영향을 명시하고 최종 Rule처럼 표현하지 않는다.

## 8. 상태와 실패·복구
State 요구 ID, 진입/전환/종료·재시작 조건, 분석 성공/저장 성공 구분. ER ID별 실패 원인/기록/기존 자료 보호/재시도 횟수/취소/복귀/종결을 설명한다. 정상 경로만으로 상태를 정의하지 않는다.

## 9. 사용자 수행과 승인 경계
일반 입력/수동 실행/전달/교정과 Approval HITL을 분리한다. HITL이 있으면 HR ID, Trigger, Human Sees/Action/Decision, Resume/Audit를 포함한다. 없으면 None과 이유. 임의 승인 큐/추가 AI 호출 없음.

## 10. 연동과 보안
IR ID별 필요한 Read/Write/Trigger·입출력·가용성·권한·승인 대안. Security 요구 ID, 허용 자료/전송/저장/로그·Secret·비신뢰 입력·AI/시스템 권한을 작성한다. 실제 URL/Interface는 확인된 제품 정보만 포함한다. 핵심 Unknown은 14절에 남긴다.

## 11. 실행 환경과 개발 경계
Runtime/Storage/Context 등 기술 제약과 관련 요구 ID. Build / Manual / Existing·Assume / Deferred 각각의 책임·연결·조건을 자체 설명한다. 확인되지 않은 Runtime/권한/Store를 Assume하지 않는다.

## 12. Acceptance Criteria와 요구사항 연결
AC ID별 관련 Requirement ID, Given/Input, When/행동, Then/출력·불변조건, 검증 방법/통과 기준을 반복 블록으로 쓴다. 정상·핵심 실패·AI 품질·경계/복구 사례, 최종 결과의 필수 형식/상태를 포함한다. 테스트 실행 상태는 별도다. 마지막에 모든 Must ID→AC ID 목록과 AC 없는 Must 건수를 작성한다. 원본 Source 링크는 넣지 않는다.

## 13. 구현 순서와 완료 기준
승인된 MVP를 개발하기 위한 작은 E2E 구현 순서와 검증 지점을 제안한다. 각 묶음에 Feature/Requirement/AC ID를 연결한다. 이 PRD 자체로 개발할 수 있게 규칙/계약이 포함됐는지 확인한다. 추가 설계 단계나 신규 기능/스택/일정 약속을 발명하지 않는다. 일반 구현 오류는 Build→Test→Fix, 중대한 설계 오류는 명시 재검토다.

## 14. 문서 상태와 미확정 결정
짧은 변경 요약, 실제 미종결 ID별 관련 요구·독립적인 문제 설명/원인·영향·추천/대안·필요 증거·검증/통과 기준·확인 책임·다음 행동. Build/Quality Critical, External Dependency, 핵심 Proposed/Need Check/Recheck/Conflict/Architecture Blocker 건수를 실제 계산한다. 승인 Deferred/비의존 운영 상세와 분리한다. 내부 책임 원본 경로·Back Loop 전체 이력은 넣지 않는다. 핵심 조건 0건 및 모든 Gate 통과 시만 FINAL/DESIGN COMPLETE, Draft는 실제 제한을 표시한다.

## 저장·검증

- 현재 Final PRD와 Build Handoff만 `output/09-final-prd.md`에 저장한다. 초안도 저장하며 미종결 상태를 명시한다. FINAL 파일만 Build의 단일 기준 문서다.
- 동일 업무 기존 파일은 읽고 사용자 수정·ID·이력을 보존한다. 다른 업무 충돌은 `09-final-prd-<업무-slug>.md` 사용.
- 원본 상대 링크·Task 근거는 내부 검토에만 사용한다. 이관 PRD는 문서 내 Feature/Object/Requirement/AC ID로 연결하고 개발에 필요한 내용만 자체 포함한다. 01~08 전체/이전 검토 이력을 누적 복사하지 않는다.
- 저장 직전 내부 Finality Sweep, 저장 후 14개 번호 섹션·ID 유일성/Must↔AC·내부 Source/Task Coverage·Flow/State/Exception/Resume/End·권한/복구 예산·MVP/Build Boundary·상태/미종결 집계 정합성 및 파일 오류를 검증한다.
- 독립성 검사: 최종 PRD의 설계 문서 링크·상대 경로·첨부 참조·이전 단계 참조 지시·정의 없는 내부 ID를 검색한다. 제품의 실제 URL/입출력 경로와 구분한다. 발견한 참조의 필요 내용을 본문에 풀어 쓰고, 원본이 없는 독자의 관점에서 모든 규칙/계약/AC를 다시 읽는다.
- 텍스트 이관 검사: 큰 표·Mermaid·HTML/이미지·각주 없이 핵심 기능/데이터/분기/검증을 이해할 수 있어야 한다. 링크를 지우면서 계약/근거 부족/미종결을 누락하지 않았는지 검사한다. 독립성 실패는 FINAL Gate 실패다.
- 채팅에는 저장 링크·주요 변경·종결/미종결·다음 검토를 구분한다. 저장 불가면 미저장 사실과 초안 내용을 제공한다.

## 외부 시스템 제한·금지사항

외부 시스템/Connector를 사용하지 않는다. 대화·프로젝트 파일·사용자 자료·이전 output만 사용한다.
확인되지 않은 시스템/API/권한/보안정책을 확정 Requirement로 만들지 않는다.
빈 Template 요구·이미 제공된 내용 재입력·근거 없는 기능/Scope/Actor 추가·몰래 Deferred 재포함 금지.
모호한 "AI가 분석한다"만으로 AI 요구를 끝내지 않는다. I/O/Knowledge/Authority/HITL Return을 구체화한다.
설계 오류를 PRD 문구로 임의 해결·원본 방치·전체 Back Loop 재시작·Production 수치 추정 금지.
AC/MVP를 별도 설계 Skill로 넘기지 않는다. 이 단계에서 코드 구현은 수행하지 않는다.
FINAL 이후 일반 구현 오류는 Build→Test→Fix로 해결한다. 중대한 설계 오류가 발견된 경우만 관련 01~09로 명시 Back Loop하고 기준 PRD 버전·상태를 재검토한다.