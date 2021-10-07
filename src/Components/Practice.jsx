import React, { useState } from "react";
import { Button } from "react-bootstrap";
export const Practice = () => {
  const [showData, setShowData] = useState(false);
  return (
    <div>
      {showData && <h1>hiiiiiiiiii</h1>}

      <Button onClick={() => setShowData(!showData)}>Click Me</Button>
    </div>
  );
};
