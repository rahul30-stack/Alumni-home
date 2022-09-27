import React, { useState } from "react";
import "./Events.css";
import data from "./EventData";
function Events() {
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
      <div className="calender-days">
        <div className="week-card">Mon</div>
        <div className="week-card">Tue</div>
        <div className="week-card">Wed</div>
        <div className="week-card">Thu</div>
        <div className="week-card">Fri</div>
        <div className="week-card">Sat</div>
        <div className="week-card">Sun</div>
      </div>
      <div className="calender">
        {data.map((event) => {
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
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Events;
