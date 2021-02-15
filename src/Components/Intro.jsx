import React from 'react'; 
//import Wolf Logo
import Wolf from "./Images/wulfbrandinglogoblue.png";
  
//importing typewriter-effect 
import Typewriter from "typewriter-effect"; 
 
  
function Intro() { 
  return ( 
      <div className="conatiner container-fluid">
        <div className="typeWriter typeWriterParent"> 
        <p className="typeWriterIntro">Hi, I am Austin Howard,</p>
            <Typewriter 
            onInit={(typewriter)=> {
            typewriter 
            .typeString("a Father.") 
            .pauseFor(1000) 
            .deleteAll()
            
            .typeString("a Husband.") 
            .pauseFor(1000) 
            .deleteAll()

            .typeString("a Singer.") 
            .pauseFor(1000) 
            .deleteAll()

            .typeString("a Visionary.") 
            .pauseFor(1000) 
            .deleteAll()

            .typeString("a Software Developer!")
            
            .start(); 
            }} 
            /> 
        </div>
        <div className="container container-fluid blogLink">
            <a href="https://wordpress.com/page/wulfdevblog.wordpress.com/67"><img src={Wolf} alt="Logo" className="wulfLogo"/></a>
        </div> 
    </div>
  ); 
} 
  
export default Intro;