import { GameSymbol } from "./GameSymbol";
import Image from "next/image";
import clsx from "clsx";

function PlayerInfo({
  isRight,
  username,
  rating,
  avatar,
  symbol,
  timer,
  isTimerRunning,
}) {
  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  const isDanger = timer < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-red-600" : "text-slate-900";
    }
    return "text-slate-200";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div
          className={
            "flex items-center gap-2 cursor-pointer text-start text-teal-600 w-44"
          }
        >
          <Image className="w-12 h-12" src={avatar} alt="avatar" unoptimized />
          <div className="overflow-hidden">
            <div className=" text-lg leading-tight">{username}</div>
            <div className=" text-slate-400 text-xs leading-tight text-end">
              Рейтинг:{rating}
            </div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full items-center flex justify-center bg-white shadow absolute -left-1 -top-1">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div
        className={clsx("h-6 w-px mt-1 bg-slate-500", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutes}:{seconds}
      </div>
    </div>
  );
}

export { PlayerInfo };
