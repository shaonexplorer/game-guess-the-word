import { FaHeart } from "react-icons/fa";

function Lives({ wrongCount }) {
  const i = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="   w-[200px] sm:w-[254px] py-5 flex flex-wrap items-center justify-center gap-2 text-2xl">
      {i.map((index) => (
        <FaHeart
          className={`transition-all duration-700 text-2xl sm:text-4xl ${
            index <= wrongCount - 1
              ? "-translate-y-[300%] opacity-0"
              : "text-red-500"
          }`}
          key={index}
        />
      ))}
    </div>
  );
}

export default Lives;
