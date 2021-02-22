import React from "react";
export const LiftingChild = ({ isName, increment, decrement, Count }) => {
  return (
    <div>
      <p>Name:{isName}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Counts:{Count}</p>
    </div>
  );
};
