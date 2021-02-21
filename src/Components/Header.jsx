import React from "react"
import Blog from "./Icons/blog.png"
import About from "./Icons/profile.png"
import Skills from "./Icons/settings.png"
import Icon from "./Icons/WulfBrandingLogoLightSmall.png"

function Header(){
    return (
  <div>
      <div className = "container-fluid navBar">
        <div id="pageIcon">
          <a href="../public/index.html"><img src={Icon} alt="Page Icon"/></a>
        </div>
        <h1>Wulf Developments</h1>
        <div className = "pages">
          <button className ="btn btn-small btn-primary"><a href="https://wordpress.com/page/wulfdevblog.wordpress.com/67"><img src= {Blog} alt="Home"/>Blog</a></button>
          <button className ="btn btn-small btn-primary"><a href="#"><img src={Skills} alt="Skills"/>Skills</a></button>
          <button className ="btn btn-small btn-primary"><a href="#"><img src={About} alt="About Me"/>About</a></button>
        </div>
      </div>
  </div>)
};

export default Header;