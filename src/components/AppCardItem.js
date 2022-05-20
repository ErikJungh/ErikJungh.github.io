import React from "react";
import { useRef } from "react";

import { InView } from "react-intersection-observer";

function playPauseVideo(refs, play, inView) {
  if (play) {
    refs.vidRef.play();
  } else {
    refs.vidRef.pause();
  }
}

function AppCardItem(props) {
  const videoRef = useRef(props.src);

  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            {props.video ? (
              <InView
                as="div"
                onChange={(inView, entry) =>
                  playPauseVideo(videoRef, entry, inView)
                }
              >
                <video
                  ref={videoRef}
                  className="cards__item__img"
                  src={props.src}
                  autoPlay
                  loop
                  muted
                  webkit-playsinline={true}
                />
              </InView>
            ) : (
              <img src={props.src} alt="app" className="cards__item__img" />
            )}
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default AppCardItem;
