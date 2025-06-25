import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { degrees, techSites } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="main" id="educations">
        {/* ✅ Only use this top-right section now */}
        <Fade bottom duration={2000} distance="20px">
          <div className="education-top-right-wrapper"></div>
        </Fade>

        {/* ✅ Degree cards section */}
        <h2 className="degrees-sub-header">Degrees Received</h2>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => (
            <DegreeCard key={degree.title} degree={degree} theme={theme} />
          ))}
        </div>
      </div>
    );
  }
}

export default Educations;
