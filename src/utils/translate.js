export default function translate(
  str,
  setOutput,
  setInput,
  lettersToMorse,
  morseToLetters,
) {
  setOutput("");
  setInput(str);

  //auto detection conditional with regex
  if (/^[.-]/.test(str)) {
    const morseArr = str.split(" ");
    const translated = morseArr
      .map((morse) => {
        return morseToLetters[morse];
      })
      .join("");

    setOutput(translated);
  } else {
    const lettersArr = str.toUpperCase().split("");

    const translated = lettersArr
      .map((letter) => {
        return lettersToMorse[letter] ?? "#";
      }) // at this point still an array "hey" -> ["....", ".", "-.--"]
      .join(" "); // morse separates letters with space

    setOutput(translated);
  }
}
