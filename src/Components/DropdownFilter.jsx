import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "react-dropdown/style.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export const DropdownFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [rowdata, setRowData] = useState([
    { value: 1, lable: "Chair", category: 2 },
    { value: 2, lable: "Laptop", category: 2 },
    { value: 3, lable: "Bed", category: 1 },
    { value: 4, lable: "Fan", category: 1 },
    { value: 5, lable: "Keyboard", category: 2 },
    { value: 6, lable: "Sofa", category: 1 },
    { value: 7, lable: "TV", category: 2 },
    { value: 8, lable: "Bat", category: 3 },
    { value: 9, lable: "AC", category: 1 },
  ]);
  const [filteredData, setFilteredData] = useState([]);
  const categories = [
    { label: "Furniture and Home", value: 1 },
    { label: "Electronic", value: 2 },
    { label: "Sports", value: 3 },
  ];

  useEffect(() => {
    console.log("Selected Categor::", selectedCategory.value, "---", rowdata);
    const filtered = rowdata.filter(
      (item) => item.category == selectedCategory.value
    );
    console.log("filteredData====>", filtered);
    setFilteredData(filtered);
  }, [selectedCategory]);

  return (
    <div>
      <Dropdown options={categories} onChange={(e) => setSelectedCategory(e)} />
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={filteredData}>
          <AgGridColumn field="value"></AgGridColumn>
          <AgGridColumn field="lable"></AgGridColumn>
          <AgGridColumn field="category"></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
};
