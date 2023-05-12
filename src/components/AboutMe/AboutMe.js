import React from 'react';
import './AboutMe.css';
import headshotDB from '../../images/headshotDB.JPG';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>Full-Stack Deveopler, Baking Enthusiast</h2>
      <div className="about-me-content">
        <img src={headshotDB} alt="Daniel Boddicker" />
        <div>
          <p>Originally from the Black Hills of South Dakota, now based in Los Angeles for the past decade. After a successful career in the film and television industry, I decided to take the risk and change paths by becoming a web developer and coder. I am a recent gradutate of the UCLA Extension Coding Bootcamp and am looking for my next opportunity.</p>   
          <p>Thank you for visiting my website. Here you can see more information about my skills as a Full-Stack Developer along with samples of my work.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;