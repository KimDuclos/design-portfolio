import React from "react";
import "./social-icons.scss";

const SocialIcons = (props) => {
  return (
      <img className="social-icon" src={props.icon} alt={props.altText} />
  );
};

export default SocialIcons;
