import React from 'react';
import { useState } from 'react';
import './App.css';
import Nav from "./components/pages/HeaderNav";
import About from "./components/pages/about";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/contact";
import Resume from "./components/pages/resume";
import Footer from "./components/pages/footer";

function App() {

  const [pageIndex, setPageIndex] = useState(0);

  return (

    <div>

      <Nav
        showAbout={() => setPageIndex(0)}
        showPortfolio={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
        showResume={() => setPageIndex(3)}
        active={pageIndex}

      />
      {pageIndex === 0 ? (
        <About />
      ) : pageIndex === 1 ? (
        <Portfolio />
      ) : pageIndex === 2 ? (
        <Contact />
      ) : pageIndex === 3 ? (
        <Resume />
      ) : (
        <About />
      )}

      < Footer />

    </div >

  );
}

export default App;
