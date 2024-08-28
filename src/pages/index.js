import * as React from "react";

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

const listStyles = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  marginBottom: 30,
};

const IndexPage = () => {
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
      <h3>
        Joku kiva paikka...
        <br />
        <span>Tein siellä hauskoja juttuja.</span>
      </h3>
      <ul style={listStyles}>
        <li>badshbvhabvd</li>
        <li>badshbvhabvd</li>
        <li>badshbvhabvd</li>
      </ul>

      <h2 style={sectionHeadingStyles}>Education</h2>

      <h2 style={sectionHeadingStyles}>Projects</h2>

    </main>
  );
}

export default IndexPage;

export const Head = () => <title>Home Page</title>;
