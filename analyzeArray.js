export default function analyzeArray(array) {
  const arrayLength = array.length;
  const arraySum = array.reduce((a, b) => a + b);
  const arrayAverage = arraySum / arrayLength;
  const arrayMax = Math.max(...array);
  const arrayMin = Math.min(...array);
  return {
    average: arrayAverage,
    min: arrayMin,
    max: arrayMax,
    length: arrayLength,
  };
}
