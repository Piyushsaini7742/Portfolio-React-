import React from "react";

const KeySkills = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "C",
        "C++",
        "Bootstrap",
        "Tailwind",
    ];

    return (
        <div className="bg-gray-800 text-center py-8">
            <h2 className="text-white text-2xl font-bold mb-4">Key Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm shadow-lg"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const MySkills = () => {

    const skills = [
        { name: "C", icon: "https://imgs.search.brave.com/oNQcGvf1oES6m2amIIGLSuBWAz0yhyJu2sHMYS8WQO4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3Bw/bmcuY29tL3VwbG9h/ZHMvcHJldmlldy9j/LXByb2dyYW1taW5n/LWljb24tYy1wcm9n/cmFtbWluZy1sYW5n/dWFnZS1sb2dvLTEx/NTYyOTQ1Njc5ZHVh/eHRuM3lxMC5wbmc" },
        { name: "C++", icon: "https://imgs.search.brave.com/bwxfFvbXbAuEJbNlE8miIX-iAwzjhb6S7t2a5wn8jLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2lz/b2NwcC9sb2dvcy9t/YXN0ZXIvY3BwX2xv/Z28ucG5n" },
        { name: "HTML", icon: "https://imgs.search.brave.com/zvjJ5doqGwuNTGlHWNvIUQZBIibVG4MhslyXHuV5ZT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjViZGNlZjEw/MTRjMGI1ZTQ4OWMu/cG5n" },
        { name: "CSS", icon: "https://imgs.search.brave.com/bs9CWrd-2EeTu71zOGIwaSwFEnQdxUHyFL3hi2gser0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmIyMjFlZjAzOGFh/ZDRkM2VkN2NhMmUu/cG5n" },
        { name: "JavaScript", icon: "https://imgs.search.brave.com/4ODLwWYy7h8EEQzjOzTrpzFiWpNynz27SB73upo1Fag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDI3LzEy/Ny80NjMvbm9uXzJ4/L2phdmFzY3JpcHQt/bG9nby1qYXZhc2Ny/aXB0LWljb24tdHJh/bnNwYXJlbnQtZnJl/ZS1wbmcucG5n" },
        { name: "React", icon: "https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n" },
        { name: "Tailwind CSS", icon: "https://imgs.search.brave.com/hGnGOpzRCMB3ypxZIG0ba0Uw6tHkJNfPy9oeCf51r1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC90YWlsd2lu/ZC1jc3MtaWNvbi0y/MDQ4eDEyMjktdThk/enQ0dWgucG5n" },
        { name: "Bootstrap", icon: "https://imgs.search.brave.com/OX6ppihvwQhsHZhtwRh2p7Mu72GaMXB6i5PWJP8x2nQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9ib290c3RyYXAt/bG9nby5wbmc" },
        { name: "Git & GitHub", icon: "https://imgs.search.brave.com/ZZVkPN-_cIr6ZXIsJ1d4-RndUMqDkIMUu_gRiPCf69I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuZ2l0aHViYXNz/ZXRzLmNvbS9hc3Nl/dHMvR2l0SHViLU1h/cmstZWEyOTcxY2Vl/Nzk5LnBuZw" },
    ];

    return (
        <div className="bg-gray-900 py-8">
            <h2 className="text-center text-white text-3xl font-bold mb-6">My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-4 rounded-lg flex flex-col items-center shadow-lg"
                    >

                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-12 h-12 mb-4"
                        />
                        <p className="text-white text-lg font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <KeySkills />
            <MySkills />
        </div>
    );
};

export default App;