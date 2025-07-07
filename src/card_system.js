export function createCard(data) {
  return { ...data };
}

export function drawCard(player) {
  const card = player.deck.shift();
  if (card) {
    player.hand.push(card);
  }
  return card;
}

export function removeCardFromHand(player, cardId) {
  const idx = player.hand.findIndex(c => c.id === cardId);
  if (idx !== -1) {
    return player.hand.splice(idx, 1)[0];
  }
}

export function playCard(player, cardId) {
  const card = removeCardFromHand(player, cardId);
  if (card && player.mana.current >= card.cost) {
    player.mana.current -= card.cost;
    player.board.push({ ...card });
    return card;
  }
  if (card) player.hand.push(card); // refund
}
