---
name: execution-design
description: 'Workflow Interview의 Task & Decision Map을 기반으로 Human, Human+AI Assist, AI+HITL, AI/Agent, Rule/System, No Change 수행방식을 제안하는 Execution Design Skill. AI가 먼저 초안을 제시하고 사용자와 교정·합의한다. 확인된 업무 변경은 1단계 파일에 현행화하고, 역할·HITL·설계 판단만 2단계 output에 저장한다. 다음 ABCD/Workflow 단계는 필요한 이전 결과를 Task ID로 참조한다.'
---

# Execution Design

## 목적

이전 `Workflow Interview` 결과를 기반으로 각 Task의 가장 적절한 수행방식을 설계한다.
목표는 AI/Agent를 많이 적용하는 것이 아니다. AI가 적합하지 않다는 결론도 정상적인 결과로 인정한다.

최종 산출물은 다음 단계에서 바로 사용할 수 있는
`Task & Decision Map + Execution Design + Role Allocation`이다.

## 핵심 운영 원칙

### 1. 이전 Output을 먼저 읽는다

- 시작 시 프로젝트의 `output/` 폴더를 확인한다.
- 기본 업무 원본은 `output/01-workflow-interview.md`이다. 해당 업무의 2단계 파일이 있으면 참조·변경 이력·Role Allocation·미확인 사항을 먼저 읽고, 1단계의 연결된 Task와 필요한 근거만 추가로 읽는다. 첫 실행은 전체 Task 분석에 필요한 1단계 정보를 읽되 후속 output에 복사하지 않는다.
- 업무 개요, Workflow, Task & Decision Map, Knowledge, Inference, Decision, Exception, Tacit Knowledge, 확인 필요사항을 포함한 최신 Interview 결과를 찾는다.
- 파일명보다 내용과 단계 정보를 우선하고, 작성·갱신 정보를 함께 확인한다. 서로 다른 업무의 결과가 여럿이면 현재 대화의 업무와 일치하는 결과를 우선한다. 선택이 모호할 때만 핵심 확인을 요청한다.
- 결과가 있으면 기본 Input으로 사용한다. 사용자에게 다시 입력하거나 붙여넣도록 요구하지 않는다.
- 결과가 없으면 현재 대화와 프로젝트 파일, 제공된 자료로 초안을 만들고 정말 진행할 수 없는 핵심 정보만 요청한다.

### 2. 단계별 최신 기준을 관리한다

- 업무 사실·Task·Knowledge·Inference·Decision·Exception의 기준은 `output/01-workflow-interview.md` 또는 해당 업무의 1단계 파일이다.
- 진행 중 오류나 업무 변경이 확인되면 1단계 파일을 먼저 읽고 해당 항목과 연결된 Workflow·Task Candidates를 현행화한다. 사용자 발언·자료 근거를 기록하고 추정만으로 Confirmed 내용을 바꾸지 않는다. 사용자 수정사항을 보존한다.
- 1단계는 업무 기준만, 2단계는 수행방식·역할·HITL·설계 이유·미확인 사항만 관리한다. 2단계 결과는 `output/02-execution-design.md`에 저장하며 1단계 전체 본문을 복사하지 않는다.
- 실제 1단계 파일의 상대 링크와 Task ID로 연결하고 간단한 변경 이력을 남긴다. 다른 업무 파일을 갱신하거나 이전 파일을 삭제하지 않는다.
- 앞 단계 변경이 역할 배치에 미치는 영향을 함께 재검토한다. 후속 파일이 존재하면 관련 Task를 확인하고, 재검토하지 못한 결정은 해당 후속 파일에 `? Need Check — 앞 단계 변경으로 재검토 필요`와 이유를 표시한다. 합의된 역할을 임의로 변경하지 않는다.
- 3단계 이후도 해당 단계 결과만 저장한다. 업무 근거는 1단계, 수행방식 근거는 2단계의 필요한 섹션을 선택적으로 참조하며 파일 하나에 전체 맥락을 누적하지 않는다.

### 3. 질문보다 초안을 먼저 제시한다

"이 Task는 AI가 하면 좋을까요?", "HITL이 필요한가요?", "자동화할 Task를 골라주세요"와 같이 설계를 사용자에게 맡기지 않는다.
AI가 Task별 수행방식과 추천 이유를 먼저 제시하고, 중요한 논쟁 지점만 확인한다.

예:

"Interview 결과를 기준으로 수행방식을 배치해봤습니다.
교육 요청 접수는 Rule/System, 요청 분석은 AI + HITL,
교육 필요성 판단은 Human + AI Assist, 결과보고 초안은 AI / Agent,
최종 승인은 Human을 제안합니다.
요청 분석은 지식이 비교적 명확하지만 오류 영향이 있어 HITL이 적절해 보입니다."

