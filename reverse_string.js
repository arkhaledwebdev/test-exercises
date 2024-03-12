export default function reverseString(text) {
  const textArray = [];
  for (let i = text.length - 1; i >= 0; i--) {
    textArray.push(text[i]);
  }
  return textArray.join("");
}
