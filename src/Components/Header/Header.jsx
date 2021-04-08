import React from "react";
import Blog from "../Icons/blog.png";
import About from "../Icons/profile.png";
import Skills from "../Icons/settings.png";
import Icon from "../Icons/WulfBrandingLogoLightSmall.png";
import { Link } from "react-router-dom";

import './Header.css'

function Header() {
  return (
    <div>
      <div className="container-fluid navBar">
        <div id="pageIcon">
          <Link to="/">
            <img src={Icon} alt="Page Icon" />
          </Link>
        </div>
        <h1>Wulf Developments</h1>
        <div className="pages">
          <button className="btn btn-small btn-primary">
            <Link to="https://wulfdevblog.wordpress.com/">
              <img src={Blog} alt="Home" />
              Blog
            </Link>
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
      </div>
    </div>
  );
}

export default Header;
