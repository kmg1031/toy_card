export function renderBoard(element, players) {
  element.innerHTML = players.map(p => `
    <div class="player">
      <h3>${p.name} (HP: ${p.hp}, Mana: ${p.mana.current}/${p.mana.max})</h3>
      <div class="board">${p.board.map(card => `<span>${card.name} (${card.attack}/${card.health})</span>`).join(' ')}</div>
      <div class="hand">${p.hand.map(card => `<button data-owner="${p.name}" data-id="${card.id}">${card.name} [${card.cost}]</button>`).join(' ')}</div>
    </div>
  `).join('<hr/>');
}

export function bindEvents(element, onPlay) {
  element.addEventListener('click', e => {
    const btn = e.target.closest('button[data-id]');
    if (!btn) return;
    const id = btn.getAttribute('data-id');
    const owner = btn.getAttribute('data-owner');
    onPlay(owner, id);
  });
}

export function showWinner(winner) {
  alert(`${winner.name} wins!`);
}
