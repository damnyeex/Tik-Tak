import avatarSrc from "./ui/images/avatar.png";

export const GameSymbols = {
  Zero: "zero",
  Cross: "cross",
  Square: "square",
  Triangle: "triangle",
};

export const MoveOrder = [
  GameSymbols.Cross,
  GameSymbols.Zero,
  GameSymbols.Square,
  GameSymbols.Triangle,
];

export const players = [
  {
    id: 1,
    username: "Sergey",
    rating: "1000",
    avatar: avatarSrc,
    symbol: GameSymbols.Cross,
  },
  {
    id: 2,
    username: "Darya",
    rating: "500",
    avatar: avatarSrc,
    symbol: GameSymbols.Zero,
  },
  {
    id: 3,
    username: "Evgeny",
    rating: "350",
    avatar: avatarSrc,
    symbol: GameSymbols.Triangle,
  },
  {
    id: 4,
    username: "Egor",
    rating: "600",
    avatar: avatarSrc,
    symbol: GameSymbols.Square,
  },
];
