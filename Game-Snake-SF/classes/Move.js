import Field from "./Field.js";
import Snake from "./Snake.js";
import Food from "./Food.js";
import InputScores from "./InputScores.js";
import Button from "./Button.js";

export default class Move {
  constructor() {
    this.inputScores = new InputScores();
    this.drawField = new Field();

    this.draw = () => {
      this.drawFood = new Food();
      this.snake = new Snake();
      this.drawField.field.removeEventListener('click', this.draw);
    };
    this.drawField.field.addEventListener('click', this.draw);
    this.currentHigh = localStorage.getItem("highScore");
    this.direction = 'right';
    this.steps = false;

    this.move = () => {
      const gameOver = document.querySelector('.game-over');
      if (this.snake) {
        this.snakePosition = [this.snake.snakeTail[0].getAttribute('posX'), this.snake.snakeTail[0].getAttribute('posY')];
        this.snake.snakeTail[0].classList.remove('head');
        this.snake.snakeTail[this.snake.snakeTail.length - 1].classList.remove('snakeTail');
        this.snake.snakeTail.pop();

        if (this.direction === 'right') {
          if (this.snakePosition[0] < 10) {
            this.snake.snakeTail.unshift(document.querySelector('[posX = "' + (+this.snakePosition[0] + 1) + '"][posY = "' + this.snakePosition[1] + '"]'));
          } else {
            this.snake.snakeTail.unshift(document.querySelector('[posX = "1"][posY = "' + this.snakePosition[1] + '"]'));
          }
        } else if (this.direction === 'left') {
          if (this.snakePosition[0] > 1) {
            this.snake.snakeTail.unshift(document.querySelector('[posX = "' + (+this.snakePosition[0] - 1) + '"][posY = "' + this.snakePosition[1] + '"]'));
          } else {
            this.snake.snakeTail.unshift(document.querySelector('[posX = "10"][posY = "' + this.snakePosition[1] + '"]'));
          }
        } else if (this.direction === 'up') {
          if (this.snakePosition[1] < 10) {
            this.snake.snakeTail.unshift(document.querySelector('[posX = "' + this.snakePosition[0] + '"][posY = "' + (+this.snakePosition[1] + 1) + '"]'));
          } else {
            this.snake.snakeTail.unshift(document.querySelector('[posX = "' + this.snakePosition[0] + '"][posY = "1"]'));
          }
        } else if (this.direction === 'down') {
          if (this.snakePosition[1] > 1) {
            this.snake.snakeTail.unshift(document.querySelector('[posX = "' + this.snakePosition[0] + '"][posY = "' + (this.snakePosition[1] - 1) + '"]'));
          } else {
            this.snake.snakeTail.unshift(document.querySelector('[posX = "' + this.snakePosition[0] + '"][posY = "10"]'));
          }
        }

        if (this.snake.snakeTail[0].getAttribute('posX') === this.drawFood.food.getAttribute('posX') && this.snake.snakeTail[0].getAttribute('posY') == this.drawFood.food.getAttribute('posY')) {
          this.drawFood.food.classList.remove('food');
          let x = this.snake.snakeTail[this.snake.snakeTail.length - 1].getAttribute('posX');
          console.log(x);
          let y = this.snake.snakeTail[this.snake.snakeTail.length - 1].getAttribute('posY');
          console.log(y);
          this.snake.snakeTail.push(document.querySelector('[posX = "' + x + '"][posY = "' + y + '"]'));
          this.drawFood.makeFood();
          this.inputScores.score++;
          this.inputScores.inputCurrent.value = `Score: ${this.inputScores.score}`;
        }

        if (this.snake.snakeTail[0].classList.contains('snakeTail')) {
          if (this.inputScores.score > this.currentHigh) {
            localStorage.setItem('highScore', this.inputScores.score);
            this.currentHigh = localStorage.getItem('highScore');
            this.inputScores.inputHigh.value = `High Score: ${this.currentHigh}`;
          }

          setTimeout(() => {
            this.restartButton = new Button();
            this.restartButton.button.addEventListener('click', () => {
              this.restartButton.button.remove();
            });

          }, 400);

          clearInterval(this.interval);
          this.snake.snakeTail[0].style.background = 'orange';
          gameOver.classList.add('active');
          console.log('Game Over');
        }

        this.snake.snakeTail[0].classList.add('head');
        for (let i = 0; i < this.snake.snakeTail.length; i++) {
          this.snake.snakeTail[i].classList.add('snakeTail');
        }

        this.steps = true;
      }
    }

    this.interval = setInterval(this.move, 450);
  }
}