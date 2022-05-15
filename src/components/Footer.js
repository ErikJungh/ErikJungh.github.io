import React from "react";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <h1 className="footer_title">Thanks for visiting my website!</h1>
      <h1 className="footer_subtitle">You can check out more stuff here</h1>
      <div className="button_container">
        <Button
          destination={"/portfolio"}
          className="btns"
          buttonStyle={"btn--outline"}
          buttonSize={"btn--large"}
        >
          To My Portfolio
        </Button>
        <Button
          destination={"/about"}
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

export default Footer;
