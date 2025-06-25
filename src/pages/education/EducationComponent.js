import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { certifications, techSites } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={theme} />

        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              {/* Cap image on the left */}
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>

              {/* Heading + Subheading + Logos on the right */}
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualifications and Certifications
                </h3>
                <div className="competitive-sites-wrapper">
                  <CompetitiveSites logos={techSites} />
                </div>
              </div>
            </div>
          </Fade>

          <Educations theme={theme} />

          {certifications && certifications.certifications.length > 0 && (
            <Certifications theme={theme} />
          )}
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Education;
