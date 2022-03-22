import React from "react";
import { useState } from "react";

const Portfolio = ({ projectInfo }) => {

  const [projPhotos] = useState([
    {
      title: 'Social Rolls',
      desc: "Social Rolls is an application that allows Dungeons and Dragons enthusiasts to share posts in a forum with other users, store their character sheets, and offers a resource for beginners to learn about the world of DnD.",
      applink: 'https://socialrolls.herokuapp.com/',
      githublink: 'https://github.com/KrisSmith7/roll-initiative',
    },
    {
      title: 'Media Gems',
      desc: "Media Gems is an application that allows authenticated users to select a streaming service and look at reviews for popular shows on that particular service.",
      applink: 'https://gentle-dusk-15958.herokuapp.com/',
      githublink: 'https://github.com/KrisSmith7/media-gems',
    },
    {
      title: 'Weather Dashboard',
      desc: "Weather Dashboard allows users to search the weather in US cities and stores recent searches using the localStorageAPI. This application uses the Open Weather Map API for its weather data.",
      applink: 'https://krissmith7.github.io/weather-dashboard/',
      githublink: 'https://github.com/KrisSmith7/weather-dashboard',
    },
    {
      title: 'Password Generator',
      desc: "This application will allow users to generate a random password. Offers users a choice of uppercase characters, lowercase characters, special characters and/or numbers and will allow them to choose a length between 8-128 characters.",
      applink: 'https://krissmith7.github.io/password-generator/',
      githublink: 'https://github.com/KrisSmith7/password-generator',
    },
    {
      title: 'Javascript Quiz',
      desc: "This project incorporates javascript to create a timed quiz. When the timer expires, players will be able to save their scores in local storage so that they may see them at a later time.",
      applink: 'https://krissmith7.github.io/coded-js-quiz/',
      githublink: 'https://github.com/KrisSmith7/coded-js-quiz',
    },
    {
      title: 'Workday Scheduler',
      desc: "This calendar application allows a user to plan and save events for each hour of the current day (8am-5pm). The application uses JQuery, Bootstrap, and Moment.js APIs for its interface and functionality.",
      applink: 'https://krissmith7.github.io/workday-scheduler/',
      githublink: 'https://github.com/KrisSmith7/workday-scheduler',
    },
    {
      title: 'CryptoQuotes',
      desc: "This application shows a snapshot of users' cryptocurrency values today compared to the value of when they bought it and provides the user with a motivational or inspirational quote based on if the user has gained or lost.",
      applink: 'https://krissmith7.github.io/cryptoquotes/',
      githublink: 'https://github.com/KrisSmith7/cryptoquotes',
    },
  ]);

  return (

    <section className="bg-gray">


      <div className="bg-cover h-1/2 w-full hero-pattern rounded-b-lg">
        <div className="bg-royal-purple/25 w-full rounded-md py-2">

          <blockquote className="text-white flex flex-col items-end font-light italic text-xl px-2">You can't use up creativity. The more you use, the more you have.<span className="font-shrikhand font-normal not-italic tracking-widest">-Maya Angelou</span></blockquote>
        </div>
      </div>



      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative pb-20"
        data-bs-ride="carousel"
      >

        {/* <!-- Indicators --> */}
        <div className="carousel-indicators rounded-md bg-gradient-to-l from-orange to-purple right-0 bottom-0 left-0 p-2 mb-4">
          {projPhotos.map((slideButtonChoices, i) => (
            <div key={`slidekey${i}`}>
              <button
                data-bs-target="#carouselDarkVariant"
                data-bs-slide-to={`${i}`}
                className="active bg-white"
                aria-current="true"
                aria-label={`Slide ${i}`}
              ></button>
            </div>
          ))}
        </div>

        <div class="carousel-inner relative w-full overflow-hidden">

          {/* creates carousel card for each object in projPhoto array      */}
          {projPhotos.map((image, i) => (
            <div className={i === 0 ? 'carousel-item active' : 'carousel-item'}>

              <div className="flex justify-center my-8">
                <div className="flex flex-col w-full md:max-w-xl rounded-lg bg-white shadow-lg">
                  <a href={image.applink} target="_blank">
                    <img className="w-full h-96 object-cover rounded-t-lg transition ease-in-out delay-500 hover:-translate-y-1 hover:scale-110 hover:duration-500" src={
                      i === 6 ? require(`../../assets/images/projects/6.gif`) : require(`../../assets/images/projects/${i}.png`)} alt={`Photo of ${image.title} Project`} />
                  </a>
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{image.title}</h5>
                    <p className="text-gray-700 text-base mb-4">
                      {image.desc}
                    </p>
                    <a href={image.githublink} target="_blank"><button type="button" className=" inline-block px-6 py-2.5 bg-purple text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange/50 active:shadow-lg transition duration-150 ease-in-out">Visit the Github Repo</button></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>

      </div>
    </section>
  );
};


export default Portfolio;