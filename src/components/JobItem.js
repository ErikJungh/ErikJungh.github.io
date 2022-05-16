import "./TimeLine.css";
import React from "react";
import { useRef } from "react";

import { InView } from "react-intersection-observer";
function scaleDivRight(refs, enlarge, threshold) {
  if (enlarge) {
    console.log("enlarging", threshold);
    refs.current.style.transform = "scale(1.1) translateX(-5vw)";
  } else {
    console.log("shrinking", refs.current.style);
    refs.current.style.transform = "scale(1)";
  }
}
function scaleDivLeft(refs, enlarge) {
  if (enlarge) {
    console.log("enlarging", refs.current.style);
    refs.current.style.transform = "scale(1.1) translateX(5vw)";
  } else {
    console.log("shrinking", refs.current.style);
    refs.current.style.transform = "scale(1)";
  }
}

function JobItem(props) {
  const animationRef = useRef(props.title);
  return (
    <div className="job_container">
      {props.marker === "left" ? <div className="job_marker"></div> : null}
      <InView
        threshold={0.5}
        as="div"
        onChange={
          props.marker === "left"
            ? (inView, entry, threshold) =>
                scaleDivRight(animationRef, inView, entry)
            : (inView, entry) => scaleDivLeft(animationRef, inView)
        }
      >
        <div className="job_textbox_container" ref={animationRef}>
          <h1 className="jobtitle">{props.title}</h1>
          <h1 className="joblocation">{props.location}</h1>
          <h1 className="jobextra">{props.extra}</h1>
        </div>
      </InView>
      {props.marker === "right" ? <div className="job_marker"></div> : null}
    </div>
  );
}

export default JobItem;
