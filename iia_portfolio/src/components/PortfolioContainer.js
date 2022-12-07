import React, { useState } from 'react';
import Nav from './nav';
import Resume from './pages/resume';
import About from './pages/about';
import Portfolio from './pages/Portfolio';
import Contact from './pages/contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
      }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}
      <footer>Contact Me</footer>
    </div>
  );
}