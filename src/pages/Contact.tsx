
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Saraswati College";
  }, []);

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Creating template parameters object matching the template variables
      const templateParams = {
        from_name: formState.name,
        email: formState.email,
        phone: formState.phone,
        subject: formState.subject,
        message: formState.message,
      };
      
      console.log("Sending email with parameters:", templateParams);
      
      const result = await emailjs.send(
        'service_4v2wu5n',
        'template_hz2hibj',
        templateParams,
        '2_Z9XEdsrTvoVBPsu'
      );
      
      console.log("EmailJS response:", result);
      
      if (result.text === 'OK') {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        });
        
        // Reset form after successful submission
        setFormState({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Message could not be sent",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-tight">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block bg-saraswati-100 text-saraswati-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-saraswati-700">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to help! Reach out to us through any of the channels below.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-saraswati-50 p-6 rounded-lg shadow-subtle">
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
              
              <div className="bg-saraswati-50 p-6 rounded-lg shadow-subtle">
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
              
              <div className="bg-saraswati-50 p-6 rounded-lg shadow-subtle">
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
              
              <div className="bg-saraswati-50 p-6 rounded-lg shadow-subtle">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-saraswati-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-saraswati-700 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Office Hours</h3>
                    <p className="text-muted-foreground mb-1">Monday - Saturday</p>
                    <p className="text-muted-foreground">9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
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
                      disabled={loading}
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
                      disabled={loading}
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
                      disabled={loading}
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
                      disabled={loading}
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
                    disabled={loading}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-saraswati-600 hover:bg-saraswati-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="rounded-lg overflow-hidden h-96 shadow-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.845196333687!2d70.37968177458979!3d21.89751935779961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39596e77dea8e20f%3A0x7f1a7bc9c2d95225!2sSaraswati%20College%20Of%20Computer%20Applications%2C%20BBA%20%26%20IT!5e0!3m2!1sen!2sin!4v1691565775566!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Saraswati College Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
