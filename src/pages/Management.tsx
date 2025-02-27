
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Placeholder data - would be fetched from Google Sheets in the full implementation
const managementMembers = [
  {
    id: 1,
    name: 'Dr. Jayesh Mehta',
    position: 'Chairman',
    qualification: 'Ph.D. in Education Management',
    experience: '25+ years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Mrs. Shilpa Desai',
    position: 'Vice Chairperson',
    qualification: 'MBA, M.Phil in Education',
    experience: '20+ years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Mr. Rajesh Shah',
    position: 'Secretary',
    qualification: 'M.Com, LLB',
    experience: '18+ years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Dr. Priya Sharma',
    position: 'Treasurer',
    qualification: 'Ph.D. in Finance',
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80',
  },
];

const Management = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Management | Saraswati College";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-tight">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block bg-saraswati-100 text-saraswati-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Leadership
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-saraswati-700">Management</span> Team
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders who guide our institution towards excellence and innovation in education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {managementMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-subtle border border-saraswati-100 overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="p-6 flex gap-6 items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold">{member.name}</h3>
                    <p className="text-saraswati-700 font-medium">{member.position}</p>
                    <div className="mt-2 space-y-1 text-sm">
                      <p><span className="text-muted-foreground">Qualification:</span> {member.qualification}</p>
                      <p><span className="text-muted-foreground">Experience:</span> {member.experience}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 py-8 px-6 bg-saraswati-50 rounded-lg border border-saraswati-100 shadow-subtle">
            <h2 className="font-heading text-2xl font-bold mb-4">Vision and Mission</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg text-saraswati-700">Our Vision</h3>
                <p className="text-muted-foreground">To be a premier educational institution that nurtures talent, fosters innovation, and prepares students to be leaders in a global society.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg text-saraswati-700">Our Mission</h3>
                <p className="text-muted-foreground">To provide quality education that combines theoretical knowledge with practical skills, ethical values, and social responsibility, enabling students to excel in their chosen fields and contribute meaningfully to society.</p>
              </div>
            </div>
          </div>
          
          {/* Note about Google Sheets Integration */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>This is a placeholder page. In the actual implementation, management data will be fetched from Google Sheets.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Management;
