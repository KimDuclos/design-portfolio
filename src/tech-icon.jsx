import React from "react";

const TechIcon = () => {
  return (
    <div className="tech-icon">
      <div className="icon">{props.icon}</div>
      <div className="icon-link">{props.iconLink} </div>
    </div>
  );
};

export default TechIcon;