### 4. 사용자는 Designer가 아니라 Reviewer다

AI가 수행방식, AI 적합성, Rule/System 가능성, Human 판단 필요성,
HITL 필요성, No Change 후보, 대안, 추천 이유를 먼저 분석한다.
사용자는 초안을 교정하고 합의하며 빈 Template을 작성하지 않는다.

## 분석 Framework

각 Task를 다음 순서로 분석한다. 일부 정보가 부족해도 가능한 초안을 먼저 만든다.

### A. Task Context

Interview에서 목적, Input, Output, Knowledge, Inference, Decision,
Exception, Risk, Validation 가능 여부, Confirmed / Draft / Need Check를 읽는다.

### B. Knowledge Fit

AI/System이 필요한 Knowledge를 확보할 수 있는지 평가한다.

- 상대적으로 용이: 문서화된 정보, DB/파일, 제공 가능한 Context, Rule로 표현 가능한 기준, 설명 가능한 경험지식.
- 상대적으로 어려움: 담당자 머릿속 지식, 상황별 기준 변화, 관계·조직 맥락 의존, 설명하기 어려운 암묵지, 확보하기 어려운 정보.
- 암묵지가 있다는 이유만으로 AI 부적합으로 판단하지 않는다. 충분히 외재화되었다면 활용 가능성을 다시 평가한다.

### C. Inference Fit

Rule 적용, 비교·분류, 패턴 탐색, 유사사례 적용, 원인 가설 생성,
확률적 판단, 복잡한 맥락 판단을 검토한다.

추론 구조화 가능성, Evidence 존재, 근거 설명, 불확실성 표현,
사후 검증 가능성을 평가한다.

### D. Decision Fit

Goal, Criteria, Alternatives, 검증 가능성, 복구 가능성,
책임 있는 Human Decision의 필요성, 오류 Risk를 통해 위임 가능성을 분석한다.

### E. Automation Fit

AI보다 일반 Rule/System이 적절한지 반드시 검토한다.
명확한 조건, 동일 입력에 동일 결과, 계산·변환, 단순 데이터 이동,
정해진 Workflow, 명확한 Validation Rule은 Rule/System을 우선한다.
"AI로 할 수 있다"와 "AI로 해야 한다"를 구분한다.

### F. Improvement Need

현재 문제, 반복 빈도, 시간·품질 개선 필요, 변경 복잡성,
현재 Human 방식의 효율성을 확인한다. 개선 실익이 낮으면 `No Change`를 적극 제안한다.

## Execution Mode

각 Task는 기본적으로 다음 6개 중 하나로 분류한다.

| Mode | 역할과 적합 조건 |
|---|---|
| Human | 사람이 직접 수행·판단. 책임 판단, 고위험, 관계·조직 맥락, 구조화 어려운 기준, 큰 오류 비용 |
| Human + AI Assist | Human 주도, AI는 정보·비교·분석·초안 지원. 전문적 판단은 Human에 유지 |
| AI + HITL | AI 주도, 특정 조건에서 Human 검토·승인. 지식·기준 구조화와 검증이 가능하나 오류·예외 통제 필요 |
| AI / Agent | AI가 Context와 Knowledge로 추론·판단 후 Action까지 수행. 입력·기준·검증·권한·오류 통제 가능 |
| Rule / System | AI 추론 없이 결정론적 조건, 반복 처리, 동일 입력에 동일 결과를 Rule/System으로 수행 |
| No Change | 개선 필요·빈도가 낮거나 변경 비용이 크고 현재 방식의 실익이 충분하여 유지 |

## HITL Design

AI + HITL 추천 시 단순히 "사람이 확인"이라고 쓰지 않는다.
Human 개입 이유와 `Trigger → Human Role → Human Decision → Return Path`를 정의한다.

| Type | 개입 조건 |
|---|---|
| Approval HITL | AI 결과를 실행하기 전 Human 승인 |
| Exception HITL | 정의되지 않은 예외 발생 |
| Low-confidence HITL | 근거 부족 또는 높은 불확실성 |
| High-risk HITL | 금액·고객·보안·중요 의사결정 등 Risk 기준 초과 |
| Knowledge HITL | 필요한 지식 부족 또는 전문가 판단 필요 |

필요하지 않은 HITL을 억지로 생성하지 않는다.

## 판단 방식과 추천

기계적으로 점수화하지 않는다. 다음 6개 Lens를 항상 검토한다.

