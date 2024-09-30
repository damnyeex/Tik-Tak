function GameLayout({ backLink, tittle, gameInfo, playersList }) {
  return (
    <div>
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
    </div>
  );
}

export { GameLayout };
