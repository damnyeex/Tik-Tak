import { MoveOrder } from "../constants";

export function getNextMove({ currentMove, playersCount, gameTimers }) {
  console.log("Current Move:", currentMove);
  console.log("Game Timer:", gameTimers);

  const slicedMoveOrder = MoveOrder.slice(0, playersCount).filter(
    (symbol) => (gameTimers?.[symbol] ?? 0) > 0, // Используем таймер только если он > 0
  );

  if (slicedMoveOrder.length === 0) {
    console.error("No valid moves available"); // Логирование на случай, если нет доступных ходов
    return currentMove; // Возвращаем текущий ход, если все таймеры исчерпаны
  }

  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
