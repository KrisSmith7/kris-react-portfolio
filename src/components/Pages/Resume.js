import React from "react";
import resPhoto from "../../assets/images/resume/resumephoto.png";


function Resume() {
    return (
        <section className="min-h-screen w-full py-24 bg-no-repeat bg-cover gradient-bold">

{/* container for "download" message */}
            <div className="flex justify-center">
            <div className="shadow-lg shadow-orange border-t-2 border-x-2 border-orange p-2 rounded-sm"><a
                    href="resume/ksmithresumedownload.pdf"
                    download="KSmith-resume"
                    className="no-underline uppercase text-royal-purple text-xl">
                    Download My Resume</a></div>
            </div>
          
            <div className="flex items-center">
           {/* image of resume as a link */}
             <div className="flex w-full justify-center">
                    <a
                        href="resume/ksmithresumedownload.pdf"
                        download="KSmith-resume" >
                        <img className="resume-pic object-contain px-2 bg-purple/25 shadow-md" src={resPhoto} alt="resume of developer" />
                    </a>
                </div>
              



              {/* decorative circles */}
                {/* <div className="absolute inset-x-0 inline-flex justify-center items-center h-screen w-screen">
                    <div className="absolute top-36 left-12 rounded-full bg-orange border-2 border-purple h-48 w-48"></div>
                    <div className="absolute right-24 rounded-full bg-purple h-24 w-24"><div className="border-orange border-4 rounded-full h-24 w-24 relative top-12 left-12"></div></div>
                    <div className="absolute top-36 right-24 rounded-full bg-white border-4 border-double border-orange h-12 w-12"></div>
                    <div className="absolute top-48 left-12 rounded-full bg-purple border-4 border-orange h-36 w-36"></div>
                    <div className="absolute bottom-12 right-12 rounded-full bg-orange border-2 border-purple h-48 w-48"></div>
                    <div className="absolute bottom-48 left-24 rounded-full bg-purple h-24 w-24"><div className="border-orange border-4 rounded-full h-24 w-24 relative top-12 left-12"></div></div>
                    <div className="absolute bottom-24 left-12 rounded-full bg-white border-4 border-double border-orange h-12 w-12"></div>
                    <div className="absolute bottom-24 rounded-full bg-purple border-4 border-orange h-36 w-36"></div>
                </div> */}



               

            </div>

        </section>
    );
};

export default Resume;