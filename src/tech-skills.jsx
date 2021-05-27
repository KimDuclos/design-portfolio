import React from "react";
import TechIcon from "./tech-icon.jsx";
import "./tech-skills.scss";

const TechSkills = () => {
  return (
    <div className="tech-skills">
      <TechIcon techIcon="/images/react-logo.svg" />
      <TechIcon techIcon="/images/js-logo.svg" />
      <TechIcon techIcon="/images/node-logo.svg" />
      <TechIcon techIcon="/images/sass-logo.svg" />
      <TechIcon techIcon="/images/less-logo.svg" />
      <TechIcon techIcon="/images/html-logo.svg" />
      <TechIcon techIcon="/images/css-logo.svg" />
    </div>
  );
};

export default TechSkills;
