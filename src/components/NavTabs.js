import { render } from '@testing-library/react';
import { React, useEffect } from 'react';
import purpleIcon from "../assets/images/page-graphics/svgIcons/woman-iconPurple.svg";

//create nav links at top of page that conditionally renders component based on selected link
function NavTabs({ currentPage, handlePageChange }) {

    // automates change from landing page to about page on first render after 5 seconds.
    useEffect(() => { setTimeout((page) => { handlePageChange('About') }, 3500) }, []);

    return (
        <nav className="flex bg-orange items-end justify-between">

            <div className="w-24">
                <div className='flex flex-col md:flex-row items-end'>
                    <img src={purpleIcon}></img>
                    <p className='w-24 font-shrikhand text-royal-purple text-sm text-center'>Kris Smith</p>
                </div>
            </div>
            {/* each link uses setter from useState in MainContainer file to change current page */}
            <ul className="nav justify-content-end">
                <li className="nav-tabs nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-tabs nav-item">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-tabs nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-tabs nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resum??
                    </a>
                </li>
            </ul>


        </nav>
    );
}

export default NavTabs;
