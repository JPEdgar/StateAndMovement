import React from "react";

import Board from "./component/Board";
import useKeyPress from "./component/KeyPress";

import "./styles.css";

function App() {
  const rightDown = useKeyPress("ArrowRight");
  const leftDown = useKeyPress("ArrowLeft");

  const [count, setCount] = React.useState(0);

  if (rightDown) {
    setCount((curr) => curr + 1);
  }

  if (leftDown) {
    setCount((curr) => curr - 1);
  }

  return (
    <>
      <h3>{count}</h3>
      {/* <Board dir={dir} /> */}
    </>
  );
}

export default App;
