import { FaHeart } from "react-icons/fa";

function Status({ isWon, isGameOver, wrongCount }) {
  return (
    <div className="w-[350px] h-[60px]  rounded-[4px] mb-[36px] text-[#F9F4DA] text-[20px] font-hanken text-center overflow-hidden">
      {isGameOver && isWon && (
        <div className="bg-[#10A95B] py-[6px] flex flex-col justify-center items-center w-[100%] h-[100%]">
          <p>You win!</p>
          <p className="text-[16px]">Well done 🏆</p>
        </div>
      )}
      {isGameOver && !isWon && (
        <div className="bg-[#BA2A2A] py-[6px] flex flex-col justify-center items-center w-[100%] h-[100%]">
          <p>Game over!</p>
          <p className="text-[16px]">You lose! better luck next time 😭</p>
        </div>
      )}

      {wrongCount > 0 && (
        <div className="bg-[#7A5EA7] py-[6px] flex flex-col justify-center items-center w-[100%] h-[100%] border-[1px] border-[#323232] border-dashed">
          <p className="text-[16px]">
            You have {8 - wrongCount} <span className="text-red-400">❤</span>{" "}
            left!
          </p>
        </div>
      )}
    </div>
  );
}

export default Status;
