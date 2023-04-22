import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/u_d_h_a_y_a._/?igshid=ZDdkNTZiNTM%3D" target="_blank" >< InstagramIcon className="home-link"></InstagramIcon></a>
      <a href="https://twitter.com/udhayajb?t=Zi80VGQx7gVUp_5qehCWXg&s=08" target="_blank" >< TwitterIcon className="home-link"></TwitterIcon></a>
      <a href="https://www.linkedin.com/in/udhayakumar-velou-758723172" target="_blank" >< LinkedInIcon className="home-link"></LinkedInIcon></a>
  
      </div>
      
    </div>
  );
}

export default Footer;