import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className=" cards">
      <h1>Check out some of my projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="One of the apps i made"
              label="React native"
              path="Portfolio"
            />
            <CardItem
              src="images/img-8.jpg"
              text="One of the apps i made"
              label="React native"
              path="Portfolio"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-7.jpg"
              text="One of the apps i made"
              label="React native"
              path="Portfolio"
            />
            <CardItem
              src="images/img-6.jpg"
              text="One of the apps i made"
              label="React native"
              path="Portfolio"
            />
            <CardItem
              src="images/img-5.jpg"
              text="One of the apps i made"
              label="React native"
              path="Portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
