import clsx from "clsx";
import { GameSymbol } from "./GameSymbol";

function GameCell({ onClick, isWinner, disabled, symbol }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border border-stone-200 -ml-px -mt-px mb-px flex items-center justify-center",
        isWinner && "bg-orange-600/10",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
}

export { GameCell };
