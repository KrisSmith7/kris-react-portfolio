import React from 'react';


//create nav links at top of page that conditionally renders component based on selected link
function NavTabs({ currentPage, handlePageChange }) {
  
    
    // useEffect(() => {

    //   }, []);

    return (
        <ul className="bg-gray navbar nav-tabs">
            <li className="navbar-brand">
                <a
                    href="#home"
                    //each link uses setter from useState in MainContainer file to change current page
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    <span className='text-2xl uppercase'>
                        Kris Smith
                        </span>
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;
