import React from "react";
import { Card } from "react-bootstrap";

export default function EventCard(props) {
  console.log(props.event);
  return (
    <div className="event-card-container">
      <Card className="event-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.events[0].performers[0].image} />
        <Card.Body>
          <Card.event.performers.name>
            {props.events[0].performers[0].name}
          </Card.event.performers.name>
          <Card.event.performers.type>
            {props.events[0].performers[0].type}
          </Card.event.performers.type>
        </Card.Body>
      </Card>
    </div>
  );
}
