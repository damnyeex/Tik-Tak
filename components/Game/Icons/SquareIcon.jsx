import clsx from "clsx";
import { IoSquareOutline } from "react-icons/io5";

function SquareIcon({ className }) {
  return <IoSquareOutline className={clsx(className, "text-yellow-500")} />;
}

export default SquareIcon;
