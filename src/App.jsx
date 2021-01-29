import React from "react";

import Board from "./component/Board";

import "./styles.css";

function App() {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter pressed.");
    }
  };

  return (
    <>
      <Board />
      <div onKeyPress={() => handleKeyPress()}>
        <h1>test</h1>
      </div>
    </>
  );
}

export default App;
