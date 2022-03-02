import React from "react";
import resPhoto from "../../assets/images/resume/resumephoto.png";

function Resume () {
    return (
        <div>
           <p> Click image to download a copy of my resume.</p> 
         <a
        href="src\assets\images\resume\ksmithresumedownload.pdf"
        download
      >
        <img className="resume-pic" src={resPhoto} alt="resume of developer"/>
      </a>
        </div>
    );
};

export default Resume;