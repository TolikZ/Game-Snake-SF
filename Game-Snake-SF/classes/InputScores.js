export default class InputScores {
  constructor() {
    this.createInputs();
  }

  createInputs() {
    const container = document.querySelector('.app');
    this.inputCurrent = document.createElement('input');
    container.appendChild(this.inputCurrent);
    this.inputCurrent.classList.add('score');
    this.score = 0;
    this.inputCurrent.value = `Score: ${this.score}`;

    this.inputHigh = document.createElement('input');
    container.appendChild(this.inputHigh);
    this.inputHigh.classList.add('high-score');
  }

  resetInputs() {
    this.inputCurrent.parentNode.removeChild(this.inputCurrent);
    this.inputHigh.parentNode.removeChild(this.inputHigh);

    const current = document.querySelector('.score');
    const high = document.querySelector('.high-score');
    current.parentNode.removeChild(current);
    high.parentNode.removeChild(high);
  }
}