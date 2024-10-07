import { useReducer } from "react";
import { players } from "./constants";
import { BackLink } from "./ui/BackLink";
import { GameCell } from "./ui/GameCell";
import { GameInfo } from "./ui/GameInfo";
import { GameLayout } from "./ui/GameLayout";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { GameOverModal } from "./ui/GameOverModal";
import { GameTittle } from "./ui/GameTittle";
import { PlayerInfo } from "./ui/PlayerInfo";
import { computeWinner } from "./model/computeWinner";
import { getNextMove } from "./model/getNextMove";
import {
  initGameState,
  useGameReducer,
  gameStateActions,
} from "./model/useGameReducer";
import { computeWinnerSymbol } from "./model/computeWinnerSymbol";

const PlayersCount = 2;

function Game() {
  const [gameState, dispatch] = useReducer(
    useGameReducer,
    { playersCount: PlayersCount },
    initGameState,
  );

  const winnerSequence = computeWinner(gameState);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = players.find((player) => player.symbol === winnerSymbol);
  const { cells, currentMove } = gameState;
  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        tittle={<GameTittle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode={"1 мин на ход"} />
        }
        playersList={players.slice(0, PlayersCount).map((player, index) => (
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
          <GameMoveInfo
            currentMove={currentMove.currentMove}
            nextMove={nextMove.nextMove}
          />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={false}
            onClick={() => {
              dispatch({
                type: gameStateActions.Cell_Click,
                index,
              });
            }}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.username}
        players={players.slice(0, PlayersCount).map((player, index) => (
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
