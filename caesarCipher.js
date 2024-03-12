export default function caesarCipher(text, shiftFactor) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const textArray = [];
  const textLower = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(textLower[i])) {
      const index = alphabet.indexOf(textLower[i]);
      textArray.push(alphabet[(index + shiftFactor) % alphabet.length]);
    } else {
      textArray.push(" ");
    }
  }
  return textArray.join("");
}
