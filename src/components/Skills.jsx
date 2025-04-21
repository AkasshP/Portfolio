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
    'AWS (S3, EC2, RDS, Lambda, IAM, Glue, Redshift)',
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
      <h2>Technical Skills</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
