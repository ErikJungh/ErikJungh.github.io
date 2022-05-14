import React from "react";
import AppCardItem from "./AppCardItem";
import "./AppCards.css";

function AppCards(props) {
  return (
    <div className=" cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <AppCardItem
              src={props.cardsources[0]}
              text={props.cardtexts[0]}
              label={props.cardtags[0]}
              path="Portfolio"
              video={true}
            />

            <AppCardItem
              src={props.cardsources[1]}
              text={props.cardtexts[1]}
              label={props.cardtags[1]}
              path="Portfolio"
              video={true}
            />
          </ul>
          <h1>About {props.title}</h1>
          <div className="about_container">
            <p className="about_text">{props.about}</p>
          </div>
          <ul className="cards__items">
            <AppCardItem
              src={props.cardsources[2]}
              text={props.cardtexts[2]}
              label={props.cardtags[2]}
              path="Portfolio"
            />
            <AppCardItem
              src={props.cardsources[3]}
              text={props.cardtexts[3]}
              label={props.cardtags[3]}
              path="Portfolio"
            />
            <AppCardItem
              src={props.cardsources[4]}
              text={props.cardtexts[4]}
              label={props.cardtags[4]}
              path="Portfolio"
            />
          </ul>
          {props.cardsources[5] ? (
            <ul className="cards__items">
              <AppCardItem
                src={props.cardsources[5]}
                text={props.cardtexts[5]}
                label={props.cardtags[5]}
                path="Portfolio"
                video={true}
              />

              <AppCardItem
                src={props.cardsources[6]}
                text={props.cardtexts[6]}
                label={props.cardtags[6]}
                path="Portfolio"
                video={true}
              />
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AppCards;
