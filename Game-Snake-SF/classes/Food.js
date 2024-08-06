export default class Food {
  constructor() {
    this.food;

    this.makeFood = () => {
      const generateFood = () => {
        let posX;
        let posY;
        return [
          posX = Math.floor(Math.random() * (10 - 1) + 1),
          posY = Math.floor(Math.random() * (10 - 1) + 1)
        ];
      }

      this.foodPosition = generateFood();
      console.log(this.foodPosition);
      this.food = document.querySelector('[posX = "' + this.foodPosition[0] + '"][posY = "' + this.foodPosition[1] + '"]');

      while (this.food.classList.contains('snakeTail')) {
        this.foodPosition = generateFood();
        this.food.classList.remove('food');
        this.food = document.querySelector('[posX = "' + this.foodPosition[0] + '"][posY = "' + this.foodPosition[1] + '"]');
        console.log(this.food);
      }

      this.food.classList.add('food');
    }

    this.makeFood();
  }
}