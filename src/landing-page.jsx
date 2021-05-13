import React from "react";
import Circles from "./components/circle-animation.jsx";
import "./landing-page.scss";

const LandingPage = () => {
  return (
    <div className="land-page">
      <div className="background">
        <div>
          <h1>Hi, I'm Kim.</h1>
        </div>
        <div className="par-1">
          <p>
            I'm a UX/UI Designer and Developer fascinated by the human
            connection to the online social world.
          </p>
        </div>
        <div className="par-2">
          <p>
            Currently based in the Greater Seattle Area, designing new
            experiences for consumers and propietary web and mobile
            applications.
          </p>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default LandingPage;
