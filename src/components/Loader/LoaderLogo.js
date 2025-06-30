import React from "react";
import "./LoaderLogo.css";

const name = "Rishika Vonguru";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme || { body: "#ffffff" };

    return (
      <div className="loader-container">
        <svg
          className="hex-logo"
          viewBox="0 0 440 305"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="myHexagon outer"
            d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
            stroke={theme.body}
            strokeWidth="4"
            fill="none"
          />
          <path
            className="myHexagon inner"
            d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
            stroke={theme.body}
            strokeWidth="4"
            fill="none"
          />

          <text x="185" y="150" className="rv-outline">
            R
          </text>
          <text x="220" y="140" className="rv-outline">
            V
          </text>
        </svg>

        <div
          className="animated-name"
          style={{
            fontFamily: "Agustina, cursive",
            fontSize: "64px",
            marginTop: "-10px",
            color: "white",
          }}
        >
          {name.split("").map((char, index) => (
            <span
              key={index}
              className="type-char"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default LogoLoader;
