import { players } from "./constants";
import { BackLink } from "./ui/BackLink";
import { GameInfo } from "./ui/GameInfo";
import { GameLayout } from "./ui/GameLayout";
import { GameTittle } from "./ui/GameTittle";
import { PlayerInfo } from "./ui/PlayerInfo";

function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      tittle={<GameTittle />}
      gameInfo={
        <GameInfo isRatingGame playersCount={4} timeMode={"1 мин на ход"} />
      }
      playersList={players.map((player, index) => (
        <PlayerInfo
          key={player.id}
          avatar={player.avatar}
          name={player.name}
          rating={player.rating}
          timer={player.timer}
          symbol={player.symbol}
          isRight={index % 2 === 1}
        />
      ))}
    />
  );
}

export { Game };
