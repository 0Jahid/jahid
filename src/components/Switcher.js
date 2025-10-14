import Head from "next/head";
import { Fragment, useState } from "react";
const colors = [
  { id: 1, name: "yellow" },
  { id: 2, name: "green" },
  { id: 3, name: "red" },
  { id: 4, name: "blue" },
  { id: 5, name: "orange" },
  { id: 6, name: "yellowgreen" },
  { id: 7, name: "pink" },
  { id: 8, name: "goldenrod" },
];
const Switcher = () => {
  const [color, setColor] = useState("red");

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href={`css/skins/${color}.css`} />
      </Head>
    </Fragment>
  );
};
export default Switcher;
