import GameInfo from "./GameInfo";
import useGameState from "../../hooks/useGame";
import ResetButton from "./ResetButtom";
import GameField from "./GameField";

function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    toggleCell,
    resetGame,
    getWinnerCell,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-80 mx-auto my-24 border-2 border-black p-4">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <>
        <GameField
          cells={cells}
          getWinnerCell={getWinnerCell}
          toggleCell={toggleCell}
        />
      </>
      <ResetButton onClick={resetGame} />
    </div>
  );
}

export default Game;
