
import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const keyFeatures = [
    "Industry-aligned curriculum",
    "Expert faculty members",
    "State-of-the-art infrastructure",
    "Holistic development approach",
    "Excellent placement record",
    "Cultural diversity & inclusivity"
  ];

  return (
    <section ref={sectionRef} className="section bg-white relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-saraswati-100 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-saraswati-100 rounded-tr-full opacity-50"></div>
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <div className={`transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block bg-saraswati-100 text-saraswati-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
          </div>
          
          <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Excellence Through Education at <span className="text-saraswati-700">Saraswati College</span>
          </h2>
          
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Located in the heart of Dhoraji, we are committed to transforming students into industry-ready professionals.
          </p>
        </div>
        
        <div className={`space-y-6 transition-all duration-500 delay-300 ease-out transform max-w-3xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-foreground leading-relaxed">
            Saraswati College, established in 2000, is one of the most prestigious education institutions in Saurashtra. 
            We play a vital role in transforming students into industry-ready professionals through 
            our innovative teaching methods and practical approach to education.
          </p>
          
          <p className="text-foreground leading-relaxed">
            We encourage different approaches to teaching and learning that are both innovative and relevant 
            to an increasingly global academic environment. Our commitment to cultural diversity creates an 
            institutional environment where all students and staff share an appreciation of diverse outlooks, 
            values, and understanding.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="text-saraswati-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
