function GameLayout({
  backLink,
  tittle,
  gameInfo,
  playersList,
  gameMoveInfo,
  actions,
  gameCells,
}) {
  return (
    <div className="pb-10">
      <div className="pl-2">
        {backLink}
        {tittle}
        {gameInfo}
      </div>
      <div
        className={
          "mt-4 bg-slate-100 rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 justify-between gap-3"
        }
      >
        {playersList}
      </div>
      <div className={"mt-6 bg-slate-100 rounded-2xl shadow-md px-8 pt-5 pb-7"}>
        <div className="flex gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid mt-3 grid-cols-game-field grid-rows-game-field pl-px pt-px">
          {gameCells}
        </div>
      </div>
    </div>
  );
}

export { GameLayout };
