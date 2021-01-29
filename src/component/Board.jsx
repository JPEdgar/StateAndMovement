import React, { useState } from "react";

import Actor from "./Actor";

function Board() {
  const [getMove, setMove] = useState(0);
  function Movement(dir) {
    if (dir === "left") {
      setMove((curr) => curr - 5);
    } else {
      setMove((curr) => curr + 5);
    }
  }

  return (
    <>
      <div className="board">
        <Actor dir={getMove} />
      </div>
      <button onClick={() => Movement("left")}>Move Left</button>
      <button onClick={() => Movement("right")}>Move Right</button>
    </>
  );
}

export default Board;
