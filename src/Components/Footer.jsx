import React from "react";
import { SocialIcon } from 'react-social-icons';


let date = new Date()
let year = date.getFullYear();

function Footer(){
    return (
        <footer>
            <p>Copyright Wulf Developments {year}</p> 
            <div className="social">
                <SocialIcon url="https://www.facebook.com/austin.howard.31/"/>
            </div>
            <div className="social">
                <SocialIcon url="https://www.linkedin.com/in/cnfishead1993/"/>
            </div>
            <div className="iconAttribute">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer> 
    )
}



export default Footer;