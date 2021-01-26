import React from "react";
export const LiftingChild = ({ isName, increments, decrements, isCount }) => {
  return (
    <div>
      <h1>{isName}</h1>
      <button onClick={increments}>Increments</button>
      <button onClick={decrements}>Decrements</button>
      <p>Increment:{isCount}</p>
    </div>
  );
};
