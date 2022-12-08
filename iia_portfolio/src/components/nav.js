import React from 'react';



function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar" style={{ color: "white" }}>
      <li


        onClick={() => handlePageChange('About')}


        className={currentPage === 'Home' ? 'tabs active' : 'tabs'}

      >About

      </li>
      <li


        onClick={() => handlePageChange('Portfolio')}


        className={currentPage === 'Portfolio' ? 'tabs active' : 'tabs'}
      >
        Portfolio

      </li>
      <li


        onClick={() => handlePageChange('Contact')}


        className={currentPage === 'Contact' ? 'tabs active' : 'tabs'}
      >
        Contact

      </li>
      <li




        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'tabs active' : 'tabs'}
      >
        Resume

      </li>
    </ul>
  );
}

export default Nav;
