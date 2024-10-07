import { GameSymbols } from "../constants";
import { getNextMove } from "./getNextMove";

export const gameStateActions = {
  Cell_Click: "cell-click",
};

export const initGameState = ({ playersCount }) => {
  const initialState = {
    cells: new Array(17 * 17).fill(null),
    currentMove: GameSymbols.Cross,
    playersCount,
  };
  return initialState;
};

export const useGameReducer = (state, action) => {
  switch (action.type) {
    case gameStateActions.Cell_Click: {
      const { index } = action;

      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        currentMove: getNextMove(state.currentMove, state.playersCount),
        cells: state.cells.map((cell, i) =>
          i === index ? state.currentMove : cell,
        ),
      };
    }
    default: {
      return state;
    }
  }
};
