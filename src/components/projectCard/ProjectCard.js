import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";

const ProjectCard = ({ project, theme }) => {
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="project-card">
        <div className="project-card-content">
          {/* Removed image section */}

          <div className="project-details">
            <h2 style={{ color: theme.text }}>{project.name}</h2>
            <p style={{ color: theme.secondaryText }}>{project.description}</p>

            {project.features && (
              <ul className="project-features">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

            {project.logos && <ProjectLanguages logos={project.logos} />}

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
