import React from 'react';


const Nav = ({ showAbout, showProjects, showContact, showResume }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems:
  'center'}}>
    <h1 onClick={showAbout}>About Me</h1>
    <h1 onClick={showProjects}>Portfolio</h1>
    <h1 onClick={showContact}>Contact</h1>
    <h1 onClick={showResume}>Resume</h1>
    </div>
  );
};

export default Nav;