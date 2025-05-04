
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-navy text-white relative">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-teal mb-4 font-mono animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-lightest-slate mb-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Zeyad Salim.
          </h1>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate mb-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            I build things for the web.
          </h2>
          <p className="text-slate max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
            <a href="#contact" className="btn-primary mr-4">Get In Touch</a>
            <a 
              href="/sample-cv.pdf" 
              download="Zeyad-Salim-CV.pdf"
              className="btn-outline"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate hover:text-teal transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
