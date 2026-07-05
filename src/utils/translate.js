import lettersToMorseFn from "./lettersToMorseFn.js";
import morseToLettersFn from "./morseToLettersFn.js";

export default function translate(str, setOutput, setInput) {
  setOutput("");
  setInput(str);
  //auto detection conditional with regex
  if (/^[.-]/.test(str)) {
    setOutput(morseToLettersFn(str));
  } else {
    setOutput(lettersToMorseFn(str));
  }
}
