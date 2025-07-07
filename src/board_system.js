export function summonMinion(player, card) {
  player.board.push({ ...card });
}

export function attack(attacker, defender) {
  defender.health -= attacker.attack;
  attacker.health -= defender.attack;
}

export function removeDeadMinions(board) {
  for (let i = board.length - 1; i >= 0; i--) {
    if (board[i].health <= 0) {
      board.splice(i, 1);
    }
  }
}
