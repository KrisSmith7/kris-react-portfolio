import React from "react";

function Footer() {
    return (
        <footer className='py-4 bg-gray w-full h-full'>
         <div className="w-full h-full flex justify-center">
          <div className='px-4'>
          <a href='https://github.com/KrisSmith7' target="_blank">
            <i className="bi-github icon-purple scale-125"></i>
          </a>
          </div>
          <div className='px-4'>
          <a href='https://www.linkedin.com/in/kristiansmith220/' target="_blank">
          <i className="bi bi-linkedin icon-purple"></i>
          </a>
          </div>
      
          <div className='px-4'>
          <a href='https://stackoverflow.com/users/17004629/krissmith7' target="_blank">
          <i className="bi bi-stack-overflow icon-purple"></i>
          </a>
          </div>
      </div>

      </footer>
    )
};

export default Footer;