
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Courses from '../components/home/Courses';
import Contact from '../components/home/Contact';
import Stats from '../components/home/Stats';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Saraswati College of Commerce, BBA & IT Dhoraji";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Stats />
        <Courses />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
