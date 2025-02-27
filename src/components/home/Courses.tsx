
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BarChart3, Code } from 'lucide-react';

interface Course {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  duration: string;
  semesters: number;
}

const courses: Course[] = [
  {
    id: 'bca',
    icon: <Code className="w-10 h-10 text-saraswati-600" />,
    title: 'Bachelor of Computer Applications (BCA)',
    description: 'A comprehensive degree program focusing on computer applications, programming, and software development skills.',
    duration: '3 Years',
    semesters: 6,
  },
  {
    id: 'bsc-it',
    icon: <BookOpen className="w-10 h-10 text-saraswati-600" />,
    title: 'Bachelor of Science in Information Technology (BSc IT)',
    description: 'Develop expertise in information technology, networking, database management, and system analysis.',
    duration: '3 Years',
    semesters: 6,
  },
  {
    id: 'bba',
    icon: <BarChart3 className="w-10 h-10 text-saraswati-600" />,
    title: 'Bachelor of Business Administration (BBA)',
    description: 'Learn business management principles, entrepreneurship, marketing, finance, and leadership skills.',
    duration: '3 Years',
    semesters: 6,
  },
];

const Courses: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="section bg-saraswati-50" id="courses">
      <div className="container-tight">
        <div className="text-center mb-16">
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block bg-saraswati-100 text-saraswati-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Programs
            </span>
          </div>
          
          <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Courses We <span className="text-saraswati-700">Offer</span>
          </h2>
          
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Explore our specialized programs designed to equip you with the skills and knowledge needed for a successful career.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              id={course.id}
              className={`bg-white rounded-xl shadow-subtle border border-saraswati-100/50 overflow-hidden transition-all duration-500 hover:shadow-card hover:translate-y-[-4px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="p-6">
                <div className="mb-4">{course.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-3">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 h-[60px]">
                  {course.description}
                </p>
                <div className="flex justify-between text-sm mb-4">
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="ml-1 font-medium">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Semesters:</span>
                    <span className="ml-1 font-medium">{course.semesters}</span>
                  </div>
                </div>
                <Link 
                  to={`/courses#${course.id}`} 
                  className="group inline-flex items-center text-saraswati-700 font-medium transition-colors hover:text-saraswati-900"
                >
                  Learn more 
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            to="/courses" 
            className="inline-flex items-center bg-saraswati-600 hover:bg-saraswati-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Courses
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
