import { useState } from "react";
import { GameTittle } from "../components/Game";
import { GameInfo } from "../components/Game";
import { GameField } from "../components/Game/";
import { GameSymbol } from "../components/Game";
import { Header } from "../components/Header";
import { useGameState } from "../components/Game";

function HomePage() {
  const [playersCount] = useState(4);
  const { cells, currentMove, handleCellClick, nextMove, winnerSequence, handlePlayerTimeOver, winnerSymbol } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-400 min-h-screen">
      <Header />
      <main className="pt-24 mx-auto w-max">
        <GameTittle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          cells={cells}
          currentMove={currentMove}
          handleCellClick={handleCellClick}
          isWinner={winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="my-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <GameField
          playersCount={playersCount}
          cells={cells}
          currentMove={currentMove}
          handleCellClick={handleCellClick}
          nextMove={nextMove}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
          className="mt-6"
        />
      </main>
    </div>
  );
}

export default HomePage;
