import clsx from "clsx";
import { UiButton } from "../uikit";
import { GameSymbol } from "./GameSymbol";


function GameField({
  className,
  cells,
  currentMove,
  handleCellClick,
  nextMove,
  winnerSequence,
  winnerSymbol
}) {
  const actions = (
    <>
      <UiButton size="md" variant="primary">
        Ничья
      </UiButton>
      <UiButton size="md" variant="outline">
        Сдаться
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            onClick={() => {
              handleCellClick(index);
            }}
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={winnerSymbol}
          >
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-slate-100 rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
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
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid mt-3 grid-cols-game-field grid-rows-game-field pl-px pt-px">
      {children}
    </div>
  );
}

function GameCell({ children, onClick, isWinner, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border border-stone-200 -ml-px -mt-px mb-px flex items-center justify-center",
        isWinner && "bg-orange-600/10",
      )}
    > 
      {children}
    </button>
  );
}

export { GameField };
