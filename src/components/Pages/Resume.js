import React from "react";
import resPhoto from "../../assets/images/resume/resumephoto.png";


function Resume() {
    return (
        <section className="min-h-screen w-full bg-no-repeat bg-cover gradient-bold">

{/* container for "download" message */}
            <div className="flex justify-center py-12 shadow-xl">
                <div className="flex flex-col items-center text-center w-1/2">
            <div className="w-3/4 h-1/2 flex items-center justify-center bg-royal-purple/50 rounded-t-md uppercase text-2xl p-4">
                <p className="font-shrikhand text-gray">
                    <a
                    href="resume/ksmithresumedownload.pdf"
                    download="KSmith-resume"
                    className="no-underline text-gray font-shrikhand font-normal tracking-wider hover:text-orange">
                    Click here or the image to download a copy.</a>
                    </p>
                    </div>

<div className="flex justify-center items-center h-1/2 w-3/4 mx-4">
                    <blockquote className="w-full h-full bg-royal-purple text-gray p-8 rounded-b-lg flex flex-col justify-center items-end font-light italic text-xl">“Just don’t give up trying to do what you really want to do. Where there’s love and inspiration, I don’t think you can go wrong.” <span className="font-shrikhand font-normal not-italic tracking-widest p-2"> -Ella Fitzgerald</span> </blockquote>
</div>
            </div>
          
           {/* image of resume as a link */}
             <div className="">
                    <a
                        href="resume/ksmithresumedownload.pdf"
                        download="KSmith-resume" >
                        <img className="resume-pic object-cover bg-purple shadow-md" src={resPhoto} alt="resume of developer" />
                    </a>
                </div>
               

            </div>

        </section>
    );
};

export default Resume;