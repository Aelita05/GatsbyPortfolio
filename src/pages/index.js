import React, { useState } from "react";

import clouddodge from '../images/clouddodge.png';
import sparkleland from '../images/sparkleland.png';

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

/*const paragraphStyles = {
  marginBottom: 48,
  fontSize: '18px',
  lineHeight: 1.8,
};*/

const sectionHeadingStyles = {
  borderBottom: '2px solid #663399',
  paddingBottom: 10,
  marginBottom: 30,
  fontSize: '24px',
  fontWeight: 'bold',
};

const aboutMeContainerStyles = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  lineHeight: 1.8,
  marginBottom: '40px',
};

const aboutMeTextStyles = {
  fontSize: '18px',
  color: '#555',
};

const highlightTextStyles = {
  fontWeight: 'bold',
};

const jobContainerStyles = {
  marginBottom: 40,
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const durationBoxStyles = {
  fontSize: '14px',
  color: '#666',
  backgroundColor: '#f0f0f0',
  borderRadius: '5px',
  padding: '5px 10px',
  marginTop: '10px',
  marginBottom: '10px',
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
  marginTop: '5px',
  lineHeight: 1.5,
};

const educationContainerStyles = {
  marginBottom: 40,
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const schoolNameStyles = {
  fontSize: '22px',
  color: '#333',
  fontWeight: 'bold',
  marginBottom: '5px',
};

const generalTitleStyles = {
  fontSize: '18px',
  color: '#555',
  marginBottom: '5px',
};

const specificTitleStyles = {
  fontSize: '16px',
  color: '#777',
  fontStyle: 'italic',
  marginBottom: '10px',
};

const graduationTimeStyles = {
  fontSize: '14px',
  color: '696969',
  backgroundColor: '#f0f0f0',
  borderRadius: '5px',
  padding: '5px 10px',
  marginTop: 'auto',
  alignSelf: 'flex-end',
};

const listStyles = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  marginBottom: 0,
};

const projectContainerStyles = {
  display: 'flex',
  alignItems: 'flex-start',
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
  flexShrink: 0,
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

const projectTagsStyles = {
  fontSize: '14px',
  color: '#999',
  marginBottom: '10px',
  fontStyle: 'italic',
};

const projectDetailsStyles = {
  fontSize: '16px',
  color: '#555',
  lineHeight: 1.5,
};

const linkStyles = {
  color: '#663399',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const Project = ({ title, image, shortDescription, tags, details, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      style={projectContainerStyles}
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <img src={image} alt={`${title} screenshot`} style={projectImageStyles} />
      <div style={projectContentStyles}>
        <h3 style={projectTitleStyles}>{title}</h3>
        <p style={projectShortDescriptionStyles}>{shortDescription}</p>
        {isExpanded && (
          <>
            <p style={projectTagsStyles}>{tags.join(', ')}</p>
            <div style={projectDetailsStyles}>
              <p>{details}</p>
              <a href={link} style={linkStyles} target="_blank" rel="noopener noreferrer">
                Check it out on itch.io
              </a>
            </div>
          </>
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
      duration: "May 2022 - June 2022",
      tasks: [
        "Helped customers and salespersons on various tasks.",
        "Installed lots of electronic price tags to shelves.", 
        "Kept the shelves organized and public spaces tidy."
      ],
    },
  ];

  const education = [
    {
      schoolName: "OSAO Kaukovainio",
      generalTitle: "Information and Communications Technology",
      specificTitle: "Software Developer",
      graduationTime: "August 2021 - December 2024",
    },
  ];

  const projects = [
    {
      title: "Cloud Dodge",
      image: clouddodge, 
      shortDescription: "Pigeon dodging clouds!",
      tags: ["2D", "Mobile", "Android", "Unity"],
      details: "You're a pigeon and your only job is to dodge clouds and try to get as far as you can.",
      link: "https://algam3r.itch.io/cloud-dodge",
    },
    {
      title: "Sparkle Land",
      image: sparkleland, 
      shortDescription: "FPS in magical land!",
      tags: ["3D", "FPS", "Windows", "Unity"],
      details: "Small FPS game where you fight unique marshmallows and collect mushrooms as a unicorn.",
      link: "https://algam3r.itch.io/sparkle-land",
    },
  ];

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Milka Lillqvist
        <br />
        <span style={headingAccentStyles}>Portfolio Test</span>
      </h1>

      <h2 style={sectionHeadingStyles}>About Me</h2>
      <div style={aboutMeContainerStyles}>
      <p style={aboutMeTextStyles}>Hi! I’m an 18-year-old student from Oulu, ready to dive into new opportunities. I’m enthusiastic about showing my dedication and willingness to work hard.</p>
        <p style={aboutMeTextStyles}>I’m still building my programming skills, but I’m highly motivated to learn and grow. I’m excited about the chance to work with a team and take on new challenges. Here’s a bit more about me:</p>
        <p style={aboutMeTextStyles}>
          <span style={highlightTextStyles}>Team player:</span> I enjoy working with others and contributing to group goals.
        </p>
        <p style={aboutMeTextStyles}>
          <span style={highlightTextStyles}>Adaptable:</span> I can adjust to different tasks and environments easily.
        </p>
        <p style={aboutMeTextStyles}>
          <span style={highlightTextStyles}>Good communicator:</span> I’m effective in sharing ideas and collaborating.
        </p>
        <p style={aboutMeTextStyles}>I’m excited to bring my energy and enthusiasm to new projects and continue growing as a developer.</p>
      </div>

      <h2 style={sectionHeadingStyles}>Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} style={jobContainerStyles}>
          <h3 style={h3Styles}>{job.title}</h3>
          <p style={descriptionStyles}>{job.description}</p>
          <p style={durationBoxStyles}>
            {job.duration}
          </p>
          <ul style={listStyles}>
            {job.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 style={sectionHeadingStyles}>Education</h2>
      {education.map((edu, index) => (
        <div key={index} style={educationContainerStyles}>
          <h3 style={schoolNameStyles}>{edu.schoolName}</h3>
          <p style={generalTitleStyles}>{edu.generalTitle}</p>
          <p style={specificTitleStyles}>{edu.specificTitle}</p>
          <p style={graduationTimeStyles}>{edu.graduationTime}</p>
        </div>
      ))}

      <h2 style={sectionHeadingStyles}>Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          shortDescription={project.shortDescription}
          tags={project.tags}
          details={project.details}
          link={project.link}
        />
      ))}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
