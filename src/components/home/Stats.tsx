
import React, { useRef, useEffect, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: "20+", label: "Years of Academic Excellence", suffix: "+" },
  { value: "5000", label: "Alumni Network", suffix: "+" },
  { value: "50", label: "Expert Faculty Members", suffix: "+" },
  { value: "95", label: "Placement Rate", suffix: "%" },
];

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<string[]>(stats.map(() => "0"));

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

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = parseInt(stat.value.replace(/\D/g, ''));
        const duration = 2000;
        const increment = Math.ceil(end / (duration / 50));
        
        if (start === end) return;
        
        const timer = setInterval(() => {
          start += increment;
          if (start > end) {
            start = end;
            clearInterval(timer);
          }
          
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = start.toString();
            return newCounts;
          });
        }, 50);
        
        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-saraswati-700 text-white"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                {isVisible ? counts[index] : "0"}
                {stat.suffix}
              </div>
              <p className="text-saraswati-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
