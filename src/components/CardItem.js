import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__picture__pic-wrap">
            <img src={props.src} alt="app" className="cards__item__img" />
          </figure>
        </div>
      </li>
    </>
  );
}

export default CardItem;
