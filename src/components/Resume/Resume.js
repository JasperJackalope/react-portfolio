import React from 'react';
import './Resume.css';
// Add my resume ici
import DBresume from '../../images/DBresumeMay2023.pdf';
// Rewrite my skills section

const Resume = () => {
  return (
    <section className="resume">
      <a className="download-resume" href={DBresume} download>
        Download My Resume Here
      </a>
      <h2>Experience</h2>
      <h3>Full Stack Development Highlights</h3>
      <ul>
        <h4>Front-end Proficiencies</h4>
        <li>HTML, CSS, JavaScript, React, Bootstrap, amongst others.</li>
        <li>Experience in responsive web design that can be used across all devices.</li>
        <h4>Back-end Proficiencies</h4>
        <li>Building secure, server-side applications using Node.js, Express.js, and in Python.</li>
        <li>Building and executing APIs for front-end use, including GraphQL integration.</li>
        <li>Database creation and management, with experiece in relational and NoSQL databases along with MySQL and MongoDB.</li>
        <li>Authentication protocols including OAuth and JWT.</li>
        <li>Modern development techniques and methods, such as Git, Agile, and test-driven development.</li>
      </ul>
      <h3>Additional Experience</h3>
      <ul>
        <h4>Skills</h4>
        <li>Seasoned Office Administrator and Manager.</li>
        <li>Accounting, Payroll, and Accounts Receivable Management.</li>
        <li>Team Development and Management</li>
        <li>High-pressure Project Management and Coordination.</li>
        <li>International Travel Coordination (including visas and permits).</li>
        <li>Fluent French speaker.</li>
        <li>Prolific baker, specializing in cookies.</li>
      </ul>


    </section>
  );
};

export default Resume;