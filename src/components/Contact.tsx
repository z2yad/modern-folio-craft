
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Log form data to console as per requirements
    console.log("Form submitted with the following data:");
    console.log(formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-navy text-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-white">
          <span className="text-teal mr-2">04.</span> Contact Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4">Get In Touch</h3>
            <p className="text-slate mb-8 max-w-md">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-teal mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-slate">johndoe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-teal mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-slate">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-teal mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-slate">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-light-navy rounded-lg p-6">
            <h3 className="text-xl font-poppins font-semibold mb-4">Send Me a Message</h3>
            
            {submitted ? (
              <div className="bg-teal bg-opacity-20 text-teal p-4 rounded flex items-center justify-center">
                <p>Thank you! Your message has been sent.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-slate mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy border border-lightest-navy rounded px-4 py-2 text-white focus:outline-none focus:border-teal"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-slate mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy border border-lightest-navy rounded px-4 py-2 text-white focus:outline-none focus:border-teal"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy border border-lightest-navy rounded px-4 py-2 text-white focus:outline-none focus:border-teal"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy border border-lightest-navy rounded px-4 py-2 text-white focus:outline-none focus:border-teal"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex justify-center items-center"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
