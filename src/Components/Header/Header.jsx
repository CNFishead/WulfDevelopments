import React from "react";
import Icon from "../../assets/Icons/WulfBrandingLogoLightSmall.png";
import Download from "../../assets/Icons/dowload.png"
import { Link } from "react-router-dom";
import resume from "../../assets/Resume/FastTrackResume.pdf"

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div class="container-fluid contentContainer">
        <div className="brand">
          <Link to="/WulfDevelopments" class="navbar-brand">
            <img className="brandingLogo" src={Icon} alt="" />
          </Link>
          <div className="navBarTitles">
            <h1>Austin Howard</h1>
            <h3>Junior Software Developer</h3>
            <h6>Wulf Developments</h6>
          </div>
        </div>
        <div>
          <div className="navbar-nav navBar-nav">
            <a className="nav-link" href="https://wulfdevblog.wordpress.com/">
              Blog
            </a>
            <Link to="/WulfDevelopments/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/WulfDevelopments/aboutMe" className="nav-link">
              About
            </Link>
            <a href={resume} className="nav-link" download>
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
