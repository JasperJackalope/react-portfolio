import React from 'react';
import './AboutMe.css';
// TODO: Add my picture.
// import haroldpictm2 from '../../images/haroldpictm2.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        {/* Link my Image here */}
        {/* <img src={haroldpictm2} alt="Daniel Boddicker" /> */}
        <div>
          <p>
            {/* Add my bio. */}
            My bio goes here.
          </p>   
          <p>
            Write to a similar message: Thank you for Visiting this site. You will find more about and my accomplishments during my Full Stack Development Trainining in UCLA Extension.
            I am happy to showcase my amazing journey of coding/training with the help of my class instructors, tutors and my collegues. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;