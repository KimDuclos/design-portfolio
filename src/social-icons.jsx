import React from "react";
import "./social-icons.scss";

const SocialIcons = (props) => {
  return (
    <div className="social-icon">
      <img src={props.icon} alt={props.altText} />
    </div>
  );
};

export default SocialIcons;
