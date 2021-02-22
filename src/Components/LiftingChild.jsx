import React from "react";
export const LiftingChild = ({
  isName,
  increment,
  decrement,
  Count,
  isNameMy,
}) => {
  return (
    <div>
      <h1>{isName}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Increment:{Count}</p>
      <p>Name:{isNameMy}</p>
    </div>
  );
};
