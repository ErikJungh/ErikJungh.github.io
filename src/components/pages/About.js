import React from "react";
import "../../App.css";
import "./About.css";
import Footer from "../Footer";

import PhotoDisplay from "../PhotoDisplay";
function About() {
  return (
    <>
      <div className="about">
        <div className="titles_container">
          <h1 className="portfolio_title">This,</h1>
          <h2 className="portfolio_subtitle">Is me</h2>
        </div>
        <div className="about_img_container">
          <PhotoDisplay
            srcs={["images/img-9.jpg", "images/img-8.jpg", "images/img-7.jpg"]}
            texts={["text1", "text2", "text3"]}
          />
          <div className="photo_container">
            <p className="photo_text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse{" "}
            </p>
          </div>
          <PhotoDisplay
            srcs={["images/img-9.jpg", "images/img-8.jpg", "images/img-7.jpg"]}
            texts={["text1", "text2", "text3"]}
          />
          <div className="photo_container">
            <p className="photo_text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse{" "}
            </p>
          </div>
          <PhotoDisplay
            srcs={["images/img-9.jpg", "images/img-8.jpg", "images/img-7.jpg"]}
            texts={["text1", "text2", "text3"]}
          />
          <div className="photo_container">
            <p className="photo_text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse{" "}
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
