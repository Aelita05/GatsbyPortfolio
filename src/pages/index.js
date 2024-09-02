// Import React and useState hook from the 'react' library
import React, { useState } from "react";

// Import images to be used in the project
import clouddodge from '../images/clouddodge.png';
import sparkleland from '../images/sparkleland.png';

// Define styles for the main page container
const pageStyles = {
  color: "#232129", // Text color
  padding: 96, // Padding around the content
  fontFamily: "-apple-system, Roboto, sans-serif, serif", // Font stack
  lineHeight: 1.6, // Line height for text
};

// Define styles for the main heading (name and portfolio title)
const headingStyles = {
  margin: 'auto', // Center the container
  marginTop: 0, // No margin on top
  marginBottom: 64, // Space below the heading
  maxWidth: 800, // Maximum width for the heading
  fontSize: '40px', // Font size for the heading
  textAlign: 'center', // Center align the heading text
};

// Define styles for the heading accent (portfolio subtitle)
const headingAccentStyles = {
  color: "#663399", // Text color (purple)
  fontSize: '32px', // Font size for the accent text
  display: 'block', // Display as a block element
  marginTop: 10, // Space above the accent text
};

// Define styles for section headings (e.g., About Me, Experience)
const sectionHeadingStyles = {
  borderBottom: '2px solid #663399', // Border below the heading
  paddingBottom: 10, // Padding below the heading text
  marginTop: 45, // Space above the heading
  marginBottom: 30, // Space below the heading
  fontSize: '24px', // Font size for the section heading
  fontWeight: 'bold', // Bold text for the section heading
};

// Define styles for the About Me container
const aboutMeContainerStyles = {
  maxWidth: 'auto', // Maximum width for the container
  margin: 'auto', // Center the container
  padding: '20px', // Padding inside the container
  backgroundColor: '#f9f9f9', // Background color
  borderRadius: '8px', // Rounded corners
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow around the container
  lineHeight: 1.8, // Line height for the text inside
  marginBottom: '40px', // Space below the container
};

// Define styles for the text in the About Me section
const aboutMeTextStyles = {
  fontSize: '18px', // Font size for the text
  color: '#555', // Text color (dark gray)
};

// Define styles for highlighting important text in the About Me section
const highlightTextStyles = {
  fontWeight: 'bold', // Bold text for emphasis
};

// Define styles for job experience container
const jobContainerStyles = {
  marginBottom: 40, // Space below the job container
  padding: '20px', // Padding inside the job container
  borderRadius: '8px', // Rounded corners
  backgroundColor: '#f9f9f9', // Background color
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow around the container
};

// Define styles for the job duration box
const durationBoxStyles = {
  fontSize: '14px', // Font size for the duration text
  color: '#666', // Text color (gray)
  background: 'linear-gradient(to right, #f0f0f0, #f9f9f9)', // Background color
  borderRadius: '5px', // Rounded corners
  padding: '5px 10px', // Padding inside the duration box
  marginTop: '10px', // Space above the duration box
  marginBottom: '10px', // Space below the duration box
};

// Define styles for job titles (h3 elements)
const h3Styles = {
  fontSize: '22px', // Font size for job titles
  color: '#333', // Text color (dark gray)
  margin: 0, // No margin
  fontWeight: 'bold', // Bold text for job titles
};

// Define styles for the job description text
const descriptionStyles = {
  fontSize: '16px', // Font size for the description text
  color: '#555', // Text color (dark gray)
  marginTop: '5px', // Space above the description
  lineHeight: 1.5, // Line height for the description text
};

// Define styles for the education container
const educationContainerStyles = {
  marginBottom: 40, // Space below the education container
  padding: '20px', // Padding inside the container
  borderRadius: '8px', // Rounded corners
  backgroundColor: '#f9f9f9', // Background color
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow around the container
  display: 'flex', // Use flexbox for layout
  flexDirection: 'column', // Arrange children vertically
  alignItems: 'flex-start', // Align items to the start (left)
};

// Define styles for school names in the education section
const schoolNameStyles = {
  fontSize: '22px', // Font size for the school name
  color: '#333', // Text color (dark gray)
  fontWeight: 'bold', // Bold text for the school name
  marginBottom: '5px', // Space below the school name
};

// Define styles for the general title (e.g., program of study)
const generalTitleStyles = {
  fontSize: '18px', // Font size for the general title
  color: '#555', // Text color (dark gray)
  marginBottom: '5px', // Space below the general title
};

// Define styles for the specific title (e.g., specialization)
const specificTitleStyles = {
  fontSize: '16px', // Font size for the specific title
  color: '#777', // Text color (lighter gray)
  fontStyle: 'italic', // Italicized text for emphasis
  marginBottom: '10px', // Space below the specific title
};

// Define styles for the graduation time box
const graduationTimeStyles = {
  fontSize: '14px', // Font size for the graduation time text
  color: '#666', // Text color (dark gray)
  backgroundColor: '#f0f0f0', // Background color
  borderRadius: '5px', // Rounded corners
  padding: '5px 10px', // Padding inside the box
  marginTop: 'auto', // Push the box to the bottom
};

