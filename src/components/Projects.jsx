// src/components/Projects.jsx
import React, { useState } from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Time Theft Design',
      tech: 'React.js • Redux Toolkit • PostgreSQL • FastAPI • NumPy • Pandas • TensorFlow • GenAI',
      summary: 'A system to track daily distractions and analyze mind calibrations for improved focus.',
      details: [
        'Developed a system to track daily distractions and analyze mind calibrations to improve focus and productivity.',
        'Designed an interactive dashboard using React.js and Recharts to visualize distraction patterns and cognitive trends.',
        'Built a REST API with FastAPI to handle user distraction logs and real-time mind calibration data.',
        'Integrated PostgreSQL for structured storage for flexible tracking of user behavior over time.',
        'Implemented AI-driven insights using TensorFlow to detect focus loss and provide real-time recovery recommendations.',
      ],
    },
    {
      title: 'MARC System',
      tech: 'React.js • Redux Toolkit • Express.js • MongoDB • i18next • Azure • Stripe API',
      summary: 'A PWA for managing construction project workflows and payments.',
      details: [
        'Built a scalable architecture with React and Express.js to streamline construction project workflows.',
        'Reduced development time by 20% using Redux Toolkit and reusable components.',
        'Integrated Stripe API for seamless payment processing, enabling efficient handling of transactions.',
        'Improved user experience with Material-UI and localization via i18next.',
        'Enhanced real-time collaboration using Fugu capabilities, improving team communication within the system.',
      ],
    },
    {
      title: 'Earn Easy($)',
      tech: 'React.js • Redux Toolkit • Spring Boot • MySQL • Stripe API',
      summary: 'A freelance services marketplace with secure payment integration.',
      details: [
        'Built dynamic UI components using React.js and state management with Redux Toolkit for a seamless user experience.',
        'Designed and implemented efficient REST APIs using Spring Boot to handle business logic and data flow.',
        'Utilized MySQL for database management, designing normalized schemas to store service listings, user profiles, and transaction records.',
      ],
    },
    {
        title: 'Issue Tracker Algo',
        tech: 'React.js • Spring Boot • MongoDB • Analytics',
        summary: 'A full‑stack issue tracking system with live, real‑time updates and analytics.',
        details: [
          'Built a responsive React.js front‑end with intuitive issue creation and filtering interfaces.',
          'Developed Spring Boot REST APIs for secure user authentication, issue CRUD operations, and role‑based access control.',
          'Integrated MongoDB for flexible, schema‑less storage of issues and comments.',
          'Added an analytics dashboard to visualize issue trends over time using Recharts.',
        ],
      },
            
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section">
      <center><h2>Projects</h2></center>
      <div className="projects-grid container">
        {projects.map((p, idx) => (
          <div key={idx} className="project-card">
            <h4>{p.title}</h4>
            <p className="project-tech">{p.tech}</p>
            <p>{p.summary}</p>
            <button onClick={() => setSelected(p)}>View Details</button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <p className="project-tech">{selected.tech}</p>
            <ul>
              {selected.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
