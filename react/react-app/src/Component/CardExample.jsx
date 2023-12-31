import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button } from "react-bootstrap";

export default function CardExample(props) {
  return (
    <>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.imgsrc} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.Sname}</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
