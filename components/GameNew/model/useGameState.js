import { useReducer, useState } from "react";
import { GameSymbols } from "../constants";
import { computeWinner } from "./computeWinner";
import { getNextMove } from "./getNextMove";



const gameStateReducer = (state, action) => {
  console.log(action)
  return state
}

const initGameState = ({}) => ({
  cells: new Array(17 * 17).fill(null),
  currentMove: GameSymbols.Cross,
});

function useGameState(playersCount) {
  const  [gameState, dispatch] = useReducer(gameStateReducer, {}, initGameState );
  
  const winnerSequence = computeWinner({ cells: gameState.cells });
  const nextMove = getNextMove(gameState.currentMove, playersCount);
  const winnerSymbol = nextMove === gameState.currentMove ?  currentMove : gameState.cells[winnerSequence?.[0]]


    return {
      cells: gameState.cells,
      currentMove:gameState.currentMove,
      nextMove,
      winnerSequence,
      winnerSymbol,
      computeWinner,
      dispatch
    };

  /*
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(17 * 17).fill(null),
      currentMove: GameSymbols.Cross,
      playersTimeOver: [],
    }),
  );

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
  */
}

export { useGameState };
