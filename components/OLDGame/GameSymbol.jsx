import { SYMBOL_O } from "./Constanst";
import { SYMBOL_X } from "./Constanst";

function GameSymbol({ symbol }) {
  
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-red-500";
    if (symbol === SYMBOL_X) return "text-green-500";
    return "";
  };
  return (
    <span className={`text-2xl leading-6 ${getSymbolClassName(symbol)}`}>
      {symbol}
    </span>
  );
}

export default GameSymbol;
