import React from "react";
import "./AppDisplay.css";
import AppCards from "./AppCards";

function AppDisplay(props) {
  return (
    <>
      <div className="display_container" id={props.styleprop}>
        <div className={props.styleprop}>
          <h1 className="timeframe">{props.timeframe}</h1>
          <div className="title_container">
            <h1 className="title">{props.title}</h1>
            <img className="title_icon" src={props.logo} alt="icon"></img>
          </div>
          <h2 className="subtitle">{props.subtitle}</h2>
        </div>
        <div className="appcards_container">
          <AppCards
            title={props.title}
            about1={props.about1}
            about2={props.about2}
            cardsources={props.cardsources}
            cardtexts={props.cardtexts}
            cardtags={props.cardtags}
          ></AppCards>
        </div>
      </div>
    </>
  );
}

export default AppDisplay;
