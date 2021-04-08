import React from 'react'; 

  
//importing typewriter-effect 
import Typewriter from "typewriter-effect"; 

import './Typewriter.css'

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
    </div>
  ); 
} 
  
export default Intro;