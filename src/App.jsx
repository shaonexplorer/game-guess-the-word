import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Lives from "./Components/Lives";
import Status from "./Components/Status";
import LettersCard from "./Components/lettersCard";
import KeyBoardCard from "./Components/KeyBoardCard";
import getRandomWords from "./utils/api";
import setWord from "./utils/setWord";
import { words } from "./utils/words";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [definition, setDefinition] = useState();

  const [currentWord, setCurrentWord] = useState(() => setWord(words));

  useEffect(() => {
    async function fetch() {
      try {
        setIsLoading(true);
        const data = await getRandomWords(currentWord);
        data && setDefinition(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetch();
  }, [currentWord]);

  // definition &&
  //   !isLoading &&
  //   console.log(definition[0].meanings[0].synonyms[0]);

  let hint;
  if (definition && !isLoading) {
    hint = definition[0].meanings[0].definitions[0].definition;
  }

  const keyBoardLetters = "abcdefghijklmnopqrstuvwxyz";
  const [guessedWords, setGuessedWords] = useState([]);
  const currentWordArray = currentWord?.split("");
  const [wrongCount, setWrongCount] = useState(0);
  const isGameOver =
    currentWordArray?.every((el) => guessedWords.includes(el)) ||
    wrongCount >= 8;

  const isWon = currentWordArray?.every((el) => guessedWords.includes(el));

  if (isLoading)
    return (
      <div className="bg-[#282726] min-h-svh flex justify-center items-center text-[#F9F4DA] font-christmas font-bold text-4xl">
        <h1>Loading Data ...</h1>
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center bg-[#282726] min-h-svh w-screen mx-auto overflow-scroll">
      <Header />
      <Status isWon={isWon} isGameOver={isGameOver} wrongCount={wrongCount} />
      <Lives wrongCount={wrongCount} />
      {hint && (
        <div className="sm:w-[1000px] font-christmas text-[#F9F4DA] text-2xl tracking-widest sm:text-4xl font-bold text-center mx-5 sm:mx-0">
          {`"${hint}"`}
        </div>
      )}
      <div className="flex justify-center items-center gap-[2px] my-[36px]">
        {currentWord.split("").map((letter, index) => (
          <LettersCard
            letter={letter}
            key={index}
            guessedWords={guessedWords}
            isGameOver={isGameOver}
            isWon={isWon}
          />
        ))}
      </div>
      <div className="my-[36px] justify-center items-center flex-wrap flex w-[340px] sm:w-[480px] gap-[8px]">
        {keyBoardLetters.split("").map((letter) => (
          <KeyBoardCard
            letter={letter}
            key={letter}
            setGuessedWords={setGuessedWords}
            currentWord={currentWordArray}
            setWrongCount={setWrongCount}
            guessedWords={guessedWords}
            isGameOver={isGameOver}
            isWon={isWon}
          />
        ))}
      </div>
      <div className="h-20">
        {isGameOver && (
          <button
            onClick={() => {
              setGuessedWords([]);
              setCurrentWord(() => setWord(words));
              setWrongCount(0);
            }}
            className="bg-[#11B5E5] w-[230px] py-[6px] px-[12px] rounded-[4px] text-[#1E1E1E] text-[16px] font-hanken font-[600px]"
          >
            New Game
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
