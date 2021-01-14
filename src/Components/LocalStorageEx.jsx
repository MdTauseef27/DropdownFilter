import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
export const LocalStorageEx = () => {
  const [value, setValue] = useState(
    "HIII",
    localStorage.getItem("myValueInLocalStorage") || ""
  );
  useEffect(() => {
    localStorage.setItem("myValueInLocalStorage", value);
  }, [value]);

  const onChange = (event) => setValue(event.target.value);
  return (
    <div>
      <h1>Hello React with Local Storage!</h1>
      <input value={value} type="text" onChange={onChange} />
      <Nav.Link onClick={(e) => setValue(e.target.value)}>
        Corporate Treasury
      </Nav.Link>

      <p>{value}</p>
    </div>
  );
};
