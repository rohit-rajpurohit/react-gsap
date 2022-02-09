import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import Coding from "../images/read.svg";
import "../App.scss";

const View = () => {
  let container = useRef(null);
  let head = useRef(null);
  let text = useRef(null);
  let image = useRef(null);
  gsap.registerPlugin(CSSRulePlugin);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  let textReveal = CSSRulePlugin.getRule(".text-container:after");
  let headReveal = CSSRulePlugin.getRule(".heading:after");

  let tl = gsap.timeline();

  useEffect(() => {
    tl.to(container, { css: { visibility: "visible" }, duration: 0 });
    tl.fromTo(
      headReveal,
      { width: "0", ease: "power2.inOut", duration: 1.4 },
      { width: "100%", ease: "power2.inOut", duration: 1.4 }
    );
    tl.fromTo(
      textReveal,
      { width: "0", ease: "power2.inOut", duration: 1.4 },
      { width: "100%", ease: "power2.inOut", duration: 1.4, delay: -1.4 }
    );
    tl.to(head, { css: { color: "#292823" } });
    tl.to(text, { css: { color: "#292823" } });
    tl.to(headReveal, {
      width: "0%",
      ease: "power2.inOut",
      duration: 1.4,
      css: { border: "2px solid " },
    });
    tl.to(textReveal, {
      width: "0%",
      ease: "power2.inOut",
      duration: 1.4,
      delay: -1.4,
      css: { border: "2px solid " },
    });
    tl.to(imageReveal, {
      width: "0%",
      ease: "power2.inOut",
      duration: 1.4,
      delay: -1.4,
    });
    tl.from(image, {
      scale: 1.6,
      ease: "power2.inOut",
      delay: -1.4,
      duration: 1.4,
    });
    // tl.to(textReveal, {
    //   width: "0%",
    //   ease: "power2.inOut",
    //   delay: -1.4,
    //   duration: 1.4,
    // });
  });

  return (
    <>
      <div className="heading">
        <p
          ref={(el) => {
            head = el;
          }}
        >
          READING ROOM
        </p>
      </div>
      <div className="main">
        <div className="container" ref={(el) => (container = el)}>
          <div className="text-container">
            <p
              ref={(el) => {
                text = el;
              }}
            >
              Hello There!
            </p>
          </div>
          <div className="img-container">
            <img
              ref={(el) => {
                image = el;
              }}
              src={Coding}
              alt="Coding"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
