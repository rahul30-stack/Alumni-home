import React from "react";
import "./sidebar.css";
import group from "./icons/group.png";
import calendar from "./icons/calendar.png";
import information from "./icons/information.png";
import memories from "./icons/memories.svg";
import newspaper from "./icons/newspaper.png";
import NITH from "./icons/nith.png";
const SideBar = () => {
  return (
    <div className="sidebar">
        <li id="top">
          <a href="#Home" className="nith">
            <img src={NITH} id="nith" />
          </a>
          <span className="tooltip">Home</span>
        </li>
      <ul className="nav-list">
        <li>
          <a href="#Info">
            <img src={information} className="logo" />
          </a>
          <span className="tooltip">Information</span>
        </li>
        <li>
          <a href="#News">
            <img src={newspaper} className="logo" />
          </a>
          <span className="tooltip">News</span>
        </li>
        <li>
          <a href="#Events">
            <img src={calendar} className="logo" />
          </a>
          <span className="tooltip">Events</span>
        </li>
        <li>
          <a href="#Memories">
            <img src={memories} className="logo" />
          </a>
          <span className="tooltip">Memories</span>
        </li>
        <li>
          <a href="#Direc">
            <img src={group} className="logo" />
          </a>
          <span className="tooltip">Director's Message</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
