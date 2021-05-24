import React from "react";
import "./tech-icon.scss";

const TechIcon = (props) => {
  return (
    <div>
      <div className="icon">{props.icon}</div>
      <div className="icon-link">{props.iconLink} </div>
    </div>
  );
};

export default TechIcon;
