import React from "react";

function Footer() {
    return (
        <footer className='py-4 flex justify-center text-center'>
          <div className='px-4'>
          <a href='https://github.com/KrisSmith7' target="_blank">
            <i className="bi-github"></i>
          </a>
          </div>
          <div className='px-4'>
          <a href='https://www.linkedin.com/in/kristiansmith220/' target="_blank">
          <i className="bi bi-linkedin"></i>
          </a>
          </div>
      
          <div className='px-4'>
          <a href='https://stackoverflow.com/users/17004629/krissmith7' target="_blank">
          <i className="bi bi-stack-overflow"></i>
          </a>
          </div>
       
      </footer>
    )
};

export default Footer;