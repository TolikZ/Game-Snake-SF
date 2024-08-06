export default class Snake {
  constructor() {

    this.generateSnake = () => {
      this.posX = 5;
      this.posY = 5;
      return [this.posX, this.posY];
    }

    this.position = this.generateSnake();
    this.snakeTail = [document.querySelector('[posX = "' + this.position[0] + '"][posY = "' + this.position[1] + '"]'),
    document.querySelector('[posX = "' + (this.position[0] - 1) + '"][posY = "' + this.position[1] + '"]')
    ];

    for (let i = 0; i < this.snakeTail.length; i++) {
      this.snakeTail[i].classList.add('snakeTail');
    }

    this.snakeTail[0].classList.add('head');
  }
}