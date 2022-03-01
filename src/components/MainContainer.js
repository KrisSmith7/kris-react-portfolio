import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* currentPage is a variable being passed as a prop for the NavTabs, handlePageChange is another prop referencing the value of the callback function used in the NavTabs component
      passing the current page from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* conditionally renders component based on value of the currentPage variable; calls the function */}
      {renderPage()}
    </div>
  );
}
