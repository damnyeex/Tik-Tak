import { useState } from "react";
import { GameSymbols } from "../components/Game/constants";
import { getNextMove, computeWinner } from "../components/Game/model";

function useGameState(playersCount) {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(17 * 17).fill(null),
      currentMove: GameSymbols.Cross,
      playersTimeOver: [],
    }),
  );

  const winnerSequence = computeWinner({ cells });
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);
  const winnerSymbol = nextMove === currentMove ?  currentMove : winnerSequence?.[0]

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          playersTimeOver,
        ),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver
        ),
      };
    });
  };

  return {
    cells,
    nextMove,
    currentMove,
    handleCellClick,
    winnerSequence,
    computeWinner,
    handlePlayerTimeOver,
    winnerSymbol,
  };
}

export { useGameState };
