import "./TimeLine.css";
import React from "react";

function JobItem(props) {
  return (
    <div className="job_container">
      {props.marker === "left" ? <div className="job_marker"></div> : null}
      <div className="job_textbox_container">
        <h1 className="jobtitle">{props.title}</h1>
        <h1 className="joblocation">{props.location}</h1>
        <h1 className="jobextra">{props.extra}</h1>
      </div>
      {props.marker === "right" ? <div className="job_marker"></div> : null}
    </div>
  );
}

export default JobItem;
