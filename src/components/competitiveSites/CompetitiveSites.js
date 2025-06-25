import React from "react";
import { Icon } from "@iconify/react";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {this.props.logos?.map((logo) => (
          <a
            key={logo.siteName}
            href={logo.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Icon
              icon={logo.iconifyClassname}
              style={{ fontSize: "30px", color: logo.style.color }}
            />
            <span style={{ marginTop: "8px", color: "#333" }}>
              {logo.siteName}
            </span>
          </a>
        ))}
      </div>
    );
  }
}

export default CompetitiveSites;
