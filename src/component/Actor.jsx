import React from "react";

function Actor(props) {
  const direction = props.dir + "px";
  return (
    <>
      <div
        className="actor"
        style={{ transform: `translateX(${direction})` }}
      />
    </>
  );
}

export default Actor;
