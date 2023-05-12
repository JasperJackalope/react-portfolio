import React from 'react';
import Project from '../Project/Project';
// 
import prj1 from '../../images/litlist.jpg';
import prj2 from '../../images/thankyou.jpg';
import prj3 from '../../images/construction.jpg';
import prj4 from '../../images/register.jpg';
import prj5 from '../../images/techblog.jpg';
import prj6 from '../../images/socialnetwork.jpg';
import './Portfolio.css'; // import the CSS file

const Portfolio = () => {
  // Actual projects data
  // Add my prtojects here:
  const projects = [
    { title: 'Project 1: LitList', imageUrl: prj1, deployedUrl: 'https://samanthaahn.github.io/fiesta-event/', repoUrl: 'https://github.com/samanthaahn/fiesta-event'},
    { title: 'Project 2: Thank You For Being a Friend', imageUrl: prj2, deployedUrl: 'https://lit-ocean-94336.herokuapp.com/logins', repoUrl: 'https://github.com/jjjgm/gg-get-icecream.git' },
    { title: 'Project 3: Habit Tracker (Coming Soon)', imageUrl: prj3, deployedUrl: 'https://www.google.com', repoUrl: 'https://github.com/samanthaahn/magic-list' },
    { title: 'Project 4: E-Commerce Back End', imageUrl: prj4, deployedUrl: 'https://drive.google.com/file/d/1GnBkXZxLF4mGEsP-BnqUTsCODmaGvqWE/view?usp=share_link', repoUrl: 'https://github.com/JasperJackalope/ecommerce_back_end' },
    { title: 'Project 5: Tech Blog', imageUrl: prj5, deployedUrl: ' https://intense-castle-33112.herokuapp.com/', repoUrl: 'https://github.com/JasperJackalope/techblog/' },
    { title: 'Project 6: Social Network API', imageUrl: prj6, deployedUrl: 'https://drive.google.com/file/d/1GikP84DGduNQpY5J549SprIHlFMy-bDf/view?usp=share_link', repoUrl: 'https://github.com/JasperJackalope/social-network-api' },
    // ...
  ];

  return (
    <div className="mainproject">
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;