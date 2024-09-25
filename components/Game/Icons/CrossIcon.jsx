import clsx from "clsx";
import { RxCross2 } from "react-icons/rx";

function CrossIcon({ className }) {
  return <RxCross2 className={clsx(className, "text-green-600")} />;
}

export default CrossIcon;
