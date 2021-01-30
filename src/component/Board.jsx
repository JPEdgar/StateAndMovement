import React, { useState } from "react";

import Actor from "./Actor";

function Board({ dir }) {
  const [getMove, setMove] = useState(0);

  if (dir) {
    if (dir === "left") {
      setMove(getMove - 5);
    } else if (dir === "right") {
      setMove(getMove + 5);
    }
  }

  return (
    <>
      <div className="board">
        <Actor dir={getMove} />
      </div>
    </>
  );
}

export default Board;
