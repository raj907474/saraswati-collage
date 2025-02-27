
import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally, this would send the form data to a service like Formspree or EmailJS
    console.log('Form submitted:', formState);
    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    // Show success message (in a real implementation)
    alert('Message sent successfully!');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section bg-white" id="contact">
      <div className="container-tight">
        <div className="text-center mb-16">
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block bg-saraswati-100 text-saraswati-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
          </div>
          
          <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Contact <span className="text-saraswati-700">Us</span>
          </h2>
          
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Have questions? We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-10">
          <div className={`md:col-span-2 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <div className="bg-saraswati-50 p-6 rounded-lg">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-saraswati-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-saraswati-700 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Near Amba Vadi, Station Plot,<br />
                      Junagadh Road, Dhoraji
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-saraswati-50 p-6 rounded-lg">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-saraswati-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-saraswati-700 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-1">+91 9714645545</p>
                    <p className="text-muted-foreground">02824-225161</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-saraswati-50 p-6 rounded-lg">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-saraswati-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-saraswati-700 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:scit.dhoraji@gmail.com" 
                      className="text-saraswati-700 hover:underline"
                    >
                      scit.dhoraji@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`md:col-span-3 transition-all duration-500 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 border border-saraswati-100 shadow-subtle">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-saraswati-200 rounded-md focus:ring-2 focus:ring-saraswati-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-saraswati-200 rounded-md focus:ring-2 focus:ring-saraswati-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-saraswati-200 rounded-md focus:ring-2 focus:ring-saraswati-500 focus:border-transparent transition-all"
                    placeholder="+91 9876543210"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-saraswati-200 rounded-md focus:ring-2 focus:ring-saraswati-500 focus:border-transparent transition-all"
                    placeholder="Course Inquiry"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-saraswati-200 rounded-md focus:ring-2 focus:ring-saraswati-500 focus:border-transparent transition-all"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-saraswati-600 hover:bg-saraswati-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
