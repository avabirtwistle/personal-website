import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: "Personal Website",
            description: "A personal portfolio website built with React and Bootstrap.",
            tech: "React, Bootstrap",
            link: "https://github.com/yourusername/personal-website"
        },
        {
            name: "Weather App",
            description: "A weather forecasting app using OpenWeatherMap API.",
            tech: "React, OpenWeatherMap API",  
            link: "https://github.com/yourusername/weather-app"
        },
        {
            name: "Task Manager",
            description: "A simple task management app with CRUD functionality.",
            tech: "React, Node.js, Express",
            link: "https://github.com/yourusername/task-manager"
        }
    ];
    return (
        <div>
            <div>
                {projects.map((project, index) => (
                    <div key={index}>
                        <h2><strong>{project.name}</strong></h2>
                        <p>{project.description}</p>
                        <p><em>{project.tech}</em></p>
                            {project.link && (
                                <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;