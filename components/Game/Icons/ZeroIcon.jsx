import clsx from "clsx";
import { PiNumberZero } from "react-icons/pi";

function ZeroIcon({ className }) {
  return <PiNumberZero className={clsx(className, "text-red-600")} />;
}

export default ZeroIcon;
