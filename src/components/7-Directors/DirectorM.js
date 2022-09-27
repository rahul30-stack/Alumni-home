import React from "react";
import Card from "./Card";
import messages from "./messages";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

function DirectorM() {
  return (
    <div className="director-container">
      <Carousel className="carousel" variant="dark" prevLabel="" nextLabel="">
        {messages.map((message, idx) => {
          return (
            <CarouselItem key={idx}>
              <Card
                img={message.img}
                person={message.person}
                msg={message.msg}
              />
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
}

export default DirectorM;
