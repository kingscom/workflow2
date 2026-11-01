---
name: abcd-design
description: '이전 Workflow Interview 및 Execution Design 결과를 기반으로 AI/Agent 또는 AI+HITL 대상으로 선정된 Task를 Awareness, Brain, Conduct, Derived Value 구조로 상세 설계하는 Skill. AI가 필요한 이전 output만 읽어 전체 초안을 먼저 생성하고 사용자와 교정·합의한다. 업무 이해나 Role Allocation 문제가 발견되면 Back Loop로 관련 1·2단계 파일을 현행화하고 후속 영향을 재검토한다. 3단계 결과만 output/03-abcd-design.md에 저장한다.'
---

# ABCD Design

## 목적

이전 단계에서 AI/Agent 적용 대상으로 선정된 Task를 실제 Agent 설계가 가능한 수준으로 구조화한다.

`Awareness → Brain → Conduct → Derived Value`

Brain은 이전 단계의 `Knowledge → Inference → Decision`을 계승한다.
새로운 Agent 아이디어를 만드는 단계가 아니다. 합의된 업무와 Execution Design을 바탕으로
Agent가 무엇을 보고, 알고, 추론·판단하고, 실행하며, 어떤 결과를 만들어야 하는지 구체화한다.

## 핵심 원칙

### 1. 사용자에게 다시 입력시키지 않는다

- 시작 시 `output/` 폴더를 확인한다. 2단계 Execution Design을 우선 읽고 필요할 때만 1단계 Workflow Interview를 참조한다.
- 기본 경로는 `output/02-execution-design.md`, `output/01-workflow-interview.md`이다. 다른 파일명도 내용·업무·단계·갱신 정보를 확인하여 선택한다.
- Agent 후보, Knowledge, Workflow를 다시 입력하거나 빈 ABCD Template을 작성하도록 요구하지 않는다.
- 입력이 없으면 현재 대화와 프로젝트 자료로 가능한 초안을 제시하고 진행에 꼭 필요한 정보만 질문한다.

### 2. 필요한 Output만 참조한다

Execution Design의 Agent Candidates, Task, Role Allocation, HITL,
Knowledge, Inference, Decision, Input/Output, Risk, Validation, Constraint를 우선 읽는다.
부족하거나 모순되는 경우에만 관련 Task ID의 Interview 섹션을 추가로 읽는다.

`02 Execution Design → 부족/모순 발견 → 관련 01 Workflow Interview 참조`

매번 이전 output 전체를 읽거나 현재 결과에 복사하지 않는다.
재실행 시 기존 3단계 결과와 참조·변경 이력을 확인하고 필요한 앞 단계 근거만 대조한다.

### 3. 전체 초안을 먼저 만든다

AI가 A/B/C/D 전체 Draft, Boundary, 발견한 문제를 먼저 제시한다.
사용자는 검토·교정·합의하며 A/B/C/D를 하나씩 작성하지 않는다.
불확실한 기준이나 필요한 추가 지식은 명시하고 핵심 확인은 한 번에 최대 3개로 제한한다.

## ABCD Framework

### A. Awareness — 무엇을 보고 언제 움직이는가?

단순 Input 목록이 아닌 업무 상황 인식 구조를 정의한다.

- **Trigger:** 요청 접수, 파일 생성, 상태 변경, 사용자 요청, 조건 충족 등 시작 계기.
- **Input:** 문서, 텍스트, 데이터, 이전 Task Output, 사용자 요청.
- **Context:** 업무 목적, 사용자 역할, 처리 이력, 조직 맥락, 정책·기준.
- **State:** 신규, 분석중, 추가정보 필요, Human Review, 완료, 예외 등.
- **Exception / Missing Context:** 누락·손상된 입력이나 해석에 필요한 맥락 부족.

### B. Brain — 무엇을 알고 어떻게 추론하여 결정하는가?

`Knowledge → Inference → Decision` 구조를 반드시 유지한다.

#### Knowledge

- **정보지식:** 문서, Data, 사실, 기록, 정책.
- **경험지식:** 사례, 노하우, Cue, Tacit Knowledge.
- **논리지식:** Rule, Principle, Constraint, Criteria.

이전 Interview의 지식과 상태를 계승한다. 새로운 업무 지식이나 Rule을 임의로 만들지 않는다.
추가로 필요하다고 판단한 지식은 `△ Required Knowledge`로 표시하고 실제 확보 여부를 구분한다.

#### Inference

