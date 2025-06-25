import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

// Import logos statically
import semoLogo from "../../assets/images/semo_logo.png";
import sietLogo from "../../assets/images/SIET.png";

// Map logo filenames to imported images
const imageMap = {
  "semo_logo.png": semoLogo,
  "SIET.png": sietLogo,
};

class DegreeCard extends Component {
  render() {
    const { degree, theme } = this.props;

    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  width: "160px", // Oval shape width
                  height: "110px", // Oval shape height
                  borderRadius: "50%", // Make it oval
                  objectFit: "cover", // Prevent distortion
                  transform: "scale(1.2)",
                  border: "2px solid #ccc", // Optional border
                }}
                src={imageMap[degree.logo_path]}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        )}

        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div>

            <div className="body-content">
              {degree.descriptions.map((sentence, index) => (
                <p
                  key={index}
                  className="content-list"
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              ))}

              {degree.website_link && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
