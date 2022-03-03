import React from "react";
import resPhoto from "../../assets/images/resume/resumephoto.png";

function Resume () {
    return (
        <section className="h-screen">

        <div className="flex lg:justify-between">

            <div className="absolute lg:h-full lg:w-1/2">
                <div className="relative left-20 rounded-full bg-orange h-60 w-60"></div>
                <div className="relative left-8 bottom-12 rounded-full bg-purple h-20 w-20"></div>
                <div className="relative left-12 top-4 rounded-full bg-white border-4 border-double border-orange h-12 w-12"></div>
            </div>

        <div>
           <p>Click image to <span className="font-bold skew-y-6 text-white text-xl">download</span> a copy of my resume.</p> 
        </div>

        

           <div>
                <a
                href="resume/ksmithresumedownload.pdf"
                download="KSmith-resume"
            >
                <img className="resume-pic" src={resPhoto} alt="resume of developer"/>
            </a>
        </div>
        </div>
        </section>
    );
};

export default Resume;