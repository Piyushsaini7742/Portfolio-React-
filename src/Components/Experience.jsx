import React from 'react';

const Experience = () => {
    return (
        <div className="bg-gray-800 text-white py-20 px-4 ">

            <h1 className="text-3xl font-bold text-center mb-8">Professional Experience</h1>

            <div className="flex justify-center gap-8">

                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm">
                    <h2 className="text-xl font-bold mb-2">Frontend Developer Intern</h2>
                    <p className="text-blue-400 mb-1">Kodu - powered by Dhurina - Sikar</p>
                    <p className="text-sm text-gray-400 mb-4">June 2024 - Present</p>
                    <p>
                        As a frontend developer, I specialize in creating responsive, user-friendly interfaces using HTML, CSS, and JavaScript. I focus on optimizing performance, ensuring cross-browser compatibility, and delivering seamless, visually appealing web experiences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;