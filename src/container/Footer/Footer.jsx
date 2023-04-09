import React from "react";
import images from "../../constants/images";
import "./Footer.css";

const Footer = () => (
    <div className="app__footer" style={{ backgroundColor: "#f1f1e8" }}>
      <div className="app__footer-container">
        <p className="app__footer-container_copy">
          &copy; im<strong>juan</strong>2023
        </p>
        <div className="app__footer-container_button">
          <a href="#home" className="app__footer-container_button-anchor">
            <span><img src={images.arrowFooter} alt="arrow_footer" className="app__footer-container_button-anchor_icon" /></span>
            <span className="app__footer-container_button-anchor_text">back to top</span>
          </a>
        </div>
        <div className="app__footer-container_social">
          <a target="_blank" href="https://www.linkedin.com/in/juan-sebastian-plata-pinilla/">
            <img src={images.linkedin} alt="linkedin" />
          </a>
          <a target="_blank" href="https://github.com/sebastian-plata">
            <img src={images.github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  )


export default Footer;