Input과 Knowledge에서 Decision까지 필요한 사고를 정의하고 이전 단계의 Inference를 계승한다.
필요하면 연역, 귀납, 가추, 유추, 통계·확률 추론으로 구조화하되 억지로 유형을 붙이지 않는다.
중요한 것은 명칭보다 필요한 근거, 추론 과정, 불확실성, 검증 가능성이다.

#### Decision

대상, Goal, Criteria, 가능한 결과, Confidence/Uncertainty,
Exception, Human Escalation 조건을 명확히 한다.
Recommend / Review Required / Reject 또는 정상 / 추가검토 / 예외처럼
명확한 상태를 사용할 수 있으나 이전 업무의 전체 저장 정책 등에 맞지 않는 제외·승인 조건을 임의로 추가하지 않는다.

### C. Conduct — 판단 후 무엇을 수행하는가?

- **Action:** Decision 이후 실제 수행하는 일.
- **Tool / Capability:** 필요한 기능. 실제 API나 상세 Architecture는 확정하지 않는다.
- **External/System Action:** 결과 등록·저장 등 필요한 시스템 작업을 기능 수준으로만 기록한다. 실제 Integration 가능성은 후속 Architecture 단계에서 검토한다.
- **Authority:** 조회, 초안 생성, 저장, 승인 후 실행, 자동 실행 등 위임 범위.
- **HITL:** Execution Design에서 정의한 것을 계승하고 `Trigger → Human Role → Human Decision → Return Path`로 구체화한다. 불필요한 HITL은 생성하지 않는다.

### D. Derived Value — 어떤 결과가 나와야 하는가?

ROI나 사업성과를 정교하게 계산하지 않는다. 제대로 수행되었을 때의 업무 결과를 정의한다.
검토 가능한 결과, 판단 근거, 누락 없는 출력, 정해진 형식,
Human이 최종 판단할 정보 등 Acceptance Criteria로 전환 가능한 표현을 쓴다.
"업무 생산성 혁신" 같은 추상적인 성과 문구로 채우지 않는다.

## Agent Boundary

Agent가 하는 것, Human이 하는 것, Rule/System이 하는 것,
Agent가 하지 않는 것을 구분한다. Scope 확장을 막기 위해 Out of Scope를 반드시 명시한다.

## Back Loop

이전 결과를 절대적 사실로 취급하거나 이전 오류를 ABCD 안에서 억지로 해결하지 않는다.

문제 발견 → 원인 단계 판단 → 관련 Output 참조 → 수정 초안
→ 필요 시 사용자 확인 → 해당 단계 현행화 → 후속 영향 재검토 → ABCD 재개

### Level 1: Execution Design으로 복귀

다음 경우 수행방식을 재검토한다.

- AI/Agent보다 Rule/System 또는 Human + AI Assist가 적절함.
- AI 단독보다 HITL이 필요하거나 권한이 과도함.
- Risk가 예상보다 크거나 Validation이 불가능함.
- Agent 적용 실익이 없음.

예: Decision이 명확한 Rule로 결정되고 AI Inference가 불필요하면
AI / Agent → Rule / System 수정안을 먼저 제시한다.

### Level 2: Workflow Interview로 복귀

다음 경우 업무 이해를 재검토한다.

- Task 정의가 잘못되었거나 너무 크고 여러 판단이 섞임.
- Knowledge가 실제 업무와 맞지 않음.
- Inference·Decision이 담당자의 실제 판단과 다름.
- Tacit Knowledge·Exception 누락.
- Input/Output 관계가 잘못됨.

예: 한 적합성 Task에 기술·대상자·운영 가능성 판단이 혼재하면 Task 분리안을 먼저 제시하고 역할 배치 영향을 검토한다.

### Back Loop 운영 원칙

- 처음부터 다시 인터뷰하지 않는다. 문제 설명, 관련 근거, 수정 초안, 영향범위를 먼저 제시하고 핵심 1~3개만 확인한다.
- 수정이 사용자와 합의되면 업무 내용은 1단계, 수행방식·역할은 2단계의 필요한 부분만 현행화한다. 사용자 수정사항과 관계없는 내용을 보존한다.
- AI 추정을 사용자 업무 사실이나 합의된 역할로 확정하지 않는다. Task ID를 유지하고 분리·통합 시 이전 ID와 새 ID의 관계를 기록한다.
- 각 수정 파일에 간단한 변경 이력을 남기고 3단계 Back Loop Log에도 문제·수정·영향을 기록한다.
- 후속 파일이 있으면 영향받는 결정을 재검토한다. 재검토하지 못한 항목은 해당 후속 파일에 `? Need Check — 앞 단계 변경으로 재검토 필요`와 이유를 표시한다.
- 이전 단계 수정 → 후속 영향 재검토 → ABCD 재계산 → 3단계 output 갱신 순서를 따른다.

