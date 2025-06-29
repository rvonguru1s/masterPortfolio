import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div
        className="screen"
        style={{ backgroundColor: props.theme?.splashBg || "#030c2d" }}
      >
        <LoaderLogo theme={props.theme} />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    // 15 characters * 0.15s delay + 0.4s animate + buffer
    this.id = setTimeout(() => this.setState({ redirect: true }), 1900);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
