import React from 'react';

export default function Experience() {
  const jobs = [
    {
      title: 'Associate – Projects',
      company: 'Cognizant, Chennai, TN',
      period: 'Sep 2023 – Jul 2024',
      points: [
        'Developed all components using the MUI framework and Cambridge theme, including dynamic tables for admin, teacher, and exam officer roles.',
        'Implemented CRUD functionality for exam officer, supporting single and bulk updates across all candidate levels.',
        'Designed and translated admin UI/UX flows in Figma into React components ensuring seamless integration.',
        'Configured Redux and integrated MuleSoft for GET/POST APIs, building reusable components and dynamic rendering.',
        'Recognized with a performance award for outstanding contributions.',
      ],
    },
    {
      title: 'Programmer Analyst',
      company: 'Cognizant, Chennai, TN',
      period: 'Sep 2022 – Sep 2023',
      points: [
        'Implemented localization using i18next, adapting the application for AUS, US, and CA locales.',
        'Handled back-end integration by submitting labels to retrieve API responses and efficiently mapping them to corresponding keys.',
        'Developed dynamic date functions to accommodate specific date formats and requirements across different regions.',
      ],
    },
    {
      title: 'Programmer Analyst Trainee',
      company: 'Cognizant, Chennai, TN',
      period: 'Sep 2021 – Sep 2022',
      points: [
        'Played a crucial role in designing React/Redux web components for loan approval data collection.',
        'Built modules for franchise management, loan requests, admin functions, and user registration using a client‑toolkit.',
        'Resolved SONAR-identified code smells and enhanced UI accessibility for a smoother user experience.',
      ],
    },
    {
      title: 'Intern',
      company: 'Cognizant, Chennai, TN',
      period: 'Feb 2021 – Jun 2021',
      points: [
        'Led a team of 24 students during internship, providing guidance and progress reviews.',
        'Architected the workflow for an issue‑tracking system using React and Spring Boot to ensure efficient issue resolution.',
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <center><h2>Experience</h2></center>
      {jobs.map((job, idx) => (
        <div key={idx} className="job-entry">
          <h3>{job.title}</h3>
          <p>
            <strong>{job.company}</strong> | {job.period}
          </p>
          <ul>
            {job.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
