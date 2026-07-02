import { useState, useRef, useEffect } from "react";
import "./App.scss";
import { lettersToMorse } from "./data/lettersToMorse.js";
import { morseToLetters } from "./data/morseToLetters.js";
import translate from "./utils/translate.js";
// import Header from "./components/Header.jsx";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="container">
      <div className="bg-noise"></div>
      <div className="input">
        {/* <Header /> */}
        <textarea
          placeholder="type letters || morse code"
          maxLength={400}
          autoFocus
          id="morse-input"
          className="input__textarea"
          value={input}
          onChange={(e) =>
            translate(
              e.target.value,
              setOutput,
              setInput,
              lettersToMorse,
              morseToLetters,
            )
          }
        />
      </div>
      <div className="output">
        <p>{output}</p>
      </div>
    </div>
  );
}

export default App;
