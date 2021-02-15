import React from "react"
import Home from "./Icons/home.png"
import About from "./Icons/profile.png"
import Skills from "./Icons/settings.png"
import Icon from "./Icons/WulfBrandingLogoLightSmall.png"

function Nav(){
    return (
  <div>
    {/* <header> */}
      <div className = "navBar">
        <div id="pageIcon">
          <img src={Icon} alt="Page Icon"/>
        </div>
        <h1>Wulf Developments</h1>
        <div className = "pages">
            <a href="#"><img src= {Home} alt="Home"/>Home</a>
        </div>
        <div className = "pages">
            <a href="#"><img src={Skills} alt="Skills"/>Skills</a>
        </div>
        <div className = "pages">
          <a href="#"><img src={About} alt="About Me"/>About Me</a>
        </div>
      </div>
    {/* </header> */}
  </div>)
};

export default Nav;