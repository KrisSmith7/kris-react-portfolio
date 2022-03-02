import React from "react";
import { useState } from "react";

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository


const Portfolio = ({ projectInfo }) => {

    const [projPhotos] = useState([
      {
        title: 'Media Gems',
        desc: 'collab proj',
        applink: 'https://gentle-dusk-15958.herokuapp.com/',
        githublink: 'https://github.com/KrisSmith7/media-gems',
      },
      {
        title: 'Weather Dashboard',
        desc: 'weather api calls',
        applink: 'https://krissmith7.github.io/weather-dashboard/',
        githublink: 'https://github.com/KrisSmith7/weather-dashboard',
      },
      {
        title: 'Password Generator',
        desc: 'pass gen',
        applink: 'https://krissmith7.github.io/password-generator/',
        githublink: 'https://github.com/KrisSmith7/password-generator',
      },
      {
        title: 'Javascript Quiz',
        desc: 'timed quiz',
        applink: 'https://krissmith7.github.io/coded-js-quiz/',
        githublink: 'https://github.com/KrisSmith7/coded-js-quiz',
      },
      {
        title: 'Workday Scheduler',
        desc: 'CRUD pratice',
        applink: 'https://krissmith7.github.io/workday-scheduler/',
        githublink: 'https://github.com/KrisSmith7/workday-scheduler',
      },
      {
        title: 'CryptoQuotes',
        desc: 'api calls',
        applink: 'https://krissmith7.github.io/cryptoquotes/',
        githublink: 'https://github.com/KrisSmith7/cryptoquotes',
      },
    ]);

    return (
        <div>
          <div className="flex-row">
            {projPhotos.map((image, i) => (
                <div>
            <a href={image.applink}>
              <img
                src={ 
                i === 5 ? require(`../../assets/images/projects/5.gif`) : require(`../../assets/images/projects/${i}.png`)}
                alt={image.title}
                className="portfolio-pic"
                key={image.title}
              />
              <p>{image.desc}</p>
              </a>
              <a href={image.githublink} target="_blank" >{image.githublink}</a>
              </div>
            ))}
          </div>
        </div>
      );
    };


export default Portfolio;