function computePlayerTimer(gameState, playerSymbol) {
  return {
    gameTimers: gameState.gameTimers[playerSymbol],
    timerStartAt:
      playerSymbol === gameState.currentMove
        ? gameState.currentMoveStart
        : undefined,
  };
}

export { computePlayerTimer };
