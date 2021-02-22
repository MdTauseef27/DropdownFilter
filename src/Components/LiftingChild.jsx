import React from "react";
export const LiftingChild = ({ isName, increment, decrement, Count }) => {
  return (
    <div>
      <h1>{isName}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Counts:{Count}</p>
    </div>
  );
};
