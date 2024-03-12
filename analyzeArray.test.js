import analyzeArray from "./analyzeArray";

test("analyze array of [1,2,3,4,5,6]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6])).toStrictEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6,
  });
});

test("analyze array of [1,2,3,4,5,6,7,8,9,10]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual({
    average: 5.5,
    min: 1,
    max: 10,
    length: 10,
  });
});
