import React from 'react';
import './AboutMe.css';
import headshotDB from '../../images/headshotDB.JPG';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img src={headshotDB} alt="Daniel Boddicker" />
        <div>
          <p>I was born and raised in the Black Hills of South Dakota and have been based in Los Angeles for the past ten years. After a successful career in the film and television industry, I decicded to take the risk and change paths and become a web developer and coder. I am a recent gradutate of the UCLA Extension Coding Bootcamp and am looking for my next opportunity.</p>   
          <p>Thank you for visiting my website. Here you can more information about my skills as a Full-Stack Developer along with samples of my work.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;