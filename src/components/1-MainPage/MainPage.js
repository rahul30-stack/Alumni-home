import React from "react";
import Login from "../login/login";
import "./MainPage.css";

const MainPage = () => {
  return (
    <section id="main">
      <div className="container">
        <ul className="list-main">
          <li>
            
              <a href="#" className="fab fa-facebook" />
            
          </li>
          <li>
            
              <a href="#" className="fab fa-twitter" />
            
          </li>
          <li>
            
              <a href="#" className="fab fa-instagram" />
            
          </li>
          <li>
            
              <a href="#" className="fab fa-linkedin" />
            
          </li>
        </ul>

        <div className="head">
          <div className="box"></div>
          <h2>
            National Institute of Technology, <br /> Hamirpur
          </h2>
          <h1>
            <span>ALUMNI</span> PORTAL
          </h1>
        </div>
      </div>
      <div className="animation-wrapper">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
    </section>
  );
};

export default MainPage;
