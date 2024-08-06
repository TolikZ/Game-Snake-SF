export default class Field {
  constructor() {
    this.createField();
  }

  createField() {
    const container = document.querySelector('.app');
    this.field = document.createElement('div');
    container.appendChild(this.field);
    this.field.classList.add('field');

    for (let i = 1; i < 101; i++) {
      let cell = document.createElement('div');
      this.field.appendChild(cell);
      cell.classList.add('cell');
    }

    this.cell = document.getElementsByClassName('cell');

    this.x = 1;
    this.y = 10;

    for (let i = 0; i < this.cell.length; i++) {
      if (this.x > 10) {
        this.x = 1;
        this.y--;
      }
      this.cell[i].setAttribute('posX', this.x);
      this.cell[i].setAttribute('posY', this.y);
      this.x++;
    }
  }

  clearField() {
    this.field.parentNode.removeChild(this.field);
  }
}