// Define styles for unordered lists (e.g., tasks list)
const listStyles = {
  listStyleType: 'disc', // Use disc bullets
  paddingLeft: '20px', // Indent the list
  marginBottom: 0, // No margin at the bottom
};

// Define styles for project container (overall project item)
const projectContainerStyles = {
  display: 'flex', // Use flexbox for layout
  alignItems: 'flex-start', // Align items to the start (top)
  marginBottom: 20, // Space below each project
  padding: '20px', // Padding inside the container
  borderRadius: '8px', // Rounded corners
  backgroundColor: '#f9f9f9', // Background color
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow around the container
  cursor: 'pointer', // Change cursor to pointer on hover
};

// Define styles for project images
const projectImageStyles = {
  width: '100px', // Set width for the image
  height: '100px', // Set height for the image
  borderRadius: '8px', // Rounded corners for the image
  marginRight: '20px', // Space to the right of the image
  flexShrink: 0, // Prevent the image from shrinking
};

// Define styles for the project content container
const projectContentStyles = {
  flex: 1, // Allow the content to take up remaining space
};

// Define styles for project titles (h3 elements)
const projectTitleStyles = {
  fontSize: '22px', // Font size for project titles
  color: '#333', // Text color (dark gray)
  fontWeight: 'bold', // Bold text for project titles
  marginBottom: 10, // Space below the title
};

// Define styles for the short description of projects
const projectShortDescriptionStyles = {
  fontSize: '16px', // Font size for short descriptions
  color: '#555', // Text color (dark gray)
  marginBottom: 10, // Space below the description
};

// Define styles for project tags (e.g., platform, technology)
const projectTagsStyles = {
  fontSize: '14px', // Font size for tags
  color: '#999', // Text color (light gray)
  marginBottom: '10px', // Space below the tags
  fontStyle: 'italic', // Italicized text for emphasis
};

// Define styles for detailed project descriptions
const projectDetailsStyles = {
  fontSize: '16px', // Font size for details
  color: '#555', // Text color (dark gray)
  lineHeight: 1.5, // Line height for the details
};

// Define styles for links in the project details
const linkStyles = {
  color: '#663399', // Link color (purple)
  textDecoration: 'none', // Remove underline from links
  fontWeight: 'bold', // Bold text for links
};

// Define styles for the Contact Me container
const contactMeContainerStyles = {
  maxWidth: 'auto', // Maximum width for the container
  margin: 'auto', // Center the container
  padding: '20px', // Padding inside the container
  backgroundColor: '#f9f9f9', // Background color
  borderRadius: '8px', // Rounded corners
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow around the container
  lineHeight: 1.8, // Line height for the text inside
  marginBottom: '40px', // Space below the container
};

// Define styles for person name in the contact section
const contactNameStyles = {
  fontSize: '22px', // Font size for the name
  color: '#333', // Text color (dark gray)
  fontWeight: 'bold', // Bold text for the name
  marginBottom: '5px', // Space below the name
};

// Define styles for the email
const emailNameStyles = {
  fontSize: '18px', // Font size for the email
  color: '#555', // Text color (dark gray)
  marginBottom: '5px', // Space below the email
};

// Define styles for the phone number
const phoneNumberStyles = {
  fontSize: '16px', // Font size for the phone number
  color: '#777', // Text color (lighter gray)
  fontStyle: 'italic', // Italicized text for emphasis
  marginBottom: '10px', // Space below the phone number
};

// Define styles for the footer
const footerStyles = {
  marginTop: '50px', // The space above the footer8
  fontSize: '13px', // Font size for the footer
  color: '#777', // Text color (lighter gray)
};

