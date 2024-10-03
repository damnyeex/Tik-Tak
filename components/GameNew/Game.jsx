import { gameStateActions, players } from "./constants";
import { useGameState } from "./model/useGameState";
import { BackLink } from "./ui/BackLink";
import { GameCell } from "./ui/GameCell";
import { GameInfo } from "./ui/GameInfo";
import { GameLayout } from "./ui/GameLayout";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { GameOverModal } from "./ui/GameOverModal";
import { GameTittle } from "./ui/GameTittle";
import { PlayerInfo } from "./ui/PlayerInfo";

const playersCount = 2;
function Game() {
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    winnerSymbol,
    dispatch,
  } = useGameState(playersCount);

  const winnerPlayer = players.find((player) => player.symbol === winnerSymbol);
  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        tittle={<GameTittle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode={"1 мин на ход"} />
        }
        playersList={players.slice(0, playersCount).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            username={player.username}
            rating={player.rating}
            timer={60}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={winnerSymbol}
            onClick={() => {
              dispatch({
                type: gameStateActions.CellClick,
                index,
              });
            }}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.username}
        players={players.slice(0, playersCount).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            username={player.username}
            rating={player.rating}
            timer={60}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
      />
    </>
  );
}

export { Game };
