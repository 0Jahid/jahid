import Header from "@/src/components/Header";
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";
import Home from "@/src/components/sections/Home";
import Portfolio from "@/src/components/sections/Portfolio";
import Separator from "@/src/components/Separator";
import { jqueryFuntion } from "@/src/utilits";
import { Fragment, useEffect } from "react";
const Index = () => {
  useEffect(() => {
    jqueryFuntion();
  });

  return (
    <Fragment>
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home />
            <About />
            <Separator type={"down"} />
            <Portfolio />
            <Separator type={"up"} />
            <Contact />
            <Separator type={"down"} />
           
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};
export default Index;
