import Link from "next/Link";
import ArrowLeftIcon from "./Icons/ArrowLeftIcon";

function BackLink() {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 text-sm text-blue-600 -mb-0.5"
    >
      <ArrowLeftIcon />
      На главную
    </Link>
  );
}

export { BackLink } ;
