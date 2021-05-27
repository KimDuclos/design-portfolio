import React from "react";
import "./tech-icon.scss";

const TechIcon = (props) => {
  return (
    <div className="tech-icon">
      <img src={props.techIcon} alt={props.techIconAlt} />
    </div>
  );
};

export default TechIcon;
