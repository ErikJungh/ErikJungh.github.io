import React from "react";

import { useRef } from "react";
import "./Contact.css";
import { InView } from "react-intersection-observer";
import { Button } from "../Button";

function Contact() {
  const leftCard = useRef("left");
  const rightCard = useRef("right");
  const leftCardTop = useRef("leftTop");
  const rightCardTop = useRef("rightTop");

  function moveCards(refs, enlarge, rotation, translateX, translateY, scale) {
    console.log("desktop");
    if (enlarge) {
      refs.current.style.transform = `rotate(${rotation}deg) translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
    } else {
      refs.current.style.transform = `rotate(0deg) translateX(0px) translateY(0px) scale(1)`;
    }
  }

  return (
    <div className="contact_container">
      <InView
        threshold={0.85}
        as="div"
        onChange={(inView, entry, threshold) =>
          moveCards(leftCard, inView, -25, -150, -30, 1.1)
        }
      >
        <div className="animated_contact_card_left" ref={leftCard}></div>
      </InView>
      <InView
        threshold={0.85}
        as="div"
        onChange={(inView, entry, threshold) =>
          moveCards(leftCardTop, inView, -50, -150, -50, 1.1)
        }
      >
        <div className="animated_contact_card_left_top" ref={leftCardTop}></div>
      </InView>
      <InView
        threshold={0.85}
        as="div"
        onChange={(inView, entry, threshold) =>
          moveCards(rightCard, inView, 25, 150, -30, 1.1)
        }
      >
        <div className="animated_contact_card_right" ref={rightCard}></div>
      </InView>
      <InView
        threshold={0.85}
        as="div"
        onChange={(inView, entry, threshold) =>
          moveCards(rightCardTop, inView, 50, 150, -50, 1.1)
        }
      >
        <div
          className="animated_contact_card_right_top"
          ref={rightCardTop}
        ></div>
      </InView>
      <div className="contact_column">
        <div className="contact_header_container">
          <h1 className="contact_header">Hello 👋 Let's get in touch!</h1>
        </div>
        <div className="contact_row">
          <div className="contact_item">
            <Button
              destination="/Contact"
              className="btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              onClick="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=erik@junghahn.com"
            >
              E-Mail
            </Button>
          </div>
          <div className="contact_item">
            <Button
              destination="/Contact"
              className="btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              onClick="https://www.linkedin.com/in/erik-junghahn-751a3215b/"
            >
              Linked in
            </Button>
          </div>
          <div className="contact_item">
            <Button
              destination="/Contact"
              className="btns"
              buttonStyle={"btn--primary"}
              buttonSize={"btn--large"}
              onClick="https://github.com/ErikJungh"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
