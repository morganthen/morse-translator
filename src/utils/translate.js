import alphanumToMorseFn from "./alphanumToMorseFn.js";
import morseToAlphanumFn from "./morseToAlphanumFn.js";

export default function translate(str, setOutput, setInput) {
  setOutput("");
  setInput(str);
  //auto detection conditional with regex
  if (/^[.-]/.test(str)) {
    setOutput(morseToAlphanumFn(str));
  } else {
    setOutput(alphanumToMorseFn(str));
  }
}
