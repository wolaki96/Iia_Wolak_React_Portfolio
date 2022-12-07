import React from 'react';


const Nav = ({ showAbout, showPortfolio, showContact, showResume }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems:
  'center'}}>
    <h1 onClick={showAbout}>About Me</h1>
    <h1 onClick={showPortfolio}>Portfolio</h1>
    <h1 onClick={showContact}>Contact</h1>
    <h1 onClick={showResume}>Resume</h1>
    </div>
  );
};

export default Nav;