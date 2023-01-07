import React from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";
import Logo from "./images/logo.svg";
import IconTwitter from "./images/icon-twitter.svg";
import IconYoutube from "./images/icon-youtube.svg";
import IconLaptop from "./images/icon-laptop.svg";

export default function App() {
  return (
    <main className="wrapper">
      <Spline
        className="spline"
        scene="https://prod.spline.design/8KNEB18qJZdd7Gpv/scene.splinecode"
      />
      <div className="content">
        <menu>
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </menu>
        <h1>Collaborate with people</h1>
        <p>
          Bring your team together and build your community by using our
          cross-platform app that lets you collaborate via chat, voice and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.
        </p>
        <button>
          <img src={IconLaptop} alt="Download" /> Download for PC
        </button>
      </div>
      <div className="social">
        <div className="line" />
        <img src={IconTwitter} alt="Twitter" />
        <img src={IconYoutube} alt="YouTube" />
      </div>
    </main>
  );
}
