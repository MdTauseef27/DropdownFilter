import React, { useState } from "react";
import App from "../App";
import { LiftingChild } from "./LiftingChild";
export const Lifting = ({ Count, decrement, increment, isNameMy }) => {
  const [isName] = useState("Mohammed Tauseef");
  return (
    <div>
      <h1>hiiiiiiiiiii</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Increment:{Count}</p>
      <p>Name:{isNameMy}</p>

      <LiftingChild isName={isName} />
    </div>
  );
};
