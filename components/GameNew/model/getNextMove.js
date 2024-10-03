import { MoveOrder } from "../constants";

export function getNextMove(currentMove, playersCount) {
  const slicedMoveOrder = MoveOrder.slice(0, playersCount)

  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
