import React, { useState } from "react";
import App from "../App";
import { LiftingChild } from "./LiftingChild";
export const Lifting = ({ Count, decrement, increment }) => {
  // const [isCount, setIsCount] = useState(0);
  // const increment = () => {
  //   setIsCount(isCount + 1);
  // };
  // const decrement = () => {
  //   setIsCount(isCount - 1);
  // };

  const [isName, setIsName] = useState("Mohammed Tauseef");
  return (
    <div>
      <h1>hiiiiiiiiiii</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Increment:{Count}</p>
      {/* {isName} */}
      <LiftingChild isName={isName} />
    </div>
  );
};
