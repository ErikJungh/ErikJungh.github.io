import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="about__cards__item">
        <div className="about__cards__item__link">
          <figure className="cards__picture__pic-wrap">
            <img
              src={props.src}
              alt="app"
              className="about__cards__item__img"
            />
          </figure>
        </div>
      </li>
    </>
  );
}

export default CardItem;
