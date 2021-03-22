import React, { useEffect, useState } from "react";

import useKeyPress from "./component/KeyPress";
import { BoardSettings } from "./component/Settings";
import Board, { UpdateActor } from "./component/Board";

import "./styles.css";

export default function App() {
  const rightDown = useKeyPress("ArrowRight");
  const leftDown = useKeyPress("ArrowLeft");
  const upDown = useKeyPress("ArrowUp");
  const downDown = useKeyPress("ArrowDown");

  let xDir = 0;
  let yDir = 0;

  const intervalSpeed = 500;

  if (rightDown) {
    xDir = 1;
  } else if (leftDown) {
    xDir = -1;
  } else {
    xDir = 0;
  }

  if (upDown) {
    yDir = 1;
  } else if (downDown) {
    yDir = -1;
  } else {
    yDir = 0;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      UpdateActor(xDir, yDir);
    }, intervalSpeed);
    return () => clearInterval(interval);
  }, [xDir, yDir]);

  return (
    <div className="grid">
      <div style={{ position: "relative" }}>
        <Board />
      </div>
    </div>
  );
}

/*
function App() {
  const [xCount, setXCount] = useState(0);
  const [yCount, setYCount] = useState(0);

  const rightDown = useKeyPress("ArrowRight");
  const leftDown = useKeyPress("ArrowLeft");
  const upDown = useKeyPress("ArrowUp");
  const downDown = useKeyPress("ArrowDown");

  const intervalSpeed = 24;
  
  let xDir = 0;
  let yDir = 0;

  const speedMod = 10;

  if (rightDown) {
    xDir = 1;
  } else if (leftDown) {
    xDir = -1;
  } else {
    xDir = 0;
  }

  if (upDown) {
    yDir = 1;
  } else if (downDown) {
    yDir = -1;
  } else {
    yDir = 0;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setXCount((curr) => curr + xDir);
      setYCount((curr) => curr + yDir);
    }, intervalSpeed);
    return () => clearInterval(interval);
  }, [xDir, yDir]);

  let pos = [xCount * speedMod, yCount * speedMod];
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "50px",
          width: "50px",
          bottom: `${pos[1]}px`,
          left: `${pos[0]}px`,
          backgroundColor: "red",
        }}
      />
    </>
  );
}
*/
