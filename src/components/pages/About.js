import React from "react";
import "../../App.css";
import "./About.css";
import Footer from "../Footer";
import IKnow from "../IKnow";

import PhotoDisplay from "../PhotoDisplay";
function About() {
  return (
    <>
      <div className="about">
        <div className="titles_container">
          <h1 className="about_title">This,</h1>
          <h2 className="about_subtitle">Is me</h2>
        </div>
        <div className="about_img_container">
          <PhotoDisplay
            srcs={["images/img-9.jpg", "images/img-8.jpg", "images/img-7.jpg"]}
            texts={["text1", "text2", "text3"]}
          />
          <div className="photo_container">
            <p className="photo_text">
              I'm an IT student from Sweden who loves software development with
              a passion. Ever since using family computer as a child I've always
              found a lot of joy in tinkering with technology. My passion for IT
              probably began as early as 13 years old when I would host and mod
              game servers for me and my friends to play on. Ever since then
              I've never backed down from any sort of IT challenge.
            </p>
          </div>
          <PhotoDisplay
            srcs={["images/img-9.jpg", "images/img-8.jpg", "images/img-7.jpg"]}
            texts={["text1", "text2", "text3"]}
          />
          <div className="photo_container">
            <p className="photo_text">
              Currently I'm pursuing my masters in software development at
              Uppsala University and also at the same time doing my best to have
              as much fun as possible. I love making people laugh and have fun
              and have therefor regularly been hosting competitions and games
              with special emphasis on creativity and sometimes making a mess.
            </p>
          </div>
          <PhotoDisplay
            srcs={["images/img-9.jpg", "images/img-8.jpg", "images/img-7.jpg"]}
            texts={["text1", "text2", "text3"]}
          />
          <div className="photo_container">
            <p className="photo_text">
              I'm a very dedicated person with a huge apetite for learning new
              things and have a tendancy of getting very invested when finding
              something new that I find interesting. This website for example
              was written and designed as my first ever project in React.js in 3
              days without the use of any imported widgets and I had a blast
              doing so!
            </p>
          </div>
          <h1 className="know_header">I Know</h1>
          <IKnow />

          <Footer
            class="footer_container_about"
            titleclass="footer_title_about"
            subtitleclass="footer_subtitle_about"
            primary_destination="/Portfolio"
            primary_text="My Portfolio"
            secondary_destination="/Contact"
            secondary_text="Contact Me"
          />
        </div>
      </div>
    </>
  );
}

export default About;
