import React, { useState } from "react";
import App from "../App";
import { LiftingChild } from "./LiftingChild";
export const Lifting = ({}) => {
  const [isName] = useState("Mohammed Tauseef");
  const [isCount, setIsCount] = useState(0);
  const increment = () => {
    setIsCount(isCount + 1);
  };
  const decrement = () => {
    setIsCount(isCount - 1);
  };

  return (
    <div>
      <LiftingChild
        isName={isName}
        Count={isCount}
        decrement={decrement}
        increment={increment}
      />
    </div>
  );
};
