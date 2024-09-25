import GameSymbol from "./GameSymbol";

function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return (
      <div className="text-2xl text-gray-600 mb-20 text-center sm:text-lg">
        Ничья
      </div>
    );
  }

  if (winnerSymbol) {
    return (
      <div className="text-2xl  text-gray-600 mb-20 text-center sm:text-lg">
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="text-2xl text-gray-600 mb-20 text-center sm:text-lg">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}

export default GameInfo;
