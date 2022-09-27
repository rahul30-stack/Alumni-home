import React from "react";
import "./Director.css";
import Card from "./Card";
import messages from "./messages";

function Director() {
  return (
    <section className="director-container" style={{ marginLeft: "5vw" }}>
      <h1 className="director-heading">From the Desk</h1>
      {messages.map((message, idx) => {
        return (
          <span className="director-cards" key={idx}>
            <Card img={message.img} person={message.person} msg={message.msg} />
          </span>
        );
      })}
    </section>
  );
}

export default Director;
