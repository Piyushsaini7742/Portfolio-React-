import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="w-full max-w-4xl px-6">
                <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
                <p className="text-lg text-center mb-8">
                    I am a Passionate <span className="text-blue-400">Full Stack Developer</span> with over 3 months of experience in crafting user-friendly and visually engaging web applications. I specialize in transforming complex design concepts into responsive, interactive, and accessible user interfaces. With a strong focus on writing clean and efficient code, I ensure seamless functionality and optimized performance. My approach emphasizes collaboration, innovation, and creating impactful digital experiences that resonate with users.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <div className="bg-gray-800 rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold text-blue-400 mb-4">Proficient In</h2>
                        <p className="text-gray-300">
                            C++, HTML, CSS, JavaScript, React, C Language.
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold text-blue-400 mb-4">Experience</h2>
                        <p className="text-gray-300">
                            With 3 months of experience in frontend development, I have worked on building responsive and interactive user interfaces using modern web technologies. I have collaborated on real-world projects, honing my skills in creating visually appealing and functional designs while ensuring a seamless user experience.
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold text-blue-400 mb-4">Hobbies</h2>
                        <p className="text-gray-300">
                        Exploring UI/UX design, building interactive web interfaces, learning new technologies, and solving coding challenges.
                        </p>
                    </div>
                </div>


            
            </div>
        </div>
    );
};

export default About;
