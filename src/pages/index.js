import React, { useState } from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  lineHeight: 1.6,
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 800,
  fontSize: '40px',
  textAlign: 'center',
};

const headingAccentStyles = {
  color: "#663399",
  fontSize: '32px',
  display: 'block',
  marginTop: 10,
};

const paragraphStyles = {
  marginBottom: 48,
  fontSize: '18px',
  lineHeight: 1.8,
};

const sectionHeadingStyles = {
  borderBottom: '2px solid #663399',
  paddingBottom: 10,
  marginBottom: 30,
  fontSize: '24px',
  fontWeight: 'bold',
};

const jobContainerStyles = {
  marginBottom: 40,
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const h3Styles = {
  fontSize: '22px',
  color: '#333',
  margin: 0,
  fontWeight: 'bold',
};

const descriptionStyles = {
  fontSize: '16px',
  color: '#555',
  marginTop: '10px',
  lineHeight: 1.5,
};

const listStyles = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  marginBottom: 0,
};

// Styles for the collapsible project section
const projectContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 20,
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
};

const projectImageStyles = {
  width: '100px',
  height: '100px',
  borderRadius: '8px',
  marginRight: '20px',
};

const projectContentStyles = {
  flex: 1,
};

const projectTitleStyles = {
  fontSize: '22px',
  color: '#333',
  fontWeight: 'bold',
  marginBottom: 10,
};

const projectShortDescriptionStyles = {
  fontSize: '16px',
  color: '#555',
  marginBottom: 10,
};

const projectDetailsStyles = {
  fontSize: '16px',
  color: '#555',
  marginTop: '10px',
  lineHeight: 1.5,
};

const linkStyles = {
  color: '#663399',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const Project = ({ title, image, shortDescription, details, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={projectContainerStyles}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <img src={image} alt={`${title} screenshot`} style={projectImageStyles} />
      <div style={projectContentStyles}>
        <h3 style={projectTitleStyles}>{title}</h3>
        <p style={projectShortDescriptionStyles}>{shortDescription}</p>
        {isExpanded && (
          <div style={projectDetailsStyles}>
            <p>{details}</p>
            <a href={link} style={linkStyles} target="_blank" rel="noopener noreferrer">
              Check it out on itch.io
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const IndexPage = () => {
  const jobs = [
    {
      title: "Power",
      description: "Job practice",
      tasks: ["Helped customers and salespersons on various of tasks.", "Installed lots of electronic price tags to shelves.", "Kept the shelves organized and public spaces tidy."],
    },
  ];

  const education = [
    {
      title: "OSAO Kaukovainio",
      description: "Studied Computer Science.",
      tasks: ["Software Developer", "2021-2024"],
    },
  ];

  const projects = [
    {
      title: "Cloud Dodge",
      image: "https://via.placeholder.com/100", // Replace with your image URL
      shortDescription: "Pigeon dodging clouds!",
      details: "You're a pigeon and your only job is to dodge clouds and try to get as far as you can. Cloud Dodge is a 2D game for Android.",
      link: "https://algam3r.itch.io/cloud-dodge",
    },
    {
      title: "Sparkle Land",
      image: "https://via.placeholder.com/100", // Replace with your image URL
      shortDescription: "FPS in magical land!",
      details: "Small FPS game for Windows where you fight unique marshmallows and collect mushrooms as an unicorn.",
      link: "https://algam3r.itch.io/sparkle-land",
    },
    // Add more project objects here if needed
  ];

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Milka Lillqvist
        <br />
        <span style={headingAccentStyles}>Portfolio Test</span>
      </h1>

      <h2 style={sectionHeadingStyles}>About Me</h2>
      <p style={paragraphStyles}>My life is just constant stress.</p>

      <h2 style={sectionHeadingStyles}>Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} style={jobContainerStyles}>
          <h3 style={h3Styles}>{job.title}</h3>
          <p style={descriptionStyles}>{job.description}</p>
          <ul style={listStyles}>
            {job.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 style={sectionHeadingStyles}>Education</h2>
      {education.map((edu, index) => (
        <div key={index} style={jobContainerStyles}>
          <h3 style={h3Styles}>{edu.title}</h3>
          <p style={descriptionStyles}>{edu.description}</p>
          <ul style={listStyles}>
            {edu.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 style={sectionHeadingStyles}>Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          shortDescription={project.shortDescription}
          details={project.details}
          link={project.link}
        />
      ))}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
