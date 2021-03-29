import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "react-dropdown/style.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Form, Col } from "react-bootstrap";

export const DropdownExamples = () => {
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [isShow, setISShow] = useState("true");
  const [filteredData, setFilteredData] = useState([]);
  const categories = [
    { label: "Sensor", value: 1 },
    { label: "Moter", value: 2 },
    { label: "Relay", value: 3 },
  ];

  return (
    <div>
      <Dropdown options={categories} onClick={() => setISShow(!isShow)} />
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        {isShow && (
          <Form>
            <Form.Control type="text" placeholder="Sensor Id" />

            <Form.Control type="text" placeholder="Sensor Name" />
          </Form>
        )}
        <Form>
          <Form.Control type="text" placeholder="Moter Id" />

          <Form.Control type="text" placeholder="Moter Name" />
        </Form>
        <Form>
          <Form.Control type="text" placeholder="Relay Id" />

          <Form.Control type="text" placeholder="Relay Name" />
          <Form.Control type="text" placeholder="Modules" />
        </Form>
      </div>
    </div>
  );
};
