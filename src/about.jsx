import React from "react";
import AboutPhotos from "./about-photos.jsx";
import "./about.scss";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="photos">
        <AboutPhotos
          profPhoto="/images/profile-1.png"
          profPhotoAlt="profile photo"
        />
        <div className="photo-2">
          <AboutPhotos
            profPhoto="/images/profile-2.png"
            profPhotoAlt="profile photo"
          />
        </div>
        <div className="photo-3">
          <AboutPhotos
            profPhoto="/images/profile-3.png"
            profPhotoAlt="profile photo"
          />
        </div>
      </div>
      <div className="about-content">
        <div className="about-title">From IT to UX and Development</div>
        <p>
          Hey there, I'm Kim - a designer, developer, and researcher. Stemming
          from my background in user-end IT support, I developed a love for the
          connection between the user and all types of technology.
        </p>
        <p>
          Since changing careers and entering the world of web design, I've
          applied what I know about the human-technology connection to my app
          and website creations.
        </p>
        <p>
          Outside of design and code, I love sailing, running, mountain
          biking and snowboarding. Recently, I decided to quit ski lifts and got
          a splitboard up so I could walk up the mountains instead. I like a
          challenge.
        </p>
      </div>
    </div>
  );
};

export default About;
