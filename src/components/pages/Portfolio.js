import React from "react";
import "../../App.css";
import "./Portfolio.css";
import AppDisplay from "../AppDisplay";
import { Link as LinkScroll } from "react-scroll";
import Lottie from "react-lottie-player";
import lottieJson from "./98428-arrow-down-purple.json";
import Footer from "../Footer";
import { Button } from "../Button";

function Portfolio(props) {
  return (
    <>
      {/*<nav className="navbarPortfolio">
        <div className="portfolio_navbar_wrapper">
          <ul
            f
            className="portfolio_navbar"
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-around",
            }}
          >
            <li>
              <LinkScroll to="plainsight" spy={true} smooth={true}>
                <div className="app_btn_container">
                  <img
                    className="title_icon"
                    src={"/images/plainsightlogo.png"}
                    alt="icon"
                  ></img>
                  <h1 className="app_btn_title">Plain Sight</h1>
                </div>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="vegify" spy={true} smooth={true}>
                <div className="app_btn_container">
                  <img
                    className="title_icon"
                    src={"/images/vegifylogo.png"}
                    alt="icon"
                  ></img>
                  <h1 className="app_btn_title">Vegify</h1>
                </div>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="quantify" spy={true} smooth={true}>
                <div className="app_btn_container">
                  <img
                    className="title_icon"
                    src={"/images/quantifylogo.png"}
                    alt="icon"
                  ></img>
                  <h1 className="app_btn_title">Quantify</h1>
                </div>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll></LinkScroll>
            </li>
          </ul>
        </div>
      </nav>*/}
      <div className="portfolio_container">
        <div className="titles_container">
          <h1 className="portfolio_title">Hi,</h1>
          <h2 className="portfolio_subtitle">I'm Erik</h2>
          <h1 className="portfolio_subtitle">A Software Developer</h1>
        </div>

        <div className="lottie_container">
          <LinkScroll to="plainsight" spy={true} smooth={true}>
            <Lottie
              className="lottie"
              loop
              animationData={lottieJson}
              play
              style={{ width: 150, height: 150 }}
            />
          </LinkScroll>
        </div>
        <div className="contact_button_container">
          <Button
            destination={"/about"}
            className="btns"
            buttonStyle={"btn--outline"}
            buttonSize={"btn--large"}
          >
            Contact me
          </Button>
        </div>
      </div>
      <div className="appScroll">
        <AppDisplay
          title="Plain Sight"
          logo="/images/plainsightlogo.png"
          styleprop="plainsight"
          subtitle="Find out what people really think"
          timeframe="2022 - In Development"
          about1="Plain Sight is a hobby project that entered development in March
              2022 which I am currently pursuing along with two friends and very talented developers August BredBerg and Robert Paananen. The
              cross platform mobile application is written by me in React Native
              and the backend is developed with the use of Firebase Firestore
              and Node.js."
          about2="The idea behind Plain Sight is that in order to get data you have to also
              provide it yourself anonymously. Data can range from anywhere between your opinion 
              on a certain politician or simply how many cups of coffee you consume each day. 
              The goal is then to be able to provide the user with interesting location based data
              regarding opinions or statistics and tickle their curiosity about what people's opinions are on almost any topic in
              their neighborhood."
          cardsources={[
            "videos/appvid-1.mp4",
            "videos/appvid-2.mp4",
            "images/appimg-2.png",
            "images/appimg-3.png",
            "images/appimg-4.png",
          ]}
          cardtexts={[
            "This project has taught me a lot about UX and also introduced me to animations with React Native.",
            "The big challenge of this project is to present enormous amounts of data to the user in an interesting way.",
            "I've worked a lot with how to handle and gather geolocation data on a mobile application.",
            "The instant search engine powered by typesense. Search data is gathered directly from Firestore",
            "In this project I've gathered experience regarding dynamic features such as color-modes and multi-language support!",
          ]}
          cardtags={[
            "React Native",
            "React Native, OpenStreetMap, Firestore",
            "React Native",
            "React Native, Firestore, Typesense",
            "React Native",
          ]}
        />
        <AppDisplay
          class="appdisplay"
          title="Vegify"
          logo="/images/vegifylogo.png"
          styleprop="vegify"
          subtitle="Know what you are eating!"
          timeframe="2022 - Jan - Mar"
          about1="Vegify is a university project that I worked on together with a team of 4 other students. 
        The Application allows users to scan or search for food they might be allergic to
        and then helps them make a healthy decision based on their reported allergies. The application
        also allows user to share recipies with eachother and tag and filter them according to their 
        allergies."
          about2=" The mobile application is written in React Native with the help of Node.js. The intention was 
        to develop a system which integrated a lot of platforms and databases in an efficient way. Food 
        data is either submitted by users and stored in vegifys own databse written in MongoDB or fetched from
        public api's such as OpenFoodFacts and Dabas."
          cardsources={[
            "videos/appvid-3.mp4",
            "videos/appvid-4.mp4",
            "images/appimg-5.png",
            "images/appimg-6.png",
            "images/appimg-7.png",
          ]}
          cardtexts={[
            "Scan or search for food products to find out what they contain in terms of ingredients and allergenes.",
            "Upload recipes with ingredients, steps and automatic allergene tagging.",
            "I've worked a lot with keeping the system dynamic. Here ingredients are updated dynamically by changing portion count.",
            "This project allowed me to learn a lot about mobile cache. Here cache is used to prevent users from uploading multiple reviews.",
            "Working with automatic tagging I've developed an algorithm that automatically tags recipes according to allergies.",
          ]}
          cardtags={[
            "React Native, MongoDB, Openfoodfacts, Dabas",
            "React Native, MongoDB",
            "React Native",
            "React Native, MongoDB.",
            "React Native, MongoDB",
          ]}
        />
        <AppDisplay
          class="appdisplay"
          title="Quantify Bio"
          logo="/images/quantifylogo.png"
          styleprop="quantify"
          subtitle="Upgrade Your Health One Experiment At A Time!"
          timeframe="2021 - Apr - Jun"
          about1="The amount of blood sugar related diseases is rising in Sweden and
around the world. It is estimated that over 15% of the Swedish population has genetically an increased risk to develop type 2 diabetes.
 To help solve this growing problem, me and my team have developed a cross platform 
 application together with the company Quantify Bio."
          about2="
The goal was to, with the help of this app, give people a better understanding of how their blood sugar values are affected by their diet and
exercise. The resulting prototype app can read values from a blood sugar
sensor that the user wears and plot the values on a graph. The user can
also input what they eat and how they exercise and have that visualized
on the blood sugar graph. The mobile application is developed using Flutter and 
Firebase"
          cardsources={[
            "videos/appvid-5.mp4",
            "videos/appvid-6.mp4",
            "images/appimg-8.png",
            "images/appimg-9.png",
            "images/appimg-11.png",
            "videos/appvid-10.mp4",
            "videos/appvid-11.mp4",
          ]}
          cardtexts={[
            "I've worked a lot with authentication and account creation.",
            "Keep a journal of what you eat and see how it affects your blood sugar.",
            "When working on this project I was first introduced to Firebase Firestore and have worked a lot with it since.",
            "Keep a journal of your workouts and their intensity.",
            "Watch, edit and delete your training and meal diary.",
            "Create your own or choose from a set of predefined workouts. Workouts are imported from Firestore.",
            "This project allowed me to work with external hardware integration such as the freestyle libre 2",
          ]}
          cardtags={[
            "Flutter, Firebase Authentication",
            "Flutter, Firebase Firestore",
            "Flutter",
            "Flutter",
            "Flutter",
            "Flutter",
            "Flutter, Freestyle Libre 2",
          ]}
        />
      </div>
      <Footer
        class="footer_container_portfolio"
        titleclass="footer_title_portfolio"
        subtitleclass="footer_subtitle_portfolio"
      />
    </>
  );
}

export default Portfolio;
