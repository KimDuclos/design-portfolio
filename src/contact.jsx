import React from "react";
import SocialIcons from "./social-icons.jsx";
import TechSkills from "./tech-skills.jsx";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="email" id="contact">
        <a href="mailto:kimduclos@gmail.com">kimduclos@gmail.com</a>
      </div>
      <div className="blurb">
        Always down to collab, open to everything freelance through full-time.
        I'm hoping to continue the dig into human-tech connections. Let's get in
        touch.
      </div>
      <div className="social-icons">
        <a href="http://www.github.com/KimDuclos">
          <SocialIcons icon="/images/github-icon.png" alt="github icon" />
        </a>
        <div href="http://www.linkedin.com/in/KimDuclos">
          <SocialIcons icon="/images/linkedin-icon.png" alt="linkedin icon" />
        </div>
        {/* <div href="http://www.dribble.com/KimDuclos">
          <SocialIcons icon="/images/dribble-icon.png" alt="dribble icon" />
        </div> */}
      </div>
      <div className="skills-section">
        <TechSkills />
      </div>
      <p className="copyright">Copyright &copy; Kim Duclos</p>
    </div>
  );
};

export default Contact;
