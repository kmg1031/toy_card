# AGENTS.md

## 프로젝트 개요
- **프로젝트명**: Hearthstone Clone
- **목표**: HTML, CSS, JS만으로 하스스톤의 핵심 턴제 카드 배틀 시스템을 구현

---

## 주요 에이전트 및 함수 목록

### 1. GameEngine Agent
**역할**: 게임의 흐름과 승패 판정 관리

- `startGame()` : 게임 초기화 및 시작
- `endTurn()` : 턴 종료 후 상대 턴으로 전환
- `checkWinner()` : 승패 조건 확인

---

### 2. CardSystem Agent
**역할**: 카드 생성, 드로우, 사용 처리

- `createCard(data)` : 카드 객체 생성
- `drawCard(player)` : 플레이어가 덱에서 카드 드로우
- `playCard(player, cardId)` : 핸드에서 카드 사용 → 마나 차감 후 보드 소환
- `removeCardFromHand(player, cardId)` : 핸드에서 카드 제거

---

### 3. BoardSystem Agent
**역할**: 보드 위 하수인 전투 및 관리

- `summonMinion(player, card)` : 보드에 하수인 소환
- `attack(attacker, defender)` : 공격자와 수비자 전투 처리
- `removeDeadMinions()` : 체력 0 이하 하수인 제거

---

### 4. Player Agent
**역할**: 플레이어 상태 및 자원 관리

- `initPlayer(name)` : 플레이어 초기화
- `gainMana(player)` : 턴 시작 시 마나 증가
- `takeDamage(player, amount)` : 영웅 피해 처리

---

### 5. UISystem Agent
**역할**: 화면 렌더링 및 이벤트 처리

- `renderBoard()` : 보드 UI 업데이트
- `renderHand(player)` : 핸드 UI 업데이트
- `renderMana(player)` : 마나 UI 업데이트
- `bindEvents()` : 카드 클릭, 공격 선택, 턴 종료 버튼 이벤트 바인딩
- `showWinner(winner)` : 승리/패배 알림 표시

---

## 데이터 모델 예시

### 카드(Card)

```json
{
  "id": "c001",
  "name": "River Crocolisk",
  "cost": 2,
  "attack": 2,
  "health": 3,
  "type": "minion",
  "effect": null
}

### 플레이어(Player)
{
  "name": "Player1",
  "hp": 30,
  "mana": {
    "current": 1,
    "max": 1
  },
  "deck": ["c001", "c002", "c003"],
  "hand": [],
  "board": []
}

### UI 레이아웃 설계
-------------------------------
|        상대 보드 영역        |
| [Minion][Minion][Minion]    |
|                             |
|-----------------------------|
|        상대 영웅 HP         |
|-----------------------------|
|          보드 라인          |
| [Minion][Minion]            |
|-----------------------------|
|        내 핸드 영역         |
| [Card][Card][Card][Card]    |
|                             |
|   내 영웅 HP   [END TURN]   |
|   마나 표시 (x/10)          |
-------------------------------


단계별 개발 순서
프로젝트 기본 세팅

HTML, CSS, JS 파일 구조 설계

데이터 모델 정의

카드 JSON

플레이어 상태 JSON

Player Agent 구현

initPlayer, gainMana, takeDamage

CardSystem Agent 구현

createCard, drawCard, playCard, removeCardFromHand

GameEngine Agent 구현

startGame, endTurn, checkWinner

BoardSystem Agent 구현

summonMinion, attack, removeDeadMinions

UISystem Agent 구현

renderBoard, renderHand, renderMana, bindEvents, showWinner

턴 전환 로직 통합

내 턴 → 상대 AI 턴 → 내 턴

상대 AI 간단 로직 추가

랜덤 카드 플레이, 무작위 공격

테스트 & 디버깅

각 기능 독립 테스트 후 통합

추후 확장

주문 카드

영웅 능력

카드 효과 (배틀크라이, 죽음의 메아리 등)


기타
CSS 애니메이션, 카드 이미지, 효과음 등은 MVP 이후 구현

최소 목표는 하수인 카드 소환과 공격 기능 완성
