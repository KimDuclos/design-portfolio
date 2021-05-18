import React from "react";
import PortfolioSection from "./portfolio-section.jsx";
// import { ExternalLink } from "react-external-link";
import "./portfolio.scss";
import ProjectImg from "./project-img.jsx";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div></div>
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
              href="https://belleroseinteriordesign.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Demo
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
      {/* <div className="project-left proj-block">
        <div className="proj-content">
          <PortfolioSection
            projectTitle="SMA Real Estate"
            projectContent="A real estate aggregation site made to collect
            regional listings in one location. Users are lead
            to participating agencies where they will view
            housing specifically listed for included agents"
          />
        </div>
        <div className="proj-image">
          <ProjectImg
            projImg="/images/sma-real-estate-img.png"
            alt="sma real estate image"
          />
        </div>
      </div> */}
      {/* <div className="project-right proj-block">
        <div className="proj-image">
          <ProjectImg projImg="/images/pace-partner-img.png" />
        </div>
        <PortfolioSection
          id="project-right"
          projectTitle="Pace Partner"
          projectContent="An app to encourage safety among runners
          by pairing up."
        />
      </div> */}
    </div>
  );
};

export default Portfolio;
