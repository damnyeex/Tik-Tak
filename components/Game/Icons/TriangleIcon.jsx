import clsx from "clsx";
import { BsTriangle } from "react-icons/bs";

function TriangleIcon({ className }) {
  return <BsTriangle className={clsx(className, "text-violet-600")} />;
}

export default TriangleIcon;
