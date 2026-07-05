import { lettersToMorse } from "../data/alphanumToMorse";

export default function alphanumToMorseFn(str) {
  const lettersArr = str.toUpperCase().split("");
  return lettersArr
    .map((letter) => {
      return lettersToMorse[letter] ?? "#";
    }) // at this point still an array "hey" -> ["....", ".", "-.--"]
    .join(" "); // morse separates letters with space
}
