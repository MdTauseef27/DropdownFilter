import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import imgLogo from "../Components/Image/main1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
export const CardExample = () => {
  const [isShow, setISShow] = useState("true");
  return (
    <div>
      {isShow && (
        <Card style={{ width: "300px", height: "300px" }}>
          <Card.Img
            style={{ width: "100px", height: "100px" }}
            src={imgLogo}
            alt=""
          ></Card.Img>
          <Card.Body>
            <Card.Title>Click To Hide</Card.Title>
            <Card.Text>
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content Some quick example text to build on the
              card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      )}
      <br></br>
      <Button variant="primary" onClick={() => setISShow(!isShow)}>
        Click ME
      </Button>
      <Button>Ok</Button>
    </div>
  );
};
