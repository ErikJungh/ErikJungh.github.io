import React from "react";
import { Button } from "./Button";
import "./Footer.css";

function Footer(props) {
  return (
    <div className={props.class}>
      <h1 className={props.titleclass}>Thanks for visiting my website!</h1>
      <h1 className={props.subtitleclass}>You can check out more stuff here</h1>
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
