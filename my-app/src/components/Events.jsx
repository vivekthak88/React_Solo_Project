import axios from "axios";
import React, { useState } from "react";
import EventCard from "./EventCard";
import { Col, Row } from "react-bootstrap";

export default function Events() {
  const [searchInput, setSearchInput] = useState("");
  const [EventData, setEventData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.seatgeek.com/2/events?q=${searchInput}&per_page=15&client_id=MjE3NTkxNTd8MTYxODk0NzQ1NS42NzczMDgz`
      )
      .then((response) => response.data)
      .then((data) => setEventData(data.events));
  };
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <h1>EventFindrrr</h1>
      <form onSubmit={handleSubmit}>
        <input required type="text" onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <div className= "event-container">
      <Row>
          {EventData &&
            EventData.map((event, index) => {
              return (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={4}
                  className="mb-4"
                >
                  <EventCard key={index} event={event} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}

