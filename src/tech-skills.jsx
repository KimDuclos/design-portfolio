import React from "react";
import TechIcon from "./tech-icon.jsx";
import "./tech-skills.scss";

const TechSkills = () => {
  return (
    <div className="tech-skills">
      <TechIcon icon="/images/react-logo.svg" />
      <TechIcon icon="/images/js-logo.svg" />
      <TechIcon icon="/images/node-logo.svg" />
      <TechIcon icon="/images/sass-logo.svg" />
      <TechIcon icon="/images/less-logo.svg" />
      <TechIcon icon="/images/html-logo.svg" />
      <TechIcon icon="/images/css-logo.svg" />
    </div>
  );
};

export default TechSkills;
