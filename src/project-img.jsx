import React from "react";
import "./proj-img.scss";

const ProjectImg = (props) => {
  return (
    <div className="proj-image">
      <img src={props.projImg} alt={props.imgText} />
    </div>
  );
};

export default ProjectImg;
