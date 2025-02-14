type HangmanDrawingProps = {
  guessedLetters: string[];
  wordToGuess: string;
  revealWord?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  revealWord = false,
}: HangmanDrawingProps) {
  //const word = "test";
  //const guessedLetters = ["e", "t"];

  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: ".1em solid black",
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || revealWord
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && revealWord
                  ? "red"
                  : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
