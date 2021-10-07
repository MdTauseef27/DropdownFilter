import React, { useState } from "react";
import { Button } from "react-bootstrap";
export const BasicExamples = () => {
  const [isCount, isShowCount] = useState(0);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Well Come To React World
      </h1>
      <Button style={{ marginLeft: "20px" }}>Icrement</Button>
      <Button style={{ marginLeft: "20px" }}>Decrement</Button>
    </div>
  );
};
