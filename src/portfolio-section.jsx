import React from "react";
import "./portfolio-section.scss";
 
const PortfolioSection = (props) => {
 return (
   <div>
     <div className="project-title">{props.projectTitle}</div>
     <div className="project-content">{props.projectContent}</div>
   </div>
 )
};
 
export default PortfolioSection;