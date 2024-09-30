import StarIcon from "./Icons/StarIcon";
import UserIcon from "./Icons/UserIcon";
import HistoryIcon from "./Icons/HistoryIcon";

function GameInfo({ playersCount, isRatingGame, timeMode }) {
  return (
    <div>
      <div className="flex items-center gap-3 cursor-pointer text-xs text-slate-900">
        {isRatingGame && <StarIcon />}
        <div className="flex items-center gap-1">
          <UserIcon /> {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon /> {timeMode}
        </div>
      </div>
    </div>
  );
}

export { GameInfo };
