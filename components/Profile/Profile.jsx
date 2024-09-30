import clsx from "clsx";
import Image from "next/image";
import avatarSrc from "../GameNew/ui/images/avatar.png";

function Profile({ className, username, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 cursor-pointer text-start text-teal-600",
        className,
      )}
    >
      <Image className="w-12 h-12" src={avatar} alt="avatar" unoptimized />
      <div className="overflow-hidden">
        <div className=" text-lg leading-tight">{username}</div>
        <div className=" text-slate-400 text-xs leading-tight text-end">
          Рейтинг:{rating}
        </div>
      </div>
    </div>
  );
}

export { Profile };
