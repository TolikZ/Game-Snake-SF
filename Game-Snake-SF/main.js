import Move from "./classes/Move.js";

export default class Game {
  constructor() {
    this.moveSnake = new Move();
    const check = localStorage.getItem("highScore");
    if (check === null) {
      this.moveSnake.inputScores.inputHigh.value = `High Score:`;
    } else {
      this.moveSnake.inputScores.inputHigh.value = `High Score: ${localStorage.getItem("highScore")}`;
    }

    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown(e) {
    if (this.moveSnake.steps === true) {
      if ((e.keyCode === 37 || e.keyCode === 65) && this.moveSnake.direction !== "right") {
        this.moveSnake.direction = "left";
        this.moveSnake.steps = false;
      } else if ((e.keyCode === 38 || e.keyCode === 87) && this.moveSnake.direction !== "down") {
        this.moveSnake.direction = "up";
        this.moveSnake.steps = false;
      } else if ((e.keyCode === 39 || e.keyCode === 68) && this.moveSnake.direction !== "left") {
        this.moveSnake.direction = "right";
        this.moveSnake.steps = false;
      } else if ((e.keyCode === 40 || e.keyCode === 83) && this.moveSnake.direction !== "up") {
        this.moveSnake.direction = "down";
        this.moveSnake.steps = false;
      }
    }
  }
}

const game = new Game();