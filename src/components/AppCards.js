import React from "react";
import AppCardItem from "./AppCardItem";
import { useRef } from "react";
import "./AppCards.css";

import { InView } from "react-intersection-observer";
function scaleDisplay(refs, inView) {
  if (inView) {
    console.log("In view");
    refs.current.style.transform = "scale(1.05) translateY(20px)";
  } else {
    refs.current.style.transform = "scale(1) translateY(0)";
  }
}

function AppCards(props) {
  const cardRef = useRef(props.cardsources[0]);
  return (
    <div className=" cards">
      <InView
        as="div"
        onChange={(inView, entry) => scaleDisplay(cardRef, inView)}
      >
        <div className="cards__container" ref={cardRef}>
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
      </InView>
    </div>
  );
}

export default AppCards;
