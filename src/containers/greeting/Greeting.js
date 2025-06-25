import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>
            <SocialMedia theme={theme} />
            <div className="portfolio-repo-btn-div">
              <Button
                text="⭐ Star Me On Github"
                newTab={true}
                href={greeting.portfolio_repository}
                theme={theme}
              />
            </div>
          </div>

          {/* Woman illustration with slightly bigger size */}
          <div className="greeting-image-div">
            <img
              src={`${process.env.PUBLIC_URL}/icons/WOMAN1.png`}
              alt="Rishika illustration"
              style={{
                width: "820px", // Slightly bigger
                height: "auto",
                borderRadius: "15px",
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
