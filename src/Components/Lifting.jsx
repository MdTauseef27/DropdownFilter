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
  const [isNameMy, setIsNameMy] = useState("");
  return (
    <div>
      <LiftingChild
        isName={isName}
        Count={isCount}
        decrement={decrement}
        increment={increment}
        isNameMy={isNameMy}
      />
    </div>
  );
};
