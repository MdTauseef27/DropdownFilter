import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/ScrollStyleSheet.css";
const items = [...Array(100)].map((val, i) => `Item ${i}`);
export const ItemsScrollBar = () => {
  return (
    <div>
      <div className="container">
        <div className="left-col">
          Left col
          <span>List</span>
          <ol>
            {items.map((item, i) => (
              <li key={`item_${i}`}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="center-col">
          <span>List</span>
          <ol>
            {items.map((item, i) => (
              <li key={`item_${i}`}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="right-col">
          Right col <span>List</span>
          <ol>
            {items.map((item, i) => (
              <li key={`item_${i}`}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
