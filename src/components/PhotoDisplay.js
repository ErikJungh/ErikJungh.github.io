import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import "./pages/About.css";
import CardItem from "./CardItem";
import { useRef } from "react";

import { InView } from "react-intersection-observer";

function PhotoDisplay(props) {
  const leftCard = useRef("left");
  const centerCard = useRef("left");
  const rightCard = useRef("left");

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function moveCards(refs, enlarge, rotation, translateX, translateY, scale) {
    if (showAnimation) {
      console.log("desktop");
      if (enlarge) {
        refs.current.style.transform = `rotate(0deg) translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
      } else {
        refs.current.style.transform = `rotate(${rotation}deg) translateX(0px) translateY(0px) scale(1)`;
      }
    } else {
      if (enlarge) {
        refs.current.style.transform = `rotate(0deg) translateX(${getRndInteger(
          -15,
          15
        )}px) translateY(${getRndInteger(-50, 50)}px) scale(0.9)`;
      } else {
        refs.current.style.transform = `rotate(${rotation}deg) translateX(0px) translateY(0px) scale(1)`;
      }
    }
  }

  const [showAnimation, toggleShowAnimation] = useState(false);

  const showAnimationToggler = () => {
    if (window.innerWidth <= 960) {
      toggleShowAnimation(false);
    } else {
      toggleShowAnimation(true);
    }
  };

  useEffect(() => {
    showAnimationToggler();
  }, []);

  window.addEventListener("resize", showAnimationToggler);

  return (
    <>
      <div className="about_card_container">
        <div className="card_row">
          <InView
            threshold={0.85}
            as="div"
            onChange={(inView, entry, threshold) =>
              moveCards(leftCard, inView, -10, -120, 0, 1.1)
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
              moveCards(rightCard, inView, 10, 120, 0, 1.1)
            }
          >
            <div className="animation_container_right" ref={rightCard}>
              <CardItem src={props.srcs[1]} text={props.texts[1]} />
            </div>
          </InView>
        </div>
      </div>
    </>
  );
}

export default PhotoDisplay;
