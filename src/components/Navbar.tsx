
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-navy shadow-lg py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="text-white font-poppins font-bold text-2xl">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
            <span className="text-teal">P</span>ortfolio
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="nav-link">
            Home
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="nav-link">
            About
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className="nav-link">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="nav-link">
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="nav-link">
            Contact
          </a>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate hover:text-teal transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Icon */}
        <button 
          className="md:hidden text-slate hover:text-teal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-lightest-navy">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="nav-link py-2">
              Home
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="nav-link py-2">
              About
            </a>
            <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className="nav-link py-2">
              Skills
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="nav-link py-2">
              Projects
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="nav-link py-2">
              Contact
            </a>
            <div className="flex items-center space-x-4 py-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate hover:text-teal transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
