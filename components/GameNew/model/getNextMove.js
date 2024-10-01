import { MoveOrder } from "../constants";

function getNextMove(currentMove, playersCount, playersTimeOver) {
  const sliceMoveOrder = MoveOrder.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol)
  );
  const nextMoveIndex = sliceMoveOrder.indexOf(currentMove) + 1;
  return sliceMoveOrder[nextMoveIndex] ?? sliceMoveOrder[0];
}

export {getNextMove}
