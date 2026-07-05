import { morseToLetters } from "../data/morseToLetters.js";

export default function morseToLettersFn(str) {
  const morseArr = str.split(" ");
  return morseArr
    .map((morse) => {
      return morseToLetters[morse] ?? "#";
    })
    .join("");
}
