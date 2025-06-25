import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

// Static logo imports
import awsLogo from "../../assets/images/AWS.png";
import aicteLogo from "../../assets/images/AICTE.png";
import ibmLogo from "../../assets/images/ibm_logo.png";
import kodnestLogo from "../../assets/images/KODNEST.png";

// Map logos
const imageMap = {
  "AWS.png": awsLogo,
  "AICTE.png": aicteLogo,
  "ibm_logo.png": ibmLogo,
  "KODNEST.png": kodnestLogo,
};

class CertificationCard extends Component {
  render() {
    const { certificate, theme } = this.props;

    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            {certificate.certificate_link ? (
              <a
                href={certificate.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  style={{ backgroundColor: certificate.color_code }}
                >
                  <img
                    className="logo_img"
                    src={imageMap[certificate.logo_path] || awsLogo}
                    alt={certificate.alt_name}
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Certificate
                  </h3>
                </div>
              </a>
            ) : (
              <div>
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  style={{ backgroundColor: certificate.color_code }}
                >
                  <img
                    className="logo_img"
                    src={imageMap[certificate.logo_path] || awsLogo}
                    alt={certificate.alt_name}
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: theme.body }}>
                    Certificate
                  </h3>
                </div>
              </div>
            )}
          </div>

          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
