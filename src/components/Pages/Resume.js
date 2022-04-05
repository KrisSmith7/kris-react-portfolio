import React from "react";
import resPhoto from "../../assets/images/resume/resumephoto.png";


function Resume() {
    return (
        <section className="min-h-screen lg:w-full bg-no-repeat bg-cover gradient-bold">

            {/* container for "download" message */}
            <div className="flex flex-col lg:flex-row justify-center lg:py-12 shadow-xl">
                <div className="flex flex-col items-center text-center lg:w-1/2">
                    <div className="lg:w-3/4 lg:h-1/2 flex items-center justify-center order-2 bg-royal-purple/50 rounded-md uppercase text-2xl p-4">
                        <p className="font-shrikhand text-gray">
                            <a
                                href="resume/ksmithresumedownload.pdf"
                                download="KSmith-resume"
                                className="no-underline text-gray font-shrikhand font-normal tracking-wider hover:text-orange">
                                Click here or on the image to download a full version of my resume.</a>
                        </p>
                    </div>

                    <div className="flex flex-col w-full lg:flex-row lg:justify-center lg:items-center lg:h-1/2 lg:w-3/4 mx-4">
                        <blockquote className="w-full lg:h-full bg-royal-purple text-gray p-2 lg:p-8 rounded-md flex flex-col justify-center items-end font-light italic text-xl">“Just don’t give up trying to do what you really want to do. Where there’s love and inspiration, I don’t think you can go wrong.” <span className="font-shrikhand font-normal not-italic tracking-widest p-2"> -Ella Fitzgerald</span> </blockquote>
                    </div>
                </div>

                {/* image of resume as a link */}
                <div className="flex justify-center">
                    <a
                        href="resume/ksmithresumedownload.pdf"
                        download="KSmith-resume" >
                        <img className="resume-pic object-cover lg:bg-purple shadow-md" src={resPhoto} alt="resume of developer" />
                    </a>
                </div>


            </div>

        </section>
    );
};

export default Resume;