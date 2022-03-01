import React from "react";
import bioImage from "../../assets/images/bio.jpg" 

function About() {
    return (
        <section>
            <img className="App-logo" src={bioImage} alt="pic of developer"/>
            <h1>Full-Stack Web Dev</h1>
            <p>Howdy. New to web development and design, but always eager to jump in. I love the logic behind it and have always been so fascinated by the amazing things we can create. When I'm not working or practicing web dev, you can usually find me with my family, watching a game, or hunting down a good trivia spot.</p>
        </section>
    );
};

export default About;