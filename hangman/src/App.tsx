import { useCallback, useEffect, useState } from "react";
import words from "./assets/wordList.json";
import { HangmanDrawing } from "./hangmanDrawing";
import { HangmanWord } from "./hangmanWord";
import { Keyboard } from "./keyboard";
import { FaTwitter, FaGithub } from "react-icons/fa";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord());

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        margin: "2rem auto",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        alignItems: "center",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          color: "#333",
        }}
      >
        {isWinner && "You Win - Press Enter to play again"}
        {isLoser && "Nice Try - Press Enter to play again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        revealWord={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <Keyboard
          isDisabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
      <footer
        style={{
          marginTop: "2rem",
          textAlign: "center",
          color: "#666",
          fontSize: "0.9rem",
        }}
      >
        <p>Created by [ssuish]</p>
        <p>Purpose: A fun Hangman game to learn typescript and basic react.</p>
        <p>
          Follow me on:
          <a
            href="https://x.com/suisoh_mei"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 0.5rem" }}
          >
            <FaTwitter size={24} color="#1DA1F2" />
          </a>
          <a
            href="https://github.com/ssuish"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 0.5rem" }}
          >
            <FaGithub size={24} color="#333" />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
