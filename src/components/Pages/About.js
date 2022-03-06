import React from "react";
import bannerImage from "../../assets/images/page-graphics/ksmith_texture_landing.png"
import purpleIcon from "../../assets/images/page-graphics/svgIcons/woman-iconPurple.svg";


function About() {
    return (
        <section className="bg-purple/50 py-4">
            <div className="w-full h-full flex justify-center items-stretch" >

                <div className="rounded-md border-2 border-royal-purple shadow-inner shadow-royal-purple w-1/3">
                    <img src={purpleIcon} alt="pic of developer"
                        className="rounded-md scale-125 h-full w-full" />
                </div>

                <div className="inline-grid">

                    {/* div with bio image */}
                    <div className="flex justify-center hidden lg:block lg:mx-2 lg:mb-0">
                        <img src={bannerImage} alt="Kris Smith"
                            className="rounded-md w-full h-full m-0" />
                    </div>

                            <div className="bg-dark-orange rounded-md flex items-center m-2 mb-0 hidden lg:block">
                                <blockquote className="h-full flex flex-col items-end text-gray font-light italic text-xl p-4">“There's so much creativity in brokeness. Brokeness will have you making it work.” <span className="font-shrikhand font-normal not-italic tracking-widest">-Issa Rae</span></blockquote>
                                </div>


                </div>

                    <div className="bg-royal-purple rounded-md w-1/3 px-4 pt-4 text-gray">
                        <div className="flex flex-col h-full justify-center items-center">
                        <h1 className="text-3xl">Who's That Girl?</h1>
                        <p className="leading-loose text-justify">Howdy! I love building big, bold, and beautiful applications. Web dev can be challenging, but I love the logic and complexities behind it and have always been fascinated by the amazing things we can create. Takes beauty, brains, and a little magic to code and I am here for it. <br /> If I'm not behind a computer, you can usually find me with my family -- watching a game, relaxing in the mountains, or hunting down a good trivia spot.</p>
                       </div>
                    </div>
            </div>
        </section>
    );
};

export default About;