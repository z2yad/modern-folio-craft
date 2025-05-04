
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS. Features smooth scrolling and responsive design.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com",
      live: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and checkout process.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Application",
      description: "A weather application that shows current weather and forecasts based on location. Uses OpenWeatherMap API.",
      technologies: ["JavaScript", "CSS", "API Integration"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com",
      live: "#"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A task management application with features like task creation, deadlines, priorities, and filtering.",
      technologies: ["TypeScript", "React", "Firebase"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-teal mr-2">03.</span> My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate border-opacity-10 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-2">{project.title}</h3>
                <p className="text-slate mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-secondary text-xs px-2 py-1 rounded-full text-navy"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-navy hover:text-teal transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-navy hover:text-teal transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
