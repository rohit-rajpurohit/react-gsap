import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import People from "./images/people.webp";
import "./App.scss";

const App = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");
  let textReveal = CSSRulePlugin.getRule(".text-container:after");

  let tl = gsap.timeline();

  useEffect(() => {
    tl.to(container, { css: { visibility: "visible" }, duration: 0 });
    tl.to(imageReveal, { width: "0%", ease: "power2.inOut", duration: 1.4 });
    tl.from(image, {
      scale: 1.6,
      ease: "power2.inOut",
      delay: -1.4,
      duration: 1.4,
    });
    tl.to(textReveal, {
      width: "0%",
      ease: "power2.inOut",
      delay: -1.4,
      duration: 1.4,
    });
  });

  return (
    <div className="main">
      <div className="container" ref={(el) => (container = el)}>
        <div className="text-container">
          <p>HELLO THERE</p>
        </div>
        <div className="img-container">
          <img
            ref={(el) => {
              image = el;
            }}
            src={People}
            alt="People"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
