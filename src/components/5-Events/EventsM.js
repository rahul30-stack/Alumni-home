import React, { useState } from "react";
import "./Events.css";
import data from "./EventData";
function EventsM() {
  const d = new Date();
  let month = d.getMonth();
  let year = d.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentEvent, setCurrentEvent] = useState("Event Description");
  return (
    <section className="events">
      <h1 className="event-heading">Events</h1>
      <article>
        <h2 className="current-month">
          {months[month]}' {year}
        </h2>
        <p className="current-event">{currentEvent}</p>
      </article>
      <div className="calender">
        {data.map((event, index) => {
          if (index < 7) {
            return (
              <div
                key={event.date}
                className="event-card"
                onClick={() => {
                  setCurrentEvent(event.event_description);
                }}
              >
                <h2 className="event-date">{event.date}</h2>
                <p className="event-title">{event.event_title}</p>
                <button className="event-btn">Check it Out</button>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default EventsM;
