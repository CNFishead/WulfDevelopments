import React from "react";
import Blog from "../Icons/blog.png";
import About from "../Icons/profile.png";
import Skills from "../Icons/settings.png";
import Icon from "../Icons/WulfBrandingLogoLightSmall.png";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import "./Header.css";

function Header() {
  return (
    <div className="container-fluid navBar">
      <div id="pageIcon">
        <Link to="/">
          <img src={Icon} alt="Page Icon" />
        </Link>
      </div>
      <h1>Wulf Developments</h1>
      <div className="pages">
        <div className="">
          <button className="btn btn-small btn-primary">
            <a href="https://wulfdevblog.wordpress.com/">
              <img src={Blog} alt="Home" />
              Blog
            </a>
          </button>
          <button className="btn btn-small btn-primary">
            <Link to="/skills">
              <img src={Skills} alt="Skills" />
              Skills
            </Link>
          </button>
          <Link to="/projects">
            <button className="btn btn-small btn-primary">
              <img src={About} alt="projects" />
              Projects
            </button>
          </Link>
        </div>
        <div className="social">
          <SocialIcon url="https://www.facebook.com/austin.howard.31/" />
        </div>
        <div className="social">
          <SocialIcon url="https://www.linkedin.com/in/cnfishead1993/" />
        </div>
      </div>
    </div>
  );
}

export default Header;
