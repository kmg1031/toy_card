export function initPlayer(name, deck = []) {
  return {
    name,
    hp: 30,
    mana: { current: 0, max: 0 },
    deck: [...deck],
    hand: [],
    board: []
  };
}

export function gainMana(player) {
  if (player.mana.max < 10) player.mana.max += 1;
  player.mana.current = player.mana.max;
}

export function takeDamage(player, amount) {
  player.hp -= amount;
  if (player.hp < 0) player.hp = 0;
}
