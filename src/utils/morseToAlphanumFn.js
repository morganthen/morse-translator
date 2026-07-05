import { morseToLetters } from "../data/morseToAlphanum.js";

export default function morseToAlphanumFn(str) {
  if (str.length === 0) return "";
  const morseArr = str.trim().split(" ");
  return morseArr
    .map((morse) => {
      return morseToLetters[morse] ?? "#";
    })
    .join("");
}
