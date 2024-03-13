import React from "react";
import landing from "../assets/screenshot/01-Landing.png";
import signin from "../assets/screenshot/02-Signin.png";
import signup from "../assets/screenshot/03-Signup.png";
import browse from "../assets/screenshot/04-Browse.png";
import movieList from "../assets/screenshot/05-Movie-List.png";
import shimmer from "../assets/screenshot/06-Shimmer-loading.png";
import search from "../assets/screenshot/07-Search.png";
import watch from "../assets/screenshot/08-Watch.png";

const About = () => {
  return (
    <div className="about-us mt-[70px] px-4 md:px-24">
      <h1 className="text-5xl text-white text-center mb-4 font-bold">
        About NetflixGPT
      </h1>
      <p className="text-gray-400 mb-8 text-center">
        "Experience NetflixGPT: A Feature-Rich, Mobile-Friendly Netflix Clone
        with Cutting-Edge Tech Stack! 🚀
        <br />
        <br />
        Dive into the world of NetflixGPT, a carefully crafted Netflix clone
        that boasts an impressive tech stack including React, Redux, Webpack,
        React Router, TMDB APIs, Tailwind CSS, Firebase, React-DOM, and Jest.
        The result? An exceptional web application designed for optimal
        performance and seamless user interactions. NetflixGPT is fully
        optimized to ensure lightning-fast load times and a smooth user
        experience, making it perfect for both desktop and mobile devices.
        Discover a user-friendly interface that offers an immersive viewing
        experience, all in the palm of your hand.
        <br />
        <br />
        Join me in the future of web development, where innovation and
        user-centric design converge to create NetflixGPT—a showcase of what's
        possible in the realm of entertainment.
      </p>

      <div className="mb-8 text-gray-200">
        Github:{" "}
        <a
          href="https://github.com/maheshsp1809/NetflixGPT"
          className="hover:text-blue-700 ml-3 text-blue-600 text-sm"
          target="_blank"
          rel="noreferrer"
        >
          NetflixGPT
        </a>
        <br />
        Live Demo:{" "}
        <a
          href="https://8ttribute.com"
          target="_blank"
          className="hover:text-blue-700 ml-3 text-blue-600 text-sm"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <br></br>
        Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/mahesh-sp-9923a3176/"
          className="hover:text-blue-700 ml-3 text-blue-600 text-sm"
          target="_blank"
          rel="noreferrer"
        >
          Mahesh SP
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="screen rounded overflow-hidden shadow-xl">
          <a href={landing} target="_blank" rel="noreferrer">
            <img
              src={landing}
              className="w-full hover:scale-110"
              style={{ transition: "0.9s" }}
              alt="Landing Page"
            />
          </a>
        </div>
        <div className="screen rounded overflow-hidden shadow-xl">
          <a href={signin} target="_blank" rel="noreferrer">
            <img
              src={signin}
              className="w-full hover:scale-110"
              style={{ transition: "0.9s" }}
              alt="Signin Page"
            />
          </a>
        </div>
        <div className="screen rounded overflow-hidden shadow-xl">
          <a href={signup} target="_blank" rel="noreferrer">
            <img
              src={signup}
              className="w-full hover:scale-110"
              style={{ transition: "0.9s" }}
              alt="Signup Page"
            />
          </a>
        </div>
        <div className="screen rounded overflow-hidden shadow-xl">
          <a href={browse} target="_blank" rel="noreferrer">
            <img
              src={browse}
              className="w-full hover:scale-110"
              style={{ transition: "0.9s" }}
              alt="Browse Page"
            />
          </a>
        </div>
        <div className="screen rounded overflow-hidden shadow-xl">
          <a href={movieList} target="_blank" rel="noreferrer">
            <img
              src={movieList}
              className="w-full hover:scale-110"
              style={{ transition: "0.9s" }}
              alt="Movie List Page"
            />
          </a>
        </div>
        <div className="screen rounded overflow-hidden shadow-xl">
          <a href={search} target="_blank" rel="noreferrer">
            <img
              src={search}
              className="w-full hover:scale-110"
              style={{ transition: "0.9s" }}
              alt="Search Page"
            />
          </a>
        </div>
        <div className="screen rounded overflow-hidden shadow-xl">
          <a href={shimmer} target="_blank" rel="noreferrer">
            <img
              src={shimmer}
              className="w-full hover:scale-110"
              style={{ transition: "0.9s" }}
              alt="Shimmer UI loading"
            />
          </a>
        </div>
        <div className="screen rounded overflow-hidden shadow-xl">
          <a href={watch} target="_blank" rel="noreferrer">
            <img
              src={watch}
              className="w-full hover:scale-110"
              style={{ transition: "0.9s" }}
              alt="Watch Now Page"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