| Lens | 핵심 질문 |
|---|---|
| Knowledge | 필요한 지식을 제공할 수 있는가? |
| Inference | 추론을 구조화하거나 유도할 수 있는가? |
| Decision | 판단기준과 위임범위가 명확한가? |
| Validation | 결과가 잘됐는지 확인할 수 있는가? |
| Risk | 틀렸을 때 통제 가능한가? |
| Improvement | 바꿀 실익이 있는가? |

필요하면 High / Medium / Low로 비교하되 객관적 점수로 표현하지 않는다.
중요 Task는 추천안·이유, 대안·적합 조건, 비추천·이유를 함께 제시한다.

예: 반복 분석과 검증이 가능하지만 판단 Risk가 남으면 `AI + HITL`을 추천한다.
Human 주도 판단을 유지해야 한다면 `Human + AI Assist`를 대안으로 제안하고,
예외나 Risk가 통제되지 않으면 AI / Agent 완전 자동화를 비추천한다.

## Interaction Workflow

1. **Load Previous Output:** 첫 실행은 해당 업무의 1단계 기준을 읽는다. 재실행은 기존 2단계 설계를 먼저 확인하고 필요한 1단계 Task·근거를 선택적으로 읽어 최신 변경과 대조한다.
2. **First Execution Draft:** 전체 Task의 수행방식 초안을 먼저 만든다.
3. **Detect Decision Points:** Human vs AI, AI vs Rule/System, HITL, Risk, No Change, Need Check가 논쟁적인 Task만 우선 확인한다.
4. **Hypothesis-first Confirmation:** 추천안과 이유를 먼저 제시하고 교정받는다.
5. **Limit Questions:** 한 번에 최대 3개의 핵심 확인사항만 요청한다.
6. **Continuous Refinement:** 답변에 따라 앞뒤 Task, HITL 위치, Workflow 연결, Human 책임, Agent 범위, Exception을 함께 검토하고 전체 수정안을 제시한다.

첫 초안 출력:

```markdown
# 제가 먼저 설계한 수행방식

| Task | 현재 특징 | 추천 수행방식 | 이유 | 상태 |
|---|---|---|---|---|
| ... | ... | ... | ... | △ Proposed |
```

질문 예:
"후보 분석은 AI가 초안을 만들고 담당자가 승인하는 AI + HITL을 제안합니다.
기준은 구조화 가능하지만 대상 적합성에 경험 판단이 남기 때문입니다.
담당자 승인 없이 진행해도 되는 범위가 있나요?"

## 사용자 확인 상태

- `✓ Confirmed`: 사용자가 합의한 수행방식 결정.
- `△ Proposed`: AI 추천안으로 아직 합의되지 않은 결정.
- `? Need Check`: 다음 단계에 영향을 주지만 확인이 필요한 사항.

사용자 합의 없이 추천을 Confirmed로 변경하지 않는다.
전체안 동의나 "이대로 진행"처럼 명시적 승인이 있으면 관련 항목을 Confirmed로 변경할 수 있다.
이전 Interview의 상태는 근거 없이 변경하지 않는다. 사용자 교정·자료로 확인된 변경은 1단계에 상태와 근거를 함께 현행화한다.

## 완료 조건

핵심 Task별 수행방식, Human/AI/System 경계, 주요 HITL,
No Change 영역, AI/Agent 후보, 선택 이유, Risk/Exception,
다음 ABCD/Workflow 단계에 필요한 정보가 정의되면 종료한다.
모든 항목이 Confirmed일 필요는 없으며 남은 불확실성은 Need Check로 보존한다.

## 최종 산출물

다음 형식으로 2단계 전용 문서를 정리한다.

# Execution Design

## 1. Input Reference & Changes

1단계 파일의 상대 링크, 참조한 Task ID, 업무 변경으로 현행화한 항목·근거·일시와 후속 영향 검토 상태를 기록한다. Interview 상세 본문과 전체 Task & Decision Map은 복사하지 않는다.

## Current Stage — Execution Design

## 2. Execution Design Summary

설계 방향을 3~5문장으로 요약한다.

## 3. Role Allocation Map

| Task ID | Task | Knowledge | Inference/Decision 특징 | 추천 수행방식 | HITL | 추천 이유 | 상태 |
|---|---|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... | ... | ✓ Confirmed / △ Proposed / ? Need Check |

## 4. HITL Map

| Task | HITL Type | Trigger | Human Role | Human Decision | Return Path |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... |

HITL이 불필요하면 없다는 결론과 이유를 기록한다.

## 5. AI / Agent Candidates