// Component representing a single project
const Project = ({ title, image, shortDescription, tags, details, link }) => {
  // useState hook to manage the expanded/collapsed state of project details
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle key down events to allow keyboard accessibility
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") { // Toggle expansion on Enter or Space key
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      style={projectContainerStyles} // Apply container styles
      onClick={() => setIsExpanded(!isExpanded)} // Toggle expansion on click
      onKeyDown={handleKeyDown} // Handle keyboard events
      role="button" // Make the div accessible as a button
      tabIndex={0} // Make the div focusable
    >
      {/* Project image */}
      <img src={image} alt={`${title} screenshot`} style={projectImageStyles} />
      <div style={projectContentStyles}>
        {/* Project title */}
        <h3 style={projectTitleStyles}>{title}</h3>
        {/* Short description */}
        <p style={projectShortDescriptionStyles}>{shortDescription}</p>
        {isExpanded && ( // Show details only if expanded
          <>
            {/* Project tags */}
            <p style={projectTagsStyles}>{tags.join(', ')}</p>
            <div style={projectDetailsStyles}>
              {/* Detailed project description */}
              <p>{details}</p>
              {/* Link to the project */}
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

// Main component for the index page
const IndexPage = () => {
  // Job experience data
  const jobs = [
    {
      title: "Power", // Job title
      description: "Job practice", // Short job description
      duration: "May 2022 - June 2022", // Duration of the job
      tasks: [ // List of tasks performed
        "Helped customers and salespersons on various tasks.",
        "Installed lots of electronic price tags to shelves.",
        "Kept the shelves organized and public spaces tidy."
      ],
    },
  ];

  // Education data
  const education = [
    {
      schoolName: "OSAO Kaukovainio", // School name
      generalTitle: "Information and Communications Technology", // General title (program)
      specificTitle: "Software Developer", // Specific title (specialization)
      graduationTime: "August 2021 - December 2024", // Duration of the education program
    },
  ];

  // Projects data
  const projects = [
    {
      title: "Cloud Dodge", // Project title
      image: clouddodge, // Image associated with the project
      shortDescription: "Pigeon dodging clouds!", // Short description of the project
      tags: ["2D", "Mobile", "Android", "Unity"], // Tags describing the project
      details: "You're a pigeon and your only job is to dodge clouds and try to get as far as you can.", // Detailed description
      link: "https://algam3r.itch.io/cloud-dodge", // Link to the project
    },
    {
      title: "Sparkle Land", // Project title
      image: sparkleland, // Image associated with the project
      shortDescription: "FPS in magical land!", // Short description of the project
      tags: ["3D", "FPS", "Windows", "Unity"], // Tags describing the project
      details: "Small FPS game where you fight unique marshmallows and collect mushrooms as a unicorn.", // Detailed description
      link: "https://algam3r.itch.io/sparkle-land", // Link to the project
    },
  ];

  // Contact me data
  const contacts = [
    {
      name: "Milka Lillqvist", // Contact name
      email: "milka.lillqvist@gmail.com", // Email
      phoneNumber: "(+358) 409658471" // Phonenumber
    }
  ];

  return (
    <main style={pageStyles}>
      {/* Main heading */}
      <h1 style={headingStyles}>
        Milka Lillqvist
        <br />
        <span style={headingAccentStyles}>Portfolio Test</span>
      </h1>

      {/* About Me section */}
      <h2 style={sectionHeadingStyles}>About Me</h2>
      <div style={aboutMeContainerStyles}>
        <p style={aboutMeTextStyles}>Hi! I’m an 18-year-old student from Oulu, ready to dive into new opportunities. I’m enthusiastic about showing my dedication and willingness to work hard.</p>
        <p style={aboutMeTextStyles}>I’m still building my programming skills, but I’m highly motivated to learn and grow. I’m excited about the chance to work with a team and take on new challenges. Here’s a bit more about me:</p>
        <p style={aboutMeTextStyles}>
          <br />
          <span style={highlightTextStyles}>Team player:</span> I enjoy working with others and contributing to group goals.
        </p>
        <p style={aboutMeTextStyles}>
          <span style={highlightTextStyles}>Adaptable:</span> I can adjust to different tasks and environments easily.
        </p>
        <p style={aboutMeTextStyles}>
          <span style={highlightTextStyles}>Good communicator:</span> I’m effective in sharing ideas and collaborating.
        </p>
        <br />
        <p style={aboutMeTextStyles}>I’m excited to bring my energy and enthusiasm to new projects and continue growing as a developer.</p>
      </div>

      {/* Experience section */}
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

      {/* Education section */}
      <h2 style={sectionHeadingStyles}>Education</h2>
      {education.map((edu, index) => (
        <div key={index} style={educationContainerStyles}>
          <h3 style={schoolNameStyles}>{edu.schoolName}</h3>
          <p style={generalTitleStyles}>{edu.generalTitle}</p>
          <p style={specificTitleStyles}>{edu.specificTitle}</p>
          <p style={graduationTimeStyles}>{edu.graduationTime}</p>
        </div>
      ))}

      {/* Projects section */}
      <h2 style={sectionHeadingStyles}>Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index} // Unique key for each project
          title={project.title} // Pass project title as a prop
          image={project.image} // Pass project image as a prop
          shortDescription={project.shortDescription} // Pass short description as a prop
          tags={project.tags} // Pass tags as a prop
          details={project.details} // Pass detailed description as a prop
          link={project.link} // Pass project link as a prop
        />
      ))}

      {/* Contacts section */}
      <h2 style={sectionHeadingStyles}>Contact Me</h2>
      {contacts.map((contacts, index) => (
        <div key={index} style={contactMeContainerStyles}>
          <h3 style={contactNameStyles}>{contacts.name}</h3>
          <p style={emailNameStyles}>{contacts.email}</p>
          <p style={phoneNumberStyles}>{contacts.phoneNumber}</p>
        </div>
      ))}

      {/* Footer section */}
      <footer style={footerStyles}>Copyright © 2024 Milka Lillqvist</footer>
    </main>
  );
};

// Export the main component as the default export
export default IndexPage;

// Export a separate Head component for setting the page title
export const Head = () => <title>Home Page</title>;
