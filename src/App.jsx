import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BoardSettings } from "./component/Settings";

import "./styles.css";

export default function App() {
  const [grid, setGrid] = useState(() => BuildGrid());
  const [renderCount, setRenderCount] = useState(0);
  const [start, setStart] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setRenderCount((curr) => curr + 1);
  }, []);

  useEffect(() => {
    if (start) {
      let count = 0;
      const interval = setInterval(() => {
        if (count < grid.length) {
          grid[count].testFunction(grid[count].id);
        } else setStart(false);
        console.log(`counter = ${counter}`);
        count++;
        setCounter(count);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [start]);

  return (
    <>
      <h3>Render count = {renderCount}</h3>
      <h3>Start = {start + ""}</h3>
      <h3>Counter = {counter}</h3>
      {grid.map((data) => {
        return data.cell;
      })}
      <button style={{ marginTop: "100px" }} onClick={() => setStart(!start)}>
        Start
      </button>
      <button style={{ marginLeft : "10px" }} onClick={() => console.log(grid)}>
        Print Grid
      </button>
    </>
  );
}

function TestFunction(id) {
  let element = document.getElementById(`${id}_cell`);
  console.log(element)
  ReactDOM.findDOMNode(element).classList.add("animateCell");
}

function BuildGrid() {
  const grid = [];
  for (let i = 0; i < BoardSettings.numRows; i++) {
    grid.push({
      id: i,
      cell: BuildCell(i),
      distance: i * 2,
      testFunction: TestFunction,
    });
  }

  console.log(grid);
  return grid;
}

function BuildCell(xLoc) {
  const id = `${xLoc}_cell`;
  const cellLoc = [
    BoardSettings.cellSize * xLoc + BoardSettings.gridMargin[0],
    0,
  ];

  return (
    <div
      id={id}
      key={xLoc}
      className="cell"
      style={{
        left: `${cellLoc[0]}px`,
        height: `${BoardSettings.cellSize}px`,
        width: `${BoardSettings.cellSize}px`,
      }}
    >
      {xLoc}
    </div>
  );
}

/*

export default function App() {
  const [grid, setGrid] = useState([]);
  const [clickTest, setClickTest] = useState(false);
  const [counter, setCounter] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setGrid(BuildGrid());
    setRenderCount((curr) => curr + 1);
  }, []);

  useEffect(() => {
    if (clickTest) {
      const interval = setInterval(() => {
        manageArrayAnimation();
      }, 700);
      return () => clearInterval(interval);
    }
  }, [clickTest, counter]);

  function handleClickTest() {
    setGrid(RebuildCell(1, grid, "testCell animateCell"));
  }

  function manageArrayAnimation() {
    setCounter((curr) => curr + 1);
    if (counter < grid.length) {
      setGrid(RebuildCell(counter, grid, "testCell animateCell"));
    } else {
      setClickTest(false);
    }
  }

  return (
    <>
      <h3>Render Count = {renderCount}</h3>
      <h3>Animation Cycle = {clickTest + ""}</h3>
      <h3 style={{ marginBottom: "30px" }}>Counter = {counter}</h3>

      <div style={{ height: "40px" }}>{grid}</div>

      <button style={{ marginTop: "100px" }} onClick={handleClickTest}>
        Click Test
      </button>

      <button
        style={{ marginLeft: "5px" }}
        onClick={() => setClickTest(!clickTest)}
      >
        Start/Stop Cycle
      </button>

      <button style={{ marginLeft: "5px" }} onClick={manageArrayAnimation}>
        Single Step
      </button>

      <br />
      <button onClick={() => console.log(...grid)}>Print Grid</button>

      <button
        style={{ marginLeft: "5px" }}
        onClick={() => console.log(counter)}
      >
        Print Counter
      </button>
    </>
  );
}

function RebuildCell(loc, grid, newClass) {
  const damagedGrid = RemoveCell(loc, grid);
  const newCell = BuildCell(loc, newClass);
  const repairedGrid = damagedGrid.concat(newCell);
  repairedGrid.sort((a, b) => a.key - b.key);
  return repairedGrid;
}

function BuildGrid() {
  const grid = [];

  for (let i = 0; i < BoardSettings.numRows; i++) {
    grid.push(BuildCell(i));
  }

  return grid;
}

function BuildCell(rowNum, newClass = "testCell") {
  const gridMargin = 10;
  const borderStroke = 1;
  let pos = rowNum * BoardSettings.cellSize + gridMargin - borderStroke;
  let size = BoardSettings.cellSize - borderStroke;

  function handleClick() {}

  return (
    <div
      key={rowNum}
      className={newClass}
      onClick={handleClick}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        top: `150px`,
        left: `${pos}px`,
        border: `${borderStroke}px solid blue`,
      }}
    >
      {rowNum}
    </div>
  );
}

function RemoveCell(loc, grid) {
  const tempGrid = [...grid];
  tempGrid.splice(loc, 1);
  // const tempGrid2 = tempGrid.concat(BuildCell(loc))

  return tempGrid;
}











import React, { useEffect, useState } from "react";

// import useKeyPress from "./component/KeyPress";
// import { BoardSettings } from "./component/Settings";
// import Board, { UpdateActor } from "./component/Board";

import "./styles.css";

// let xDir = 0;
// let yDir = 0;

export default function App() {
  const [renderCount, setRenderCount] = useState(0);
  const [getGrid, setGrid] = useState([]);

  let grid = [];
  const gridClass = [];
  const gridMargin = 10;

  useEffect(() => {
    setRenderCount((curr) => curr + 1);
  }, []);

  // useEffect(() => {
  //   setGrid([...grid]);
  // }, [grid]);

  for (let i = 0; i < 10; i++) {
    let xLoc = i * 40 + gridMargin;
    gridClass.push("testCell");
    tempGrid.push(
      <div
        onClick={handleClick}
        className={gridClass[i]}
        style={{ left: `${xLoc}px` }}
      >
        {i}
      </div>
    );
  }

  function handleButtonClick() {
    gridClass[0] = "testCell animateCell";
    grid = [...grid];

    console.log(gridClass[0]);
    console.log(grid[0].props.className);
  }

  function handleClick(e) {
    console.log(e.target.className);
    // e.target.className = "testCell animateCell"
  }

  return (
    <>
      <h3>Render count: {renderCount}</h3>
      <div
        style={{
          height: "402px",
          width: "402px",
          border: "1px solid red",
          marginLeft: "1px",
          marginTop: "9px",
        }}
      >
        {getGrid}
      </div>
      <button onClick={handleButtonClick}>Click</button>
    </>
  );
}


















  const [xCount, setXCount] = useState(0);
  const [yCount, setYCount] = useState(0);

  const rightDown = useKeyPress("ArrowRight");
  const leftDown = useKeyPress("ArrowLeft");
  const upDown = useKeyPress("ArrowUp");
  const downDown = useKeyPress("ArrowDown");

  const intervalSpeed = 24;
  const inputDelay = 48;
  const [counter, setCounter] = useState(0);
  const [movement, setMovement] = useState([0, 0]);
  const [dir, setDir] = useState([0, 0]);

  const speedMod = 10;

  if (rightDown) {
    xDir = 1;
    yDir = 0;
  } else if (leftDown) {
    xDir = -1;
    yDir = 0;
  } else if (upDown) {
    yDir = 1;
    xDir = 0;
  } else if (downDown) {
    yDir = -1;
    xDir = 0;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDir([xDir, yDir]);
      setCounter((curr) => curr + intervalSpeed);
      setXCount((curr) => curr + movement[0]);
      setYCount((curr) => curr + movement[1]);
    }, intervalSpeed);
    return () => clearInterval(interval);
  }, [counter]);

  if (counter >= inputDelay) {
    setCounter(0);
    setMovement(dir);
  }

  let pos = [xCount * speedMod, yCount * speedMod];
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "40px",
          width: "40px",
          bottom: `${pos[1]}px`,
          left: `${pos[0]}px`,
          backgroundColor: "blue",
          zIndex: "1",
        }}
      />
      <div className="grid">
        <div style={{ position: "relative" }}>
          <Board />
        </div>
      </div>
    </>
  );







export default function App() {
  const [counter, setCounter] = useState(0);
  const delay = 2000;
  const intervalSpeed = 500;
  let xDir = 0;
  let yDir = 0;
  const rightDown = useKeyPress("ArrowRight");
  const leftDown = useKeyPress("ArrowLeft");
  const upDown = useKeyPress("ArrowUp");
  const downDown = useKeyPress("ArrowDown");

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
      // UpdateActor(xDir, yDir);
      setCounter((curr) => curr + interval);
    }, intervalSpeed);
    return () => clearInterval(interval);
    // }, [xDir, yDir]);
  }, []);

  if (counter >= delay) {
  }

  return (
    <div className="grid">
      <div style={{ position: "relative" }}>
        <Board />
      </div>
    </div>
  );
}










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
