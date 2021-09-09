import { useEffect } from "react";

import Github from "./Atoms/Button/Github";
import resume from "../docs/resume-09-08-2021.pdf";
import "./styles/Nav.css";

const Nav = () => {
  useEffect(() => {
    // Navigation
    window.onscroll = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 20
      ) {
        document.querySelector(".nav-h").style.cssText =
          "height:66px; transition: all .4s ease; ";
        document.querySelector("header").style.cssText =
          "box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);";
      } else {
        document.querySelector(".nav-h").style.cssText = "height: 108px";
        document.querySelector("header").style.cssText = "box-shadow: unset;";
      }
    };
  });

  return (
    <header>
      <div className="container">
        <div className="nav-h">
          <div className="flex">
            <div className="name">
              <a href="#head" rel="noreferrer">
                <h1>
                  <span>M.</span>B<span>.</span>
                </h1>
              </a>
            </div>
            <div className="toggle-menu">
              <div className="flex">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a href="#services">
                    <span>S</span>ervices
                  </a>
                </li>
                <li>
                  <a href="#projects">
                    <span>P</span>rojects
                  </a>
                </li>
                <li>
                  <a href="#contacts">
                    <span>C</span>ontacts
                  </a>
                </li>
                <li>
                  <Github />
                </li>
                <li className="resume">
                  <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="tp">RESUME</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