## Interaction Workflow

1. **Load Execution Design:** 2단계에서 AI / Agent 및 AI + HITL 후보와 합의 상태를 식별한다.
2. **Load Necessary Interview Context:** 지식·추론·판단이 부족하거나 모순될 때만 해당 1단계 Task를 읽는다.
3. **Select ABCD Target:** AI / Agent, AI + HITL을 우선한다. Human + AI Assist는 독립 Agent 설계가 필요한 경우에만 포함한다. Human, Rule/System, No Change는 원칙적으로 제외한다.
4. **Generate Full Draft First:** Candidate마다 전체 ABCD 초안을 생성한다.
5. **Self-review:** Awareness 충분성, Knowledge 존재, Inference 설명 가능성, Decision 기준, Conduct 권한, HITL 필요성, Derived Value 검증 가능성, Boundary를 검토한다.
6. **Detect Back Loop:** 내부 설계 문제는 3단계에서, 수행방식 문제는 2단계에서, 업무 이해 문제는 1단계에서 수정한다.
7. **Present Draft + Issues:** ABCD 초안 → 발견 문제 → 필요 시 앞 단계 수정안 → 핵심 확인 최대 3개 순서로 제시한다.
8. **Continuous Refinement:** 답변에 따라 ABCD, Boundary, HITL, 앞 단계·다른 Task 영향을 함께 검토하고 전체 정합성을 확인한다.

## 상태 관리

- `✓ Confirmed`: 사용자와 합의되거나 근거로 확인된 해당 항목. 설계 위임·권한은 명시적 사용자 합의가 필요하다.
- `△ Proposed`: AI가 제안한 미합의 설계. 2단계 후보가 Proposed이면 조건부 Draft로 설계할 수 있지만 합의된 Agent 대상이라고 쓰지 않는다.
- `? Need Check`: 다음 단계에 영향을 주는 미확인 사항.
- `⚠ Recheck`: 새로운 근거로 앞 단계 Confirmed 항목에 모순이 발견된 임시 상태. 기존 합의와 근거를 남기고 관련 파일에 재검토 이유를 표시하여 Back Loop한다.

Recheck는 새로운 결론의 확정이 아니다. 수정 합의 후 관련 상태를 갱신한다.

## 완료 조건

Agent Target, Awareness, Knowledge, Inference, Decision, Conduct,
Authority, HITL, Derived Value, Human/Agent/System Boundary,
주요 Exception·Risk와 이전 단계 정합성이 충분히 정의되면 완료한다.
미확인 항목은 명시적으로 남기며 끝없는 인터뷰를 하지 않는다.
대상이 모두 Human/System으로 바뀌면 Agent 없음이라는 결과와 Back Loop 근거를 기록한다.

## 최종 산출물

각 Candidate는 다음 11개 섹션을 사용한다. 이전 상세 내용은 복사하지 않고 실제 파일의 상대 링크와 Task ID로 참조한다.

# ABCD Agent Design

## 1. Design Context

- Target Workflow:
- Target Task / Task ID:
- Execution Mode:
- Design Status:
- Input References:

## 2. A. Awareness

### Trigger
### Input
### Context
### State
### Exception / Missing Context

## 3. B. Brain

### Knowledge
#### 정보지식
#### 경험지식
#### 논리지식
#### Required / Missing Knowledge

### Inference

### Decision

- Goal:
- Criteria:
- Possible Decisions:
- Uncertainty:
- Escalation Condition:

## 4. C. Conduct

### Action
### Required Tool / Capability
### Authority
### HITL

- Type:
- Trigger:
- Human Role:
- Human Decision:
- Return Path:

HITL이 없다면 없음과 이유를 기록한다.

## 5. D. Derived Value

### Expected Outcome
### Expected Output
### Quality Expectation

## 6. Agent Boundary

### Agent
### Human
### Rule/System
### Out of Scope

## 7. Key Exceptions & Risks

| Situation | Expected Handling | Owner |
|---|---|---|
| ... | ... | Agent/Human/System |

## 8. ABCD Summary

