
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Courses | Saraswati College";
    
    // Handle hash links for smooth scrolling
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-tight">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block bg-saraswati-100 text-saraswati-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Academic Programs
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-saraswati-700">Courses</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our specialized undergraduate programs designed to equip you with industry-relevant skills and knowledge.
            </p>
          </div>
          
          {/* This is a placeholder for the detailed courses page */}
          <div className="space-y-24">
            {/* BCA Course */}
            <section id="bca" className="scroll-mt-24 bg-white rounded-xl shadow-subtle border border-saraswati-100 overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-saraswati-50">
                  <div className="p-8 h-full flex flex-col justify-center">
                    <span className="text-saraswati-700 text-sm font-medium mb-2">Technology</span>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                      Bachelor of Computer Applications (BCA)
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <span className="text-muted-foreground text-sm">Duration</span>
                        <p className="font-medium">3 Years</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Semesters</span>
                        <p className="font-medium">6 Semesters</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Eligibility</span>
                        <p className="font-medium">10+2 or Equivalent</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Medium</span>
                        <p className="font-medium">English</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="p-8">
                    <h3 className="font-medium text-lg mb-4">Program Overview</h3>
                    <p className="text-muted-foreground mb-4">
                      The Bachelor of Computer Applications (BCA) is a three-year undergraduate program designed to provide students with a strong foundation in computer applications and software development. The curriculum emphasizes both theoretical knowledge and practical skills needed in the IT industry.
                    </p>
                    
                    <h3 className="font-medium text-lg mt-6 mb-4">Key Subjects</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Programming Languages
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Database Management
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Web Development
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Operating Systems
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Computer Networks
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Software Engineering
                      </li>
                    </ul>
                    
                    <h3 className="font-medium text-lg mt-6 mb-4">Career Prospects</h3>
                    <p className="text-muted-foreground">
                      BCA graduates can pursue careers as Software Developers, Web Developers, System Analysts, Database Administrators, and more. Many graduates also opt for higher studies such as MCA or MBA in IT.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* BSc IT Course */}
            <section id="bsc-it" className="scroll-mt-24 bg-white rounded-xl shadow-subtle border border-saraswati-100 overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-saraswati-50">
                  <div className="p-8 h-full flex flex-col justify-center">
                    <span className="text-saraswati-700 text-sm font-medium mb-2">Technology</span>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                      Bachelor of Science in Information Technology (BSc IT)
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <span className="text-muted-foreground text-sm">Duration</span>
                        <p className="font-medium">3 Years</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Semesters</span>
                        <p className="font-medium">6 Semesters</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Eligibility</span>
                        <p className="font-medium">10+2 with Science</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Medium</span>
                        <p className="font-medium">English</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="p-8">
                    <h3 className="font-medium text-lg mb-4">Program Overview</h3>
                    <p className="text-muted-foreground mb-4">
                      The Bachelor of Science in Information Technology (BSc IT) program provides students with in-depth knowledge of information technology concepts and applications. The program combines theoretical foundations with hands-on practical learning to prepare students for the rapidly evolving tech industry.
                    </p>
                    
                    <h3 className="font-medium text-lg mt-6 mb-4">Key Subjects</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Computer Architecture
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Data Structures & Algorithms
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Network Security
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Advanced Database Systems
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Cloud Computing
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Mobile Application Development
                      </li>
                    </ul>
                    
                    <h3 className="font-medium text-lg mt-6 mb-4">Career Prospects</h3>
                    <p className="text-muted-foreground">
                      BSc IT graduates can work as Network Engineers, IT Consultants, System Administrators, Cybersecurity Analysts, Cloud Specialists, and more. Many students also pursue MSc IT or MBA for further career advancement.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* BBA Course */}
            <section id="bba" className="scroll-mt-24 bg-white rounded-xl shadow-subtle border border-saraswati-100 overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-saraswati-50">
                  <div className="p-8 h-full flex flex-col justify-center">
                    <span className="text-saraswati-700 text-sm font-medium mb-2">Management</span>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                      Bachelor of Business Administration (BBA)
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <span className="text-muted-foreground text-sm">Duration</span>
                        <p className="font-medium">3 Years</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Semesters</span>
                        <p className="font-medium">6 Semesters</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Eligibility</span>
                        <p className="font-medium">10+2 in Any Stream</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm">Medium</span>
                        <p className="font-medium">English</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="p-8">
                    <h3 className="font-medium text-lg mb-4">Program Overview</h3>
                    <p className="text-muted-foreground mb-4">
                      The Bachelor of Business Administration (BBA) program provides students with a solid foundation in business management principles and practices. The program is designed to develop entrepreneurial skills, leadership qualities, and management expertise required in today's competitive business environment.
                    </p>
                    
                    <h3 className="font-medium text-lg mt-6 mb-4">Key Subjects</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Principles of Management
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Marketing Management
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Financial Accounting
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Human Resource Management
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Business Economics
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-saraswati-500 rounded-full mr-2"></span>
                        Entrepreneurship
                      </li>
                    </ul>
                    
                    <h3 className="font-medium text-lg mt-6 mb-4">Career Prospects</h3>
                    <p className="text-muted-foreground">
                      BBA graduates can pursue careers in Marketing, Human Resources, Finance, Sales, Retail Management, and Entrepreneurship. Many graduates also pursue MBA or other specialized master's programs for advanced positions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
