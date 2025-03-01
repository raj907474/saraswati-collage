
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Placeholder data - would be fetched from Google Sheets in the full implementation
const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Rajesh Patel',
    position: 'Principal',
    department: 'Administration',
    qualification: 'Ph.D. in Computer Science',
    experience: '20+ years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    position: 'HOD',
    department: 'Computer Science',
    qualification: 'Ph.D. in Information Technology',
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Prof. Amit Singh',
    position: 'Associate Professor',
    department: 'Information Technology',
    qualification: 'M.Tech in Computer Engineering',
    experience: '12+ years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Prof. Neha Mehta',
    position: 'Assistant Professor',
    department: 'Business Administration',
    qualification: 'MBA, M.Phil in Management',
    experience: '10+ years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Dr. Sanjay Verma',
    position: 'Associate Professor',
    department: 'Commerce',
    qualification: 'Ph.D. in Commerce',
    experience: '18+ years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Prof. Anita Desai',
    position: 'Assistant Professor',
    department: 'Information Technology',
    qualification: 'M.Tech in Software Engineering',
    experience: '8+ years',
    image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=300&h=300&fit=crop&q=80',
  },
];

const Faculties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Faculties | Saraswati College";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-tight">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block bg-saraswati-100 text-saraswati-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-saraswati-700">Faculty</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated educators bring years of academic excellence and industry experience to provide the best education.
            </p>
          </div>
          
          {/* Principal Section */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-semibold mb-8 text-center">Leadership</h2>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl shadow-subtle border border-saraswati-100 overflow-hidden max-w-md">
                <div className="p-6 text-center">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src={facultyMembers[0].image} 
                      alt={facultyMembers[0].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold">{facultyMembers[0].name}</h3>
                  <p className="text-saraswati-700 font-medium">{facultyMembers[0].position}</p>
                  <div className="mt-4 space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Department:</span> {facultyMembers[0].department}</p>
                    <p><span className="text-muted-foreground">Qualification:</span> {facultyMembers[0].qualification}</p>
                    <p><span className="text-muted-foreground">Experience:</span> {facultyMembers[0].experience}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Faculty Members */}
          <div>
            <h2 className="font-heading text-2xl font-semibold mb-8 text-center">Faculty Members</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {facultyMembers.slice(1).map((faculty) => (
                <div key={faculty.id} className="bg-white rounded-xl shadow-subtle border border-saraswati-100 overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                  <div className="p-6 text-center">
                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4">
                      <img 
                        src={faculty.image} 
                        alt={faculty.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-heading text-lg font-bold">{faculty.name}</h3>
                    <p className="text-saraswati-700 font-medium">{faculty.position}</p>
                    <div className="mt-4 space-y-1 text-sm">
                      <p><span className="text-muted-foreground">Department:</span> {faculty.department}</p>
                      <p><span className="text-muted-foreground">Qualification:</span> {faculty.qualification}</p>
                      <p><span className="text-muted-foreground">Experience:</span> {faculty.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Note about Google Sheets Integration */}
          <div className="mt-16 text-center text-sm text-muted-foreground">
            <p>.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faculties;
