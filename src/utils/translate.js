import alphanumToMorseFn from "./alphanumToMorseFn.js";
import morseToAlphanumFn from "./morseToAlphanumFn.js";

export default function translate(str, setOutput, setInput) {
  const trimmed = str.trim();
  setOutput("");
  setInput(str);
  //auto detection conditional with regex
  if (/^[.-]/.test(trimmed)) {
    setOutput(morseToAlphanumFn(trimmed));
  } else {
    setOutput(alphanumToMorseFn(trimmed));
  }
}
