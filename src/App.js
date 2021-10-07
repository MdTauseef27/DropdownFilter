import React, { useState } from "react";
import "./App.css";
import { DropdownFilter } from "./Components/DropdownFilter";
import { CardExample } from "./Components/CardExample";
import { FilterData } from "./Components/FilterData";
import { FilterDataEx } from "./Components/FilterDataEx";
import { FilteredName } from "./Components/FilteredName";
import { DropdownExamples } from "./Components/DropdownExamples";
import { Products1 } from "./Components/Products1";
import { Nav1 } from "./Components/Nav1";
import { Footer1 } from "./Components/Footer1";
import { Lifting } from "./Components/Lifting";
import { ItemsScrollBar } from "./Components/ItemsScrollBar";
import { LocalStorageEx } from "./Components/LocalStorageEx";
import { LocalStorageEx1 } from "./Components/LocalStorageEx1";
import { Practice } from "./Components/Practice";
import { BasicExamples } from "./Components/BasicExamples";
function App() {
  return (
    <div>
      {/* <DropdownFilter /> */}
      {/* <DropdownExamples /> */}
      <CardExample />
      {/* <FilterData /> */}
      {/* <FilterDataEx /> */}
      {/*<FilteredName />*/}
      {/* <Nav1 /> */}
      {/* <Products1 /> */}
      {/* <Footer1 /> */}
      {/* <Lifting /> */}
      {/* <ItemsScrollBar /> */}
      {/* <LocalStorageEx /> */}
      {/* <LocalStorageEx1 /> */}
      {/* <Practice /> */}
      <BasicExamples />
    </div>
  );
}

export default App;
