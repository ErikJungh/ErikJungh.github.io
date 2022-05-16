import React from "react";
import { useRef } from "react";
import "./TimeLine.css";

import { InView } from "react-intersection-observer";
function scaleDivRight(refs, enlarge, threshold) {
  if (enlarge) {
    console.log("enlarging", threshold);
    refs.current.style.transform = "translateX(-5vw)";
  } else {
    console.log("shrinking", refs.current.style);
    refs.current.style.transform = "";
  }
}
function scaleDivLeft(refs, enlarge) {
  if (enlarge) {
    console.log("enlarging", refs.current.style);
    refs.current.style.transform = "translateX(5vw)";
  } else {
    console.log("shrinking", refs.current.style);
    refs.current.style.transform = "scale(1)";
  }
}

function LogoItem(props) {
  const animationRef = useRef(props.src);
  return (
    <>
      <InView
        threshold={0.5}
        as="div"
        onChange={
          props.direction === "right"
            ? (inView, entry, threshold) =>
                scaleDivLeft(animationRef, inView, entry)
            : (inView, entry) => scaleDivRight(animationRef, inView)
        }
      >
        <div className="logo_container" ref={animationRef}>
          <img className="job_logo" src={props.src}></img>
          <h1 className="job_date">{props.year}</h1>
        </div>
      </InView>
    </>
  );
}

export default LogoItem;
