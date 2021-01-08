import React from "react";
import {
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";

export const Nav1 = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Shopping</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#contacts">Contacts</Nav.Link>
        </Nav>
      </Navbar>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Shopping</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#contacts">Contacts</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar> */}

      {/* <nav>
        <ul>
          <li>
            <img
              className="logo"
              src="/ProductImages/The-Plug-Logo.jpg"
              alt="The Plug Logo"
            />
          </li>
          <li>
            <a className="navbutton" href="home.html">
              Home
            </a>
          </li>
          <li className="active">
            <a class="navbutton" href="products.html">
              Products
            </a>
          </li>
          <li>
            <a className="navbutton" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};
