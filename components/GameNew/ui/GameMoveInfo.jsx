import { GameSymbol } from "./GameSymbol";

function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl leading-tight ">
        {" "}
        Ход :{" "}
        <GameSymbol symbol={currentMove} className="w-6 h-6 text-teal-700" />
      </div>
      <div className="flex items-center gap-1 text-xs leading-tight text-slate-600">
        {" "}
        Следующий :{" "}
        <GameSymbol symbol={nextMove} className="w-3 h-3 text-red-600" />
      </div>
    </>
  );
}

export { GameMoveInfo };
