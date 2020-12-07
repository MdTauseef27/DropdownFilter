import React, { useState } from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewGroup } from "../State/Action/groups";
export const Discover = ({ CurrentItem }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [isShowCard, setISShowCard] = useState(true);
  const handleShow = () => setShowMessage(true);
  const dispatch = useDispatch();
  const handleOnCreateGroup = () => {
    setISShowCard(false);
    dispatch(addNewGroup(CurrentItem.title));
  };

  return (
    <div style={{ width: "300px" }}>
      {isShowCard && (
        <Card style={{ marginTop: "15px", marginLeft: "0px", width: "562px" }}>
          <Row>
            <Col sm={2}>
              <Card.Img
                variant="top"
                src={CurrentItem.image}
                style={{ width: "40px", marginLeft: "5px" }}
              />
            </Col>
            <Col sm={7}>
              <Card.Text>{CurrentItem.title}</Card.Text>
              <Card.Text style={{ fontSize: "8px", paddingTop: "0px" }}>
                {CurrentItem.descp}
              </Card.Text>
            </Col>
            <Col sm={3}>
              <Button
                style={{ marginTop: "15px" }}
                variant="primary"
                onClick={handleShow}
              >
                Join
              </Button>
              <Modal show={showMessage} onHide={handleOnCreateGroup}>
                <Modal.Header style={{ marginLeft: "90px" }} closeButton>
                  You Have Joined {CurrentItem.title} Group.
                </Modal.Header>
              </Modal>
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
};
