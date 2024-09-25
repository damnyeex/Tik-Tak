import Link from "next/Link";
import ArrowLeftIcon from "./Icons/ArrowLeftIcon";
import StarIcon from "./Icons/StarIcon";
import UserIcon from "./Icons/UserIcon";
import HistoryIcon from "./Icons/HistoryIcon";

function GameTittle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-sm text-blue-600 -mb-0.5"
      >
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-3xl leading-tight font-medium">Tik-tak</h1>
      <div className="flex items-center gap-3 cursor-pointer text-xs text-slate-900">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon /> {playersCount}
        </div>
        <div>
          <HistoryIcon className="flex items-center gap-1" />
        </div>
      </div>
    </div>
  );
}

export { GameTittle };
