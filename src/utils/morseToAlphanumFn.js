import { morseToLetters } from "../data/morseToAlphanum.js";

export default function morseToAlphanumFn(str) {
  const morseArr = str.split(" ");
  return morseArr
    .map((morse) => {
      return morseToLetters[morse] ?? "#";
    })
    .join("");
}
