import React from 'react'; 
  
//importing typewriter-effect 
import Typewriter from "typewriter-effect"; 
 
  
function Intro() { 
  return ( 
      <div className="typeWriterParent">
        <div className="typeWriter"> 
        <p className="helloWorld">Hi, I am Austin Howard,</p>
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
            .typeString("Check out my blog")
            .start(); 
            }} 
            /> 
        </div> 
    </div>
  ); 
} 
  
export default Intro;