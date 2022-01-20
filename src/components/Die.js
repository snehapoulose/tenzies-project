import React from "react";

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#2ecc71" : "white",
  };
  return (
    <div onClick={props.holdDice} className="dice-face" style={styles}>
      <h3>{props.value}</h3>
    </div>
  );
}
export default Die;
