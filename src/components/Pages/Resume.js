import React from "react";
import resPhoto from "../../assets/images/resume/resumephoto.png";


function Resume() {
    return (
        <section className="min-h-screen w-full bg-no-repeat bg-cover gradient-bold">

{/* container for "download" message */}
            <div className="flex justify-center py-12 shadow-xl">
                <div className="flex flex-col items-center justify-around text-center bg-purple/50 shadow-xl w-1/2">
            <div className="w-3/4"><a
                    href="resume/ksmithresumedownload.pdf"
                    download="KSmith-resume"
                    className="no-underline font-shrikhand text-royal-purple text-2xl">
                    Download My Resume</a></div>

<div className="flex justify-center items-center h-1/2 w-3/4 mx-4">
                    <blockquote className="w-full h-full bg-royal-purple text-gray p-8 rounded-full flex flex-col justify-center items-end font-light italic text-xl">“Just don’t give up trying to do what you really want to do. Where there’s love and inspiration, I don’t think you can go wrong.” <span className="font-shrikhand font-normal not-italic tracking-widest p-2"> -Ella Fitzgerald</span> </blockquote>
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