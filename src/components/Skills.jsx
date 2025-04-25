import React from 'react';

export default function Skills() {
  const skills = [
    'Python',
    'Java',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'SCSS',
    'ReactJS',
    'Redux Toolkit',
    'Node.js',
    'Express.js',
    'jQuery',
    'Bootstrap',
    'Material‑UI',
    'MySQL',
    'MongoDB',
    'Oracle',
    'PostgreSQL',
    'Microsoft SQL Server',
    'MuleSoft',
    'Pandas',
    'NumPy',
    'Data Structures',
    'GenAI',
    'Agentic AI',
    'AWS (S3, EC2, RDS, Lambda, IAM)',
    'Azure',
    'CI/CD Pipelines',
    'Git',
    'Jira',
    'Adobe CC',
    'Figma',
    'Eclipse',
    'Visual Studio Code',
    'NetBeans',
  ];

  return (
    <section id="skills" className="section">
    <div className="container">
      <h2>Technical Skills</h2>
      <div className="skills-box">
        <div className="skills-list">
          {skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}
