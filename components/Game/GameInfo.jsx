import clsx from "clsx";
import { Profile } from "../Profile";
import avatarSrc from "./images/avatar.png";
import { GameSymbols } from "./constants";
import { GameSymbol } from "./GameSymbol";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    username: "Sergey",
    rating: "1000",
    avatar: avatarSrc,
    symbol: GameSymbols.Cross,
  },
  {
    id: 2,
    username: "Darya",
    rating: "500",
    avatar: avatarSrc,
    symbol: GameSymbols.Zero,
  },
  {
    id: 3,
    username: "Evgeny",
    rating: "350",
    avatar: avatarSrc,
    symbol: GameSymbols.Triangle,
  },
  {
    id: 4,
    username: "Egor",
    rating: "600",
    avatar: avatarSrc,
    symbol: GameSymbols.Square,
  },
];

function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-slate-100 rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 justify-between gap-3",
      )}
    >
      {" "}
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol && !isWinner}
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
  const [timer, setTimer] = useState(10);

  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  const isDanger = timer < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setTimer((lastTimer) => Math.max(lastTimer - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setTimer(10);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (timer === 0) {
      onTimeOver();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-red-600" : "text-slate-900";
    }
    return "text-slate-200";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          username={playerInfo.username}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full items-center flex justify-center bg-white shadow absolute -left-1 -top-1">
          <GameSymbol symbol={playerInfo.symbol} />
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

export { GameInfo };
