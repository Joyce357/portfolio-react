import React from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with authentication, payments, and admin dashboard.',
    tech: 'React, Node.js, MongoDB, Stripe API'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates and team features.',
    tech: 'Vue.js, Firebase, Socket.io'
  },
  {
    title: 'Weather Dashboard',
    description: 'Responsive weather app with maps and alerts.',
    tech: 'JavaScript, Weather API, Chart.js'
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive personal portfolio site.',
    tech: 'HTML5, CSS3, JavaScript'
  },
  {
    title: 'Blog Platform',
    description: 'CMS for bloggers with social sharing and rich text editing.',
    tech: 'React, Express.js, PostgreSQL'
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracker with progress and social features.',
    tech: 'React Native, Firebase, Redux'
  }
];

const Projects = () => {
  return (
    <section className="page-content container mx-auto px-4">
      <div className="content-section">
        <h2 className="section-title text-3xl text-center font-serif text-espresso mb-10">My Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-[#ffffffcc] p-6 rounded-xl border border-[#d4c4b04d] shadow hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-serif text-espresso mb-2">{project.title}</h3>
              <p className="text-[#5D4037] mb-2">{project.description}</p>
              <p className="text-sm font-semibold bg-[#d4c4b04d] text-espresso inline-block px-3 py-1 rounded">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
