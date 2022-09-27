import React from "react";

function Card({ person, img, msg }) {
  return (
    <span className="card">
      <img src={img} className="director-img" />
        <h2 className="person">{person}'s Message</h2>
        <p className = "details">{msg}</p>
    </span>
  );
}

export default Card;
