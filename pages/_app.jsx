import "../styles/global.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

function App({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />;
      <div id="modals"></div>
    </div>
  );
}

export default App;
