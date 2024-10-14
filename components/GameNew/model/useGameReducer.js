import { GameSymbols, MoveOrder } from "../constants";
import { getNextMove } from "./getNextMove";

export const gameStateActions = {
  Cell_Click: "cell-click",
  Tick: "tick",
};

export const initGameState = ({
  playersCount,
  defaultTimer,
  currentMoveStart,
}) => ({
  cells: new Array(17 * 17).fill(null),
  currentMove: GameSymbols.Cross,
  currentMoveStart,
  playersCount,
  gameTimers: MoveOrder.reduce((gameTimers, symbol, index) => {
    if (index < playersCount) {
      gameTimers[symbol] = defaultTimer;
    }
    return gameTimers;
  }, {}),
});

export const useGameReducer = (state, action) => {
  switch (action.type) {
    case gameStateActions.Cell_Click: {
      const { index, now } = action;

      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        gameTimers: updateTimer(state, now),
        currentMove: getNextMove({
          currentMove: state.currentMove,
          playersCount: state.playersCount,
          gameTimers: state.gameTimers,
        }),
        currentMoveStart: now,
        cells: updateCells(state, index),
      };
    }

    case gameStateActions.Tick: {
      const { now } = action;

      if (!isTimeOver(state, now)) {
        return state;
      }
      return {
        ...state,
        gameTimers: updateTimer(state, now),
        currentMove: getNextMove({
          currentMove: state.currentMove,
          playersCount: state.playersCount,
          gameTimers: state.gameTimers,
          currentMoveStart: now,
        }),
      };
    }

    default: {
      return state;
    }
  }
};

function updateTimer(gameState, now) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.gameTimers[gameState.currentMove];

  return {
    ...gameState.gameTimers,
    [gameState.currentMove]: timer - diff,
  };
}

function updateCells(gameState, index) {
  return gameState.cells.map((cell, i) =>
    i === index ? gameState.currentMove : cell,
  );
}

function isTimeOver(gameState, now) {
  const timer = updateTimer(gameState, now)[gameState.currentMove];
  return timer <= 0;
}
