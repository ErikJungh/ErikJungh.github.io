import React from "react";
import "./TimeLine.css";
import JobItem from "./JobItem.js";
function TimeLine() {
  return (
    <div className="timeline_container">
      <div className="timeline">
        <div className="jobs_icons_list">
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/taby.png"></img>
            <h1 className="job_date">2014</h1>
          </div>
          <JobItem
            title="IT Technician"
            location="@Telecomputing"
            extra="Stockholm Kista"
            marker="right"
          ></JobItem>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/uu.png"></img>
            <h1 className="job_date">2018</h1>
          </div>
          <JobItem
            title="IT Technician"
            location="@Visolit"
            extra="Stockholm Kista"
            marker="right"
          ></JobItem>
          <div className="logo_container">
            <img
              className="job_logo"
              src="images/timeline/quantifylogo.png"
            ></img>
            <h1 className="job_date">2020</h1>
          </div>
          <JobItem
            title="Product Data Management Intern"
            location="@Cytiva"
            extra="Uppsala"
            marker="right"
          ></JobItem>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/swace.png"></img>
            <h1 className="job_date">2022</h1>
          </div>
          <JobItem
            title="Graduate"
            location="@Uppsala University"
            extra="Masters In Software Development"
            marker="right"
          ></JobItem>
        </div>
        <div className="line_container">
          <div className="line_end"></div>
          <div className="timeline_line"></div>
          <div className="line_end"></div>
        </div>
        <div className="jobs_icons_list">
          <JobItem
            title="High School"
            location="@Täby Enskilda Gymnasium"
            extra="Technology & IT"
            marker="left"
          ></JobItem>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/tc.jpeg"></img>
            <h1 className="job_date">2017</h1>
          </div>

          <JobItem
            title="University"
            location="@Uppsala University"
            extra="Master Program in Information Technology"
            marker="left"
          ></JobItem>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/visolit.png"></img>
            <h1 className="job_date">2019</h1>
          </div>

          <JobItem
            title="Flutter Developer - Bachelor Thesis"
            location="@Amino Health"
            extra="Uppsala"
            marker="left"
          ></JobItem>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/cytiva.png"></img>
            <h1 className="job_date">2021</h1>
          </div>

          <JobItem
            title="Software Developer"
            location="@Swace Digital"
            extra="Uppsala"
            marker="left"
          ></JobItem>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/graduate.png"></img>
            <h1 className="job_date">2023</h1>
          </div>
        </div>
      </div>
      <div className="timeline_mobile">
        <div className="icons_list_mobile">
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/taby.png"></img>
            <h1 className="job_date">2014</h1>
          </div>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/tc.jpeg"></img>
            <h1 className="job_date">2017</h1>
          </div>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/uu.png"></img>
            <h1 className="job_date">2018</h1>
          </div>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/visolit.png"></img>
            <h1 className="job_date">2019</h1>
          </div>
          <div className="logo_container">
            <img
              className="job_logo"
              src="images/timeline/quantifylogo.png"
            ></img>
            <h1 className="job_date">2020</h1>
          </div>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/cytiva.png"></img>
            <h1 className="job_date">2021</h1>
          </div>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/swace.png"></img>
            <h1 className="job_date">2022</h1>
          </div>
          <div className="logo_container">
            <img className="job_logo" src="images/timeline/graduate.png"></img>
            <h1 className="job_date">2023</h1>
          </div>
        </div>
        <div className="line_container_mobile">
          <div className="line_end"></div>
          <div className="timeline_line_mobile"></div>
          <div className="line_end"></div>
        </div>
        <div className="jobs_list_mobile">
          <JobItem
            title="High School"
            location="@Täby Enskilda Gymnasium"
            extra="Technology & IT"
            marker="left"
          ></JobItem>
          <JobItem
            title="IT Technician"
            location="@Telecomputing"
            extra="Stockholm Kista"
            marker="left"
          ></JobItem>
          <JobItem
            title="University"
            location="@Uppsala University"
            extra="Master program in Information Technology"
            marker="left"
          ></JobItem>
          <JobItem
            title="IT Technician"
            location="@Visolit"
            extra="Stockholm Kista"
            marker="left"
          ></JobItem>
          <JobItem
            title="Flutter Developer - Bachelor thesis"
            location="@Amino Health"
            extra="Uppsala"
            marker="left"
          ></JobItem>
          <JobItem
            title="Product Data Management Intern"
            location="@Cytiva"
            extra="Uppsala"
            marker="left"
          ></JobItem>
          <JobItem
            title="Software Developer"
            location="@Swace Digital"
            extra="Technology & IT"
            marker="left"
          ></JobItem>
          <JobItem
            title="Graduate"
            location="@Uppsala University"
            extra="Masters in Software Development"
            marker="left"
          ></JobItem>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;