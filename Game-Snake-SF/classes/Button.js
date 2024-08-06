import InputScores from "./InputScores.js";
import Game from "../main.js";

export default class Button {

  constructor() {
    const container = document.querySelector('.app');
    this.button = document.createElement('button');
    this.button.innerHTML = 'New Game';
    container.appendChild(this.button);
    this.button.addEventListener('click', () => {
      this.restartGame();
    });
  }

  restartGame() {
    const gameOver = document.querySelector('.game-over');
    const field = document.querySelector('.field');
    field.parentNode.removeChild(field);

    const inputScores = new InputScores();
    inputScores.resetInputs();

    gameOver.classList.remove('active');

    const game = new Game();
    game.handleKeyDown();
  }
}