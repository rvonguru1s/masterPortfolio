import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  event.target.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  event.target.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "/home";

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}>&lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label>

          <ul className="menu" style={{ backgroundColor: theme.body }}>
            {[
              { to: "/home", text: "Home" },
              { to: "/education", text: "Education" },
              { to: "/experience", text: "Experience" },
              { to: "/projects", text: "Projects" },
              { to: "/contact", text: "Contact Me" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  style={{ color: theme.text }}
                  onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </header>
      </Fade>
    );
  }
}

export default Header;
