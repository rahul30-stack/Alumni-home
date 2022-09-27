import React from "react";

function Icon({href, icon}) {
  return (
      <span className="contact-icon">
        <a href={href} className={icon}></a>
      </span>
  );
}

export default Icon;
