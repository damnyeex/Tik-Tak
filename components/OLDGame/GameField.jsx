import GameCell from "./GameCell";
function GameField({ cells, toggleCell, getWinnerCell }) {
  return (
    <div className="grid pt-px pl-px grid-cols-game-field grid-rows-game-field gap-1.5 mb-5 sm:grid-cols-[repeat(3,_80px)] sm:grid-rows-[repeat(3,_80px)]">
      {cells.map((symbol, index) => (
        <GameCell
          key={index}
          symbol={symbol}
          isWinner={getWinnerCell(index)}
          onClick={() => toggleCell(index)}
        />
      ))}
    </div>
  );
}

export default GameField;
