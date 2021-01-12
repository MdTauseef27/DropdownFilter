import React, { useState, useEffect } from "react";
import { Form, Navbar, Row, Col, FormControl } from "react-bootstrap";
const items = require("./Products.json");

export const Products1 = () => {
  //set and setState being initialized
  const [products, setProducts] = useState(items);
  const [category, setCategory] = useState("all");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  console.log("All Products", items);
  //e = event for the value when select changes
  const handleFilterChange = (e, filterType) => {
    //changes state
    switch (filterType) {
      case "category":
        setCategory(e.target.value);
        break;
      case "min":
        setMin(e.target.value);
        break;
      case "max":
        setMax(e.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let filteredProducts = items;

    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }
    if (min !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price > min
      );
    }
    if (max !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price < max
      );
    }
    setProducts(filteredProducts);
  }, [category, min, max]);
  return (
    <div>
      <Navbar bg="light" variant="dark">
        <Form>
          <Row>
            <Col lg="3">
              <Form.Label style={{ fontSize: "16px" }}>
                Choose a category:
              </Form.Label>
            </Col>
            <Col lg="3">
              <Form.Control
                as="select"
                name="category"
                id="category"
                onChange={(e) => handleFilterChange(e, "category")}
              >
                {" "}
                <option value="all">All</option>
                <option value="jacket">Jackets</option>
                <option value="jean">Jeans</option>
                <option value="pant">Pants</option>
                <option value="dress">Dresses</option>
                <option value="shoe">Shoes</option>
                <option value="sock">Socks</option>
                <option value="swimwear">Swimwear</option>
                <option value="handbag">Hand Bag</option>
                <option value="formalwear">Formal Wear</option>
                <option value="sweater">Sweater</option>
                <option value="hat">Hats</option>
                <option value="baby">Baby</option>
              </Form.Control>
            </Col>
            <Col lg="3">
              <Form.Control
                type="number"
                name="minPrice"
                onChange={(e) => handleFilterChange(e, "min")}
                placeholder="Min Price"
              />
            </Col>
            <Col lg="3">
              <Form.Control
                type="number"
                name="maxPrice"
                onChange={(e) => handleFilterChange(e, "max")}
                placeholder="Max Price"
              />
            </Col>
            {/* <Col lg="2">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-4"
                  onChange={(e) => handleFilterChange(e, "category")}
                />
              </Form>
            </Col> */}
          </Row>
        </Form>
      </Navbar>
      <div className="master--card">
        {products.map((item) => {
          return (
            <div className="card" style={{ backgroundColor: "#F8F9FA" }}>
              <h6 className="title" style={{ fontSize: "18px" }}>
                {item.title}
              </h6>
              <img src={item.cover} alt={item.title} />

              <p className="description" style={{ marginTop: "10px" }}>
                {item.description}
              </p>
              <p className="price">${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export default Products;
