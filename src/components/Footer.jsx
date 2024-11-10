import { React, useState } from 'react';
import Github from "./Atoms/Button/Github";
import "./styles/Footer.css";
import "./animation/animation"

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <div className="footer">
      <hr></hr>
      <div className="container">
        <div className="footer-details">
          <div className="flex">
            <small>Designed by Melvin Baybayanon &copy; { year }</small>
            <Github />
          </div>
          <small>Built using React.Js</small>
          <div className="flex">
            <i className="fas fa-map-marker-alt"></i>
            <small>Philippines</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
