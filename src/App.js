import logo from "./logo.svg";
import "./App.css";
import { DropdownFilter } from "./Components/DropdownFilter";
import { CardExample } from "./Components/CardExample";
import { FilterData } from "./Components/FilterData";
import { FilterDataEx } from "./Components/FilterDataEx";
import { FilteredName } from "./Components/FilteredName";

import Products from "./Components/Products";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      {/* <DropdownFilter /> */}
      {/* <CardExample /> */}
      {/* <FilterData /> */}
      {/* <FilterDataEx /> */}
      {/* <FilteredName /> */}
      <Nav />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
