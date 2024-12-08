function LettersCard({ letter, guessedWords, isGameOver, isWon }) {
  return (
    <div
      className={` ${
        !guessedWords.includes(letter) && (isGameOver || isWon)
          ? "text-[#EC5D49]"
          : "text-[#F9F4DA]"
      } w-[40px] h-[40px] bg-[#323232] border-b-[1px] border-[#F9F4DA] flex justify-center items-center font-hanken font-[700px]  text-[18px] capitalize`}
    >
      {guessedWords.includes(letter.toLowerCase()) && letter}
      {!guessedWords.includes(letter.toLowerCase()) &&
        (isGameOver || isWon) &&
        letter}
    </div>
  );
}

export default LettersCard;
