import React from "react";
import {AiFillFacebook, AiFillGithub} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let year = dateObj.getUTCFullYear();

let newdate = month + "/" + year;

function Footer() {
  return (
    <footer>
      <div>
      <p>Wulf Developments {newdate}</p>
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
