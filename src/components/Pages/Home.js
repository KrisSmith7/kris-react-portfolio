import React from "react";
import { Typewriter } from 'typewriting-react'


function Home() {
    return (
        <section className="h-screen">
            <div className="hero-pattern bg-repeat-round h-full w-full flex items-center justify-center">

                <div className="bg-royal-purple w-full h-1/5 flex flex-col justify-center items-center">

                    <h1 className="items-end text-gray text-justify normal-case text-2xl lg:text-4xl">
                        Hey there! I'm Kris and</h1>
                    {/* typing animation */}
                    <Typewriter words={["I'm a webDeveloper( )"]}
                        typingSpeed={75} cursorClassName="text-gray" nextWordDelay={4000}
                        className="font-shrikhand text-2xl lg:text-4xl items-end text-gray text-justify normal-case" />


                </div>
            </div>

        </section>
    );
};

export default Home;