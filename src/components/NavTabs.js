import React from 'react';
import purpleIcon from "../assets/images/page-graphics/svgIcons/woman-iconPurple.svg";
import orangeIcon from "../assets/images/page-graphics/svgIcons/woman-iconOrange.svg";
import grayIcon from "../assets/images/page-graphics/svgIcons/woman-iconGray.svg";

//create nav links at top of page that conditionally renders component based on selected link
function NavTabs({ currentPage, handlePageChange }) {
  
    
    // useEffect(() => {

    //   }, []);

    return (
        <nav className>

        <ul className="navbar">
            <li className="navbar-brand">
                <a
                    href="#home"
                    //each link uses setter from useState in MainContainer file to change current page
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    <div className='w-1/5 h-1/5 bg-dark-orange'>
                    <img src={purpleIcon} ></img>
                        </div>
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


        </nav>
    );
}

export default NavTabs;
