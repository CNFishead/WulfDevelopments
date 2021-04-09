import React from "react";
import {AiFillFacebook, AiFillGithub} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

import "./Footer.css";

let date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <div>
      <p>Wulf Developments {year}</p>
      <a className="SocialIcons"href="https://www.facebook.com/austin.howard.31/"><AiFillFacebook/></a>
      <a className="SocialIcons"href="https://www.linkedin.com/in/cnfishead1993/"><FaLinkedin/></a>
      <a className="SocialIcons"href="https://github.com/CNFishead"><AiFillGithub/></a>
      <a className="SocialIcons"href="mailto:cnfishead@gmail.com"><SiGmail/></a>
      </div>
      <div className="iconAttribute">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
