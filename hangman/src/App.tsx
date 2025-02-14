import { useState } from "react";
import words from "./assets/wordList.json";
import { HangmanDrawing } from "./hangmanDrawing";
import { HangmanWord } from "./hangmanWord";
import { Keyboard } from "./keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Lose Win
        <HangmanDrawing />
        <HangmanWord />
        <div
          style={{
            alignSelf: "stretch",
          }}
        >
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

export default App;
