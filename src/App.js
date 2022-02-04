import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import { gsap, Power3, Power2 } from "gsap";
import "./App.css";

const App = () => {
  let logoItem = useRef(null);
  let textItem = useRef(null);
  let linkText = useRef(null);

  useEffect(() => {
    gsap.to(logoItem, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      rotation: "+=360",
      duration: 0.8,
    });
    gsap.fromTo(
      textItem,
      { opacity: 0 },
      { opacity: 1, y: -20, delay: 0.2, ease: Power3.easeOut, duration: 0.8 }
    );
    gsap.fromTo(
      linkText,
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        delay: 0.4,
        visibility: "visible",
        ease: Power2.easeOut,
        duration: 3,
      }
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          ref={(item) => {
            logoItem = item;
          }}
        />
        <p
          ref={(item) => {
            textItem = item;
          }}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          ref={(item) => {
            linkText = item;
          }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
