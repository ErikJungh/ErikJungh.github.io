import React from "react";
import "../../App.css";
import "./Portfolio.css";
import { Link as LinkScroll } from "react-scroll";
import Lottie from "react-lottie-player";
import lottieJson from "./98428-arrow-down-purple.json";
import Footer from "../Footer";
import { Button } from "../Button";

import TimeLine from "../TimeLine";
function Experience() {
  return (
    <>
      <div className="experience">
        <div className="titles_container">
          <h1 className="experience_title">My</h1>
          <h2 className="experience_subtitle">Experience</h2>
        </div>
        <div className="lottie_container">
          <LinkScroll to="timeline" spy={true} smooth={true}>
            <Lottie
              className="lottie"
              loop
              animationData={lottieJson}
              play
              style={{ width: 150, height: 150 }}
            />
          </LinkScroll>
        </div>
        <div className="contact_button_container">
          <Button
            destination={"/Contact"}
            className="btns"
            buttonStyle={"btn--primary"}
            buttonSize={"btn--large"}
          >
            Contact me
          </Button>
        </div>
      </div>
      <div className="experience_container" id="timeline">
        <h1 className="experience_timeline_title">
          Have a look at what I've been up to!
        </h1>
        <TimeLine />
      </div>
      <Footer
        class="footer_container_experience"
        titleclass="footer_title_experience"
        subtitleclass="footer_subtitle_experience"
        primary_destination="\Portfolio"
        primary_text="My Portfolio"
        secondary_destination="\About"
        secondary_text="About Me"
      />
    </>
  );
}

export default Experience;
