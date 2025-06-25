import React from "react";
import { Icon } from "@iconify/react";
import "./ProjectLanguages.css";

const ProjectLanguages = ({ logos }) => {
  return (
    <div className="project-tech-icons">
      {logos.map((logo, i) => (
        <div key={i} className="tech-icon">
          <Icon icon={logo.iconifyClass} width="30" height="30" />
          <span>{logo.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectLanguages;
