import GameSymbol from "./GameSymbol";
import { clsx } from "clsx";
function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "w-full h-full flex items-center justify-center border-2 border-gray-800 text-2xl bg-slate-100 cursor-pointer transition[0.3s,_ease] sm:text-3xl",
        isWinner && "bg-yellow-300 border-orange-400",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}

export default GameCell;
