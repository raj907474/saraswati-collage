
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    // Preload the hero image
    const img = new Image();
    img.src = "/lovable-uploads/ef33b335-576c-40cb-9678-bdc35f4816dd.png";
    img.onload = () => setImageLoaded(true);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000 ${loaded ? 'opacity-40' : 'opacity-0'}`}></div>
        <img
          src="/lovable-uploads/ef33b335-576c-40cb-9678-bdc35f4816dd.png"
          alt="Saraswati College Campus"
          className={`object-cover w-full h-full transition-all duration-1000 blur-in ${imageLoaded ? 'loaded scale-105' : 'scale-100'}`}
          loading="eager"
          fetchpriority="high"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-20 mt-20">
        <div className="max-w-3xl text-white">
          <div className={`transition-all duration-700 delay-300 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-saraswati-700/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase mb-5">
              Excellence in Education Since 2000
            </div>
          </div>
          
          <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 delay-500 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block">Shaping Futures at</span>
            <span className="text-saraswati-200">Saraswati College</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-white/90 max-w-2xl mb-8 transition-all duration-700 delay-700 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transforming students into industry-ready professionals through innovation, 
            excellence, and commitment to quality education in the heart of Dhoraji.
          </p>
          
          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-900 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              to="/courses"
              className="bg-white text-saraswati-950 hover:bg-saraswati-50 px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore Courses
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/apply"
              className="bg-saraswati-600 hover:bg-saraswati-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className={`flex flex-col items-center transition-all duration-700 delay-1200 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-white/70 text-sm mb-2">Scroll to discover</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
