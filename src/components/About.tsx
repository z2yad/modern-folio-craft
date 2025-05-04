
const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="text-teal mr-2">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-navy mb-4 leading-relaxed">
              Hello! I'm Zeyad, a passionate web developer based in San Francisco, CA. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performance-focused experiences.
            </p>
            <p className="text-navy mb-4 leading-relaxed">
              I graduated from California State University with a degree in Computer Science in 2020. Since then, I've been honing my skills and working on various projects, from simple landing pages to complex enterprise applications.
            </p>
            <p className="text-navy leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="mt-6 grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                <span>React</span>
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                <span>Node.js</span>
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                <span>NextJS</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-teal rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative max-w-sm rounded-lg overflow-hidden border-2 border-teal">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Developer working on code" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
