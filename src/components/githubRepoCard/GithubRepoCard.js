import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    if (url) {
      const win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div
      className="repo-card-div"
      style={{ backgroundColor: theme.highlight }}
      onClick={() => openRepoinNewTab(repo.url)}
    >
      <Fade bottom duration={2000} distance="40px">
        <div className="repo-name-div">
          <svg
            aria-hidden="true"
            className="octicon repo-svg"
            height="16"
            role="img"
            viewBox="0 0 12 16"
            width="12"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            ></path>
          </svg>
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>

        <p className="repo-description" style={{ color: theme.secondaryText }}>
          {repo.description}
        </p>

        {repo.languages && (
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        )}
      </Fade>
    </div>
  );
}
