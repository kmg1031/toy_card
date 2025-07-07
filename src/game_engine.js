import { gainMana } from './player.js';

export class GameEngine {
  constructor(players) {
    this.players = players;
    this.current = 0;
  }

  startGame() {
    this.players.forEach(p => gainMana(p));
  }

  endTurn() {
    this.current = (this.current + 1) % this.players.length;
    gainMana(this.players[this.current]);
  }

  checkWinner() {
    return this.players.find(p => p.hp <= 0) || null;
  }
}
