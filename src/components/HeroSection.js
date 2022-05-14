import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Erik Junghahn</h1>
      <p> Fullstack software engineer</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle={"btn--outline"}
          buttonSize={"btn--large"}
        >
          To My Portfolio
        </Button>
        <Button
          className="btns"
          buttonStyle={"btn--primary"}
          buttonSize={"btn--large"}
        >
          About Me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
