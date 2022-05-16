import React from "react";

import "../App.css";
import "./pages/About.css";
import CardItem from "./CardItem";
import { useRef } from "react";

import { InView } from "react-intersection-observer";

function moveCards(refs, enlarge, rotation, translateX, translateY, scale) {
  if (enlarge) {
    console.log("enlarging", refs.current.style);
    refs.current.style.transform = `rotate(0deg) translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
  } else {
    console.log("shrinking", refs.current.style);
    refs.current.style.transform = `rotate(${rotation}deg) translateX(0px) translateY(0px) scale(1)`;
  }
}

function PhotoDisplay(props) {
  const leftCard = useRef("left");
  const centerCard = useRef("left");
  const rightCard = useRef("left");
  return (
    <>
      <div className="about_card_container">
        <div className="card_row">
          <InView
            threshold={0.85}
            as="div"
            onChange={(inView, entry, threshold) =>
              moveCards(leftCard, inView, -10, -200, 0, 1.1)
            }
          >
            <div className="animation_container_left" ref={leftCard}>
              <CardItem src={props.srcs[0]} text={props.texts[0]} />
            </div>
          </InView>
          <InView
            threshold={0.85}
            as="div"
            onChange={(inView, entry, threshold) =>
              moveCards(centerCard, inView, 0, 0, 0, 1.1)
            }
          >
            <div className="animation_container_center" ref={centerCard}>
              <CardItem src={props.srcs[1]} text={props.texts[1]} />
            </div>
          </InView>
          <InView
            threshold={0.85}
            as="div"
            onChange={(inView, entry, threshold) =>
              moveCards(rightCard, inView, 10, 200, 0, 1.1)
            }
          >
            <div className="animation_container_right" ref={rightCard}>
              <CardItem src={props.srcs[2]} text={props.texts[2]} />
            </div>
          </InView>
        </div>
      </div>
    </>
  );
}

export default PhotoDisplay;
