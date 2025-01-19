import React from "react";
import ProfilePic from "../assets/photo.jpg";

const Home = () => {
    return (
        <div className="bg-gray-950 min-h-screen text-white flex flex-col justify-between py-16">

            <header className="container mx-auto px-8 text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-wide">
                    Welcome to <span className="text-purple-400">Piyush Saini's</span> Portfolio
                </h1>
                <p className="text-base md:text-lg text-gray-400 italic mb-10">
                    Crafting User Interfaces with Passion
                </p>
                <button
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transform hover:scale-110 transition-all"
                    onClick={() => alert("Welcome to my portfolio! Let's connect!")}
                >
                    Explore Now
                </button>
            </header>

            <main className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="order-2 md:order-1 text-gray-300 text-sm md:text-base leading-7">
                    <p className="bg-gray-800 p-8 rounded-lg shadow-md border border-purple-500 text-gray-200">
                        <span className="text-lg md:text-xl font-semibold text-purple-400">Hello! </span><br />
                        I’m <span className="text-purple-400 font-bold">Piyush Saini</span>, a frontend developer who loves turning ideas into reality with code. <br /><br />
                        My expertise includes <span className="text-blue-400 font-medium">React</span>, <span className="text-blue-400 font-medium">JavaScript</span>, <span className="text-blue-400 font-medium">C++</span>, and more. <br />
                        With a focus on modern, responsive designs, I aim to deliver engaging and seamless user experiences that captivate users and meet client goals.
                    </p>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <img
                        src={ProfilePic}
                        alt="Profile of Piyush Saini"
                        className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-purple-500 object-cover shadow-lg transform hover:scale-105 transition-all"
                    />
                </div>
            </main>

        </div>
    );
};

export default Home;