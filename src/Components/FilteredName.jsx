import React, { useState } from "react";
import { Card } from "react-bootstrap";
export const FilteredName = () => {
  const [isShow, setIsShow] = useState(true);
  const [isShows, setIsShows] = useState(true);

  const names = [
    "Khwaja",
    "Khuddus",
    "Zubair Ahmed",
    "Zubair Dange",
    "Salman",
    "Tauseef",
  ];
  return (
    <div>
      <h1>Hi This Is Filter Example</h1>

      {isShow &&
        names
          .filter((name) => name.includes("Z"))
          .map((filteredName) => (
            <Card>
              <li>{filteredName}</li>
            </Card>
          ))}
      <button onClick={() => setIsShow(!isShow)}>Filter Data</button>
    </div>
  );
};
