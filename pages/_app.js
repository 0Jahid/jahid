import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import JahidHead from "@/src/JahidHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <JahidHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
