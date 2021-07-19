import React from "react";
import PortfolioSection from "./portfolio-section.jsx";
import "./portfolio.scss";
import ProjectImg from "./project-img.jsx";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* Bellorose Design */}
      <div className="project-left proj-block">
        <div className="proj-content">
          <PortfolioSection
            projectTitle="Bellerose Interior Design"
            projectContent="Design for small business. 
            Bellerose wanted simple, clean and clear - 
            a place to showcase their work and allow 
            customers to easily reach them."
          />
          <p className="view-demo">
            <a
              href="https://www.figma.com/file/R9b2q6Sjup07RGAwSp1tdR/Bellerose-Interior-Design?node-id=0%3A1"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </p>
        </div>
        <div className="proj-image">
          <ProjectImg
            projImg="/images/bellerose-img.png"
            alt="bellerose real estate image"
          />
        </div>
      </div>
      {/* Flex Together */}
      <div className="project-right proj-block">
        <div className="proj-image">
          <ProjectImg
            projImg="/images/flex-together-img.png"
            alt="flex together image"
          />
        </div>
        <div className="proj-content">
          <PortfolioSection
            projectTitle="Flex Together"
            projectContent="
            A physical health app for seniors to schedule
            paired virtual training sessions with 
            compatible partners."
          />
          <p className="view-demo">
            <a
              href="https://flextogether.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Demo
            </a>
          </p>
        </div>
      </div>
      {/* </ExternalLink> */}
      <div className="project-left proj-block">
        <div className="proj-content">
          <PortfolioSection
            projectTitle="Storm Peak Engineering"
            projectContent="Informational site created for a small engineering 
            consulting firm. The clients wanted to be easily contacted and 
            for the user to clearly know services provided."
          />
          <p className="view-demo">
            <a
              href="https://www.stormpeakeng.com/"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </p>
        </div>
        <div className="proj-image">
          <ProjectImg
            projImg="/images/storm-peak-eng.png"
            alt="bellerose real estate image"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
