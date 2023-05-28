import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Udhayakumar(zoro)</h2>
        <div className="prompt">
          <p>Frontend developer with a passion for learning and creating new things.</p>
          <a href="https://www.linkedin.com/in/udhayakumar-velou-758723172" target="_blank" >< LinkedInIcon className="home-link"></LinkedInIcon></a>
          <a href="mailto:udhayakumar2352001@gmail.com" target="_blank" >< EmailIcon className="home-link"></EmailIcon></a>
          <a href="https://github.com/udhayav" target="_blank" >< GithubIcon className="home-link"></GithubIcon></a>
         
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Programming-Languages & Back-End</h2>
            <span>
             
            JavaScript, Java, C++, C, MySQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>French, English, Tamil</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;