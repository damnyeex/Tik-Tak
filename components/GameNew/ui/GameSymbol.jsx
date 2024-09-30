import CrossIcon from "./Icons/CrossIcon";
import ZeroIcon from "./Icons/ZeroIcon";
import SquareIcon from "./Icons/SquareIcon";
import TriangleIcon from "./Icons/TriangleIcon";
import { GameSymbols } from "../constants";

function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GameSymbols.Cross]: CrossIcon,
      [GameSymbols.Zero]: ZeroIcon,
      [GameSymbols.Square]: SquareIcon,
      [GameSymbols.Triangle]: TriangleIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}

export { GameSymbol };