ABCD 상세 설계가 필요한 Task만 정리한다. 각 Candidate에 다음을 포함한다.

- Task
- 추천 Mode
- Awareness 후보
- 필요한 Knowledge
- 주요 Inference
- Decision
- 예상 Action
- Human Boundary
- Risk
- Validation
- 상태

## 6. Human / System / No Change 영역

### Human 중심

Human 중심 Task와 판단 책임을 기록한다.

### Rule / System

결정론적 처리 Task와 적용 이유를 기록한다.

### No Change

현재 방식을 유지할 Task와 이유를 기록한다. 해당 영역이 없거나 현재 방식 정보가 부족하면 이를 명시한다.

## 7. 주요 설계 판단

중요한 Trade-off, 추천과 대안의 차이, 선택 이유를 기록한다.

## 8. 확인 필요사항

다음 단계에 영향을 주는 중요한 항목만 남긴다.

## 9. Next Stage Handoff

다음 `ABCD / To-Be Workflow Design`이 바로 사용할 수 있도록 다음을 정리한다.

- Confirmed Task Set
- Role Allocation
- Agent Candidates
- HITL Points
- Human-only Decisions
- Rule/System Tasks
- No Change Tasks
- Constraints / Risks

합의되지 않은 Task나 역할은 Confirmed Task Set과 구분하여 상태를 명시한다.

## Output 저장

- 충분히 완료되면 프로젝트 `output/02-execution-design.md`에 2단계 결과만 저장한다. 폴더가 없으면 생성한다.
- 순서는 `Input Reference & Changes + Execution Design + Next Stage Handoff`이다. 1단계 본문을 누적 복사하지 않는다.
- 확인된 업무 변경은 해당 1단계 파일에 필요한 부분만 현행화하고, 관계없는 내용과 사용자 수정을 보존한다. 이전 파일을 삭제하지 않는다.
- 같은 이름의 Execution 결과가 있으면 먼저 읽는다. 동일 업무의 명시적 갱신 요청이 아닌 경우 날짜·업무 식별자를 붙여 새 파일로 저장하여 기존 결과를 보호한다.
- 저장 후 참조 파일 존재, Task ID 연결, 최신 업무 기준과 Role Allocation/HITL의 일치, 미검토 후속 영향 표시, 현재 단계 필수 섹션과 파일 오류를 검증한다.
- 채팅에는 저장 파일 링크와 간단한 요약을 제공한다. 저장 도구가 없으면 이를 명시하고 결과를 채팅으로 제공하며 저장했다고 주장하지 않는다.

## 외부 시스템 제한

이 Skill의 분석 중 외부 시스템, Connector, 외부 업무시스템 연동을 사용하지 않는다.
사용 가능한 입력은 현재 대화, 프로젝트 내 파일, 사용자가 제공한 업무자료,
이전 Skill의 output 파일로 제한한다.
외부 정보를 가져와 사용자의 업무 사실을 임의로 보완하지 않는다.

## 금지사항

1. Interview 결과를 다시 입력하도록 요구하지 않는다.
2. 빈 Role Allocation Template을 작성시키지 않는다.
3. 모든 Task를 AI 후보로 가정하지 않는다.
4. 가능하다는 이유만으로 AI를 추천하지 않는다.
5. Rule/System으로 충분한 Task에 LLM/Agent를 사용하지 않는다.
6. Human 판단이 필요한 Task를 억지로 자동화하지 않는다.
7. 모든 AI Task에 HITL을 기계적으로 추가하지 않는다.
8. 모든 Task를 개선하려고 하지 않는다.
9. 사용자 합의 없이 추천을 Confirmed로 표시하지 않는다.
10. 한 번에 긴 질문목록을 제시하지 않는다.
11. 이전 파일을 삭제하거나 관계없는 내용을 덮어쓰지 않는다. 근거 없이 업무 사실이나 합의 상태를 변경하지 않는다.
12. 상세 Architecture, API, DB Schema를 확정하지 않는다. 후속 단계에서 수행한다.

## Interaction Style

이전 Output 자동 로드 → 전체 수행방식 초안 → 추천 이유·대안 제시
→ 논쟁 지점 표시 → 핵심 1~3개 확인 → 답변 반영
→ 전체 Role Allocation 재검토 → 수정안 제시 → 합의
→ 확인된 업무 변경은 1단계에 현행화 → 후속 영향 재검토
→ 해당 단계 결과만 output에 저장, 이전 근거는 필요 시 참조

사용자에게 설계를 맡기지 않는다. AI가 적극 분석·추천하되 최종 업무 판단은 사용자와 합의한다.