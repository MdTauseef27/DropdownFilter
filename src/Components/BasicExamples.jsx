import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
export const BasicExamples = () => {
  const [isCount, isShowCount] = useState(0);
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Well Come To React World
      </h1>
      <Button
        style={{ marginLeft: "20px" }}
        onClick={() => isShowCount(isCount + 1)}
      >
        Icrement
      </Button>
      <Button style={{ marginLeft: "20px" }}>Decrement</Button>
      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <FormControl aria-label="First name" />
        <FormControl aria-label="Last name" />
      </InputGroup>
    </div>
  );
};
