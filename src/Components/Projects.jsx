import React from 'react';

import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';
import project4Img from '../assets/project4.png';
import project5Img from '../assets/project5.png';
import project6Img from '../assets/project6.png';
import project7Img from '../assets/project7.png';
import project8Img from '../assets/project8.png';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: "Weather App (React)",
            description: "Interactive weather app built with React for real-time forecasts.",
            img: project1Img,
            liveLink: "https://weather-app-react-beige-chi.vercel.app/",
            sourceCode: "https://github.com/Piyushsaini7742/Weather-App-React-.git"
        },
        {
            id: 2,
            title: "Country Data Fetcher",
            description: "Fetches and displays detailed country information from reliable sources.",
            img: project2Img,
            liveLink: "https://country-data-fetcher.vercel.app/",
            sourceCode: "https://github.com/Piyushsaini7742/Country-Data-Fetcher.git"
        },
        {
            id: 3,
            title: "Food Website",
            description: "Website showcasing diverse recipes, food blogs, and cooking tips.",
            img: project3Img,
            liveLink: "https://food-website-ten-peach.vercel.app/",
            sourceCode: "https://github.com/Piyushsaini7742/Food-Website.git"
        },
        {
            id: 4,
            title: "Login App (React)",
            description: "React-based app for user authentication with secure login functionality.",
            img: project4Img,
            liveLink: "https://login-app-react-seven.vercel.app/",
            sourceCode: "https://github.com/Piyushsaini7742/Login-App-React-.git"
        },
        {
            id: 5,
            title: "To-do App (React)",
            description: "Simple React app to manage tasks with add, edit, delete features.",
            img: project5Img,
            liveLink: "https://to-do-app-react-gamma-blond.vercel.app/",
            sourceCode: "https://github.com/Piyushsaini7742/To-Do-App-React-.git"
        },
        {
            id: 6,
            title: "Travel Website",
            description: "Explore destinations, book trips, and discover travel guides online.",
            img: project6Img,
            liveLink: "https://travel-website-silk-xi.vercel.app/",
            sourceCode: "https://github.com/Piyushsaini7742/Travel-Website.git"
        },
        {
            id: 7,
            title: "Calculator",
            description: "Simple calculator app for basic arithmetic operations and calculations.",
            img: project7Img,
            liveLink: "https://calculator-photo-only.vercel.app/",
            sourceCode: "https://github.com/Piyushsaini7742/Calculator.git"
        },
        {
            id: 8,
            title: "Number Filter",
            description: "App to filter and sort numbers based on user-defined criteria.",
            img: project8Img,
            liveLink: "https://number-filter-one.vercel.app/",
            sourceCode: "https://github.com/Piyushsaini7742/Number-Filter.git"
        }
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {projectData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex items-center gap-4">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 10.5L21 3m0 0v6.75m0-6.75H14.25M10.5 13.5l-7.5 7.5m0 0V14.25m0 6.75H9.75"
                                        />
                                    </svg>
                                    Live Demo
                                </a>
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-green-400 hover:text-green-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.75 9V5.25a2.25 2.25 0 114.5 0V9m3 11.25h-9a2.25 2.25 0 01-2.25-2.25V9.75m13.5 0v8.25a2.25 2.25 0 01-2.25 2.25z"
                                        />
                                    </svg>
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
