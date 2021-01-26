import React, { useState } from "react";
import "./App.css";
import { DropdownFilter } from "./Components/DropdownFilter";
import { CardExample } from "./Components/CardExample";
import { FilterData } from "./Components/FilterData";
import { FilterDataEx } from "./Components/FilterDataEx";
import { FilteredName } from "./Components/FilteredName";

import { Products1 } from "./Components/Products1";
import { Nav1 } from "./Components/Nav1";
import { Footer1 } from "./Components/Footer1";
import { Lifting } from "./Components/Lifting";
import { ItemsScrollBar } from "./Components/ItemsScrollBar";
import { LocalStorageEx } from "./Components/LocalStorageEx";
import { LocalStorageEx1 } from "./Components/LocalStorageEx1";
function App() {
  const [isCount, setIsCount] = useState(0);
  const increment = () => {
    setIsCount(isCount + 1);
  };
  const decrement = () => {
    setIsCount(isCount - 1);
  };
  const [isNameMy, setIsNameMy] = useState("Zubair Ahmed");
  return (
    <div>
      {/* <DropdownFilter /> */}
      {/* <CardExample /> */}
      {/* <FilterData /> */}
      {/* <FilterDataEx /> */}
      {/* <FilteredName /> */}
      {/* <Nav1 /> */}
      {/* <Products1 /> */}
      {/* <Footer1 /> */}
      <Lifting
        Count={isCount}
        decrement={decrement}
        increment={increment}
        isNameMy={isNameMy}
      />
      {/* <ItemsScrollBar /> */}
      {/* <LocalStorageEx /> */}
      {/* <LocalStorageEx1 /> */}
    </div>
  );
}

export default App;
