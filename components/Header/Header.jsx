import ArrowDown from "./Icons/ArrowDown";
import logoSrc from "./logo.svg";
import Image from "next/image";
import avatarSrc from "../GameNew/ui/images/avatar.png";
import { Profile } from "../Profile";
import { UiButton } from "../uikit";

function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-slate-100 shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-300 mx-6"></div>
      <UiButton className="w-40" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 cursor-pointer  text-teal-600">
        <Profile avatar={avatarSrc} />
        <ArrowDown />
      </button>
    </header>
  );
}

export { Header };
