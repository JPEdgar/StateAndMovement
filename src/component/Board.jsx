import {useState} from "react"
import { BoardSettings, Pawn } from "./Settings";

export default function BuildBoard() {
  const board = [];
  for (let i = 0; i < BoardSettings.numCols; i++) {
    for (let j = 0; j < BoardSettings.numRows; j++) {
      board.push(BuildCell(i, j));
    }
  }
  return board;
}

export function UpdateActor(xDir, yDir) {
const [xPos, setX] = useState(Pawn.startX)
const [yPos, setY] = useState(Pawn.startY)
}

function BuildCell(i, j) {
  const leftPos =
    i * BoardSettings.cellSize -
    (BoardSettings.numCols / 2) * BoardSettings.cellSize;
  const bottomPos =
    j * BoardSettings.cellSize -
    (BoardSettings.numRows / 2) * BoardSettings.cellSize;

  let cellColor = "red";

  if (i === Pawn.startX) {
    if (j === Pawn.startY) {
      cellColor = "blue";
    }
  }

  return (
    <div
      className="cell"
      style={{
        left: `${leftPos}px`,
        bottom: `${bottomPos}px`,
        height: BoardSettings.cellSize,
        width: BoardSettings.cellSize,
        backgroundColor: cellColor,
      }}
    >
      {`${i}, ${j}`}{" "}
    </div>
  );
}
