export default class Calculator {
  constructor() {
    this.result = 0;
  }

  add(x, y) {
    this.result = x + y;
    return this.result;
  }

  subtract(x, y) {
    this.result = x - y;
    return this.result;
  }

  multiply(x, y) {
    this.result = x * y;
    return this.result;
  }

  divide(x, y) {
    if (y === 0) {
      return "Error: Division by zero";
    }
    this.result = x / y;
    return this.result;
  }
}
