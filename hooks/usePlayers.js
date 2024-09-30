import { useState } from "react";

function useGameState() {
const [playersCount] = useState(2);
const {
  cells,
  currentMove,
  handleCellClick,
  nextMove,
  winnerSequence,
  handlePlayerTimeOver,
  winnerSymbol,
} = useGameState(playersCount);

}


export { useGameState };