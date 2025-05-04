
import { Code, Server, Layout, Database, Terminal, Globe } from "lucide-react";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-teal mb-4" size={32} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-teal mb-4" size={32} />,
      skills: ["Node.js", "Express", "Django", "Ruby on Rails", "PHP"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-teal mb-4" size={32} />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Ruby"]
    },
    {
      title: "Database Management",
      icon: <Database className="text-teal mb-4" size={32} />,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis"]
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="text-teal mb-4" size={32} />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Webpack", "Vite"]
    },
    {
      title: "Other Skills",
      icon: <Globe className="text-teal mb-4" size={32} />,
      skills: ["UI/UX Design", "Responsive Design", "PWA", "SEO", "Testing"]
    }
  ];

  return (
    <section id="skills" className="bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-teal mr-2">02.</span> Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item flex flex-col items-center text-center"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {skill.icon}
              <h3 className="text-xl font-poppins font-semibold mb-3">{skill.title}</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {skill.skills.map((item, i) => (
                  <span 
                    key={i} 
                    className="bg-navy bg-opacity-5 text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