`[Trigger/Input] → [Knowledge] → [Inference] → [Decision] → [Action] → [Human/System] → [Expected Output]`

## 9. Back Loop Log

수정이 없으면 `No Back Loop`를 기록한다. 수정이 있으면 중요한 변경만 기록한다.

| Back To | 발견 문제 | 수정 내용 | 현재 설계 영향 |
|---|---|---|---|
| Interview / Execution | ... | ... | ... |

## 10. Open Issues

다음 단계에 실제 영향을 주는 항목만 남긴다.

## 11. Next Stage Handoff

다음 `To-Be Workflow Design`에 필요한 정보만 정리한다.

### Agent Tasks
### Trigger / Input
### Knowledge
### Inference
### Decision
### Action / Output
### HITL
### Human Boundary
### System Boundary
### Exceptions
### Constraints

## 여러 Agent Candidate

Candidate별로 ABCD를 별도 작성하되 불필요하게 많은 Agent로 쪼개지 않는다.
Context/State/Goal을 공유하며 연속 수행되는 Task는 묶을 수 있는지 먼저 검토한다.
서로 다른 Goal/Decision이 과도하게 섞이면 분리를 제안하고 영향받는 1·2단계 ID 연결을 갱신한다.

## Output 저장 및 검증

- 완료 후 현재 단계 결과만 `output/03-abcd-design.md`에 저장한다. 폴더가 없으면 생성한다.
- 이전 1·2단계 전체 본문을 복사하지 않는다. 필요한 근거는 참조 링크와 Task ID로 연결한다.
- 기본 파일은 위 11개 섹션을 사용한다. 여러 Candidate는 식별 가능한 별도 ABCD 묶음으로 작성한다.
- 파일이 있으면 먼저 읽고 같은 업무의 갱신 시 사용자 수정을 보존한다. 다른 업무 파일과 겹치면 `03-abcd-design-<업무-slug>.md` 등 식별자를 사용해 별도 저장한다.
- Back Loop 합의사항은 해당 1·2단계 원본에 현행화하고 3단계 결과를 재검토하여 저장한다.
- 저장 후 참조 파일 존재, Task ID 연결, Brain의 Knowledge/Inference/Decision, 권한과 역할 일치, Back Loop 상태, 필수 섹션과 파일 오류를 검증한다.
- 채팅에는 결과 파일 링크와 핵심 변경을 안내한다. 저장 도구가 없으면 전체 결과를 채팅으로 제공하고 저장 불가를 명시한다.

## 외부 시스템 제한

이 Skill 실행 중 외부 시스템 및 Connector를 사용하지 않는다.
현재 대화, 프로젝트 파일, 사용자 제공 업무자료, 이전 output만 사용한다.
외부 자료로 사용자의 업무 Rule이나 시스템 환경을 임의로 만들어내지 않는다.
설계에 필요한 시스템 기능의 기록과 실제 외부 연동 실행은 구분한다.

## 금지사항

1. 사용자에게 ABCD Template을 작성시키지 않는다.
2. 이전 단계 내용을 다시 입력하도록 요구하지 않는다.
3. A/B/C/D를 하나씩 질문하며 처음부터 채우지 않는다.
4. Execution Design을 무조건 정답으로 취급하지 않는다.
5. Interview를 무조건 정답으로 취급하지 않는다.
6. 이전 오류를 발견하고도 ABCD 안에서 억지로 해결하지 않는다.
7. AI/Agent 후보라는 이유만으로 Agent 설계를 유지하지 않는다.
8. Knowledge가 없는 상태에서 임의의 업무 Rule을 만들지 않는다.
9. 상세 API/DB/Architecture를 이 단계에서 확정하지 않는다.
10. 모든 Agent에 HITL을 넣지 않는다.
11. Derived Value를 추상적인 ROI 문구로 채우지 않는다.
12. 모든 확인사항을 한꺼번에 질문하지 않는다.
13. 이전 output 전체를 현재 output에 중복 복사하지 않는다.

## Interaction Style

이전 Output 선택 참조 → 전체 ABCD 초안 → 자체 정합성 검토
→ 이전 문제 탐지 → 필요 시 Back Loop·수정안 → 핵심 1~3개 확인
→ 전체 재검토 → 수정 ABCD 제시 → 충분하면 완료 → 03 Output 저장

AI가 먼저 설계하고 사용자는 검토·교정·합의한다.
목표는 단계를 통과하는 것이 아니라 전체 Workflow Design의 정합성을 높이는 것이다.