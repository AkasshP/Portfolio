import React from 'react';
import { Canvas } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import './Experience.css';

export default function Experience() {
  const jobs = [
    {
      title: 'Associate – Projects',
      company: 'Cognizant, Chennai, TN',
      period: 'Sep 2023 – Jul 2024',
      details: [
        'Developed all components using the MUI framework and Cambridge theme, including dynamic tables for admin, teacher, and exam officer roles.',
        'Implemented CRUD functionality for the exam officer role, supporting both single and bulk updates across all candidate levels.',
        'Designed UI/UX workflows in Figma for the admin portal and translated prototypes into responsive React components, ensuring seamless integration and functionality.',
        'Configured Redux and integrated MuleSoft for GET/POST APIs, creating reusable components and improving state management efficiency, cutting data-fetch latency by 30%.',
      ],
      awards: 'Recognized for splendid performance and received a performance award for outstanding contributions.'
    },
    {
      title: 'Programmer Analyst',
      company: 'Cognizant, Chennai, TN',
      period: 'Sep 2022 – Sep 2023',
      details: [
        'Implemented localization using the i18next globalization framework, adapting the application for AUS, US, and CA locales.',
        'Handled back-end integration by submitting label requests, retrieving API responses, and efficiently mapping keys to labels for accurate data rendering.',
        'Developed dynamic date functions to accommodate region-specific formats, reducing format-related errors by 20% and ensuring accurate functionality across regions.',
      ]
    },
    {
      title: 'Programmer Analyst Trainee',
      company: 'Cognizant, Chennai, TN',
      period: 'Sep 2021 – Sep 2022',
      details: [
        'Designed and implemented React/Redux web components for end-to-end loan approval data collection, improving data accuracy and user experience.',
        'Built critical modules including franchise management, loan requests, admin functions, and user registration using a custom client toolkit.',
        'Resolved SONAR-identified code smells and enhanced UI accessibility, improving accessibility metrics by 20% for a smoother and more inclusive user experience.',
      ]
    },
    {
      title: 'Intern',
      company: 'Cognizant, Chennai, TN',
      period: 'Feb 2021 – Jun 2021',
      details: [
        'Led a team of 24 students during internship, providing technical guidance, conducting progress reviews, and ensuring project milestones were met.',
        'Architected the workflow for an issue-tracking system using React and Spring Boot, streamlining the bug-reporting and resolution process.',
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        {jobs.map((job, idx) => (
          <div key={idx} className="job-entry">
            <h3>{job.title}</h3>
            <p><strong>{job.company}</strong> | {job.period}</p>
            <ul>
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            {job.awards && <p className="award">{job.awards}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
