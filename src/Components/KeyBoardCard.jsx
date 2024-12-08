function KeyBoardCard({
  letter,
  setGuessedWords,
  currentWord,
  setWrongCount,
  guessedWords,
  isGameOver,
  isWon,
}) {
  function clickHandler(letter) {
    if (!currentWord.includes(letter)) {
      setWrongCount((prev) => prev + 1);
    }
    setGuessedWords((prev) => {
      if (prev.includes(letter)) {
        return [...prev];
      } else {
        return [...prev, letter];
      }
    });
  }

  // if (guessedWords.includes(letter) && currentWord.includes(letter))
  //   console.log("green");

  return (
    <button
      disabled={isGameOver || isWon}
      onClick={() => clickHandler(letter)}
      className={`${
        guessedWords.includes(letter) && currentWord.includes(letter)
          ? "bg-[#10A95B]"
          : guessedWords.includes(letter) && !currentWord.includes(letter)
          ? "bg-[#EC5D49]"
          : "bg-[#FCBA29]"
      } ${
        isWon || isGameOver ? "bg-opacity-25 cursor-not-allowed" : ""
      } w-[40px] h-[40px] rounded-[4px]  font-hanken font-[600px] text-[#1E1E1E] text-[16px] flex justify-center items-center capitalize`}
    >
      {letter}
    </button>
  );
}

export default KeyBoardCard;
