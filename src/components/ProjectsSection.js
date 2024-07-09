import React from 'react';
import './ProjectsSection.css';

const projects = [
  { title: 'Project 1', description: 'Description of project 1', imgSrc: '/path/to/image1.jpg' },
  { title: 'Project 2', description: 'Description of project 2', imgSrc: '/path/to/image2.jpg' },
  { title: 'Project 3', description: 'Description of project 3', imgSrc: '/path/to/image3.jpg' },
  { title: 'Project 4', description: 'Description of project 4', imgSrc: '/path/to/image4.jpg' },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imgSrc} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
