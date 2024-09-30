import { Game } from "../components/GameNew";
import { Header } from "../components/Header/Header";

function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-400 min-h-screen">
      {header}
      <main className="pt-24 mx-auto w-max">{children}</main>
    </div>
  );
}

export default HomePage;
