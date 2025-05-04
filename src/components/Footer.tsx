
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate pt-10 pb-6 border-t border-lightest-navy border-opacity-30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-poppins font-bold text-white mb-2">
              <span className="text-teal">P</span>ortfolio
            </h3>
            <p className="text-sm max-w-md">
              A professional web developer focused on creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate hover:text-teal transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate hover:text-teal transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate hover:text-teal transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate hover:text-teal transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
            
            <a 
              href="/sample-cv.pdf" 
              download="Zeyad-Salim-CV.pdf" 
              className="btn-outline text-sm px-4 py-1 mb-4"
            >
              Download CV
            </a>
          </div>
        </div>
        
        <div className="border-t border-lightest-navy border-opacity-30 mt-6 pt-6 text-center text-sm">
          <p>© {currentYear} Zeyad Salim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
