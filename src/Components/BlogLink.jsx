import React, { useEffect } from 'react';
import Wolf from "./Images/wulfbrandinglogoblue.png";

function BlogLink(){
    return(
        <div className="blogLink">
            <a href="https://wordpress.com/page/wulfdevblog.wordpress.com/67"><img src={Wolf} alt="Logo" className="wulfLogo"/></a>
        </div>
    ) 
}

export default BlogLink;