import Calculator from "./calculator";

const calculator = new Calculator();

test("add", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtract", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test("multiply", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("divide", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("divide by zero", () => {
  expect(calculator.divide(4, 0)).toBe("Error: Division by zero");
});
