import React from "react";
import "./about-photos.scss";

const AboutPhotos = (props) => {
  return (
    <div className="prof-photos">
      <img src={props.profPhoto} alt={props.profPhotoAlt} />
    </div>
  );
};

export default AboutPhotos;
