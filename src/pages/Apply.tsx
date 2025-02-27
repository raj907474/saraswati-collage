
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, CheckCircle, FileText, GraduationCap } from 'lucide-react';

const Apply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Apply Now | Saraswati College";
  }, []);

  // Redirect to Google Form
  const handleApplyNow = () => {
    window.open('https://forms.google.com/apply', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-tight">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block bg-saraswati-100 text-saraswati-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Admissions Open
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Apply to <span className="text-saraswati-700">Saraswati College</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our diverse community of learners and embark on a journey toward academic excellence and professional success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-subtle border border-saraswati-100 overflow-hidden">
              <div className="p-6">
                <h2 className="font-heading text-2xl font-bold mb-4">Admission Process</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-saraswati-100 text-saraswati-700 font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Complete Online Application</h3>
                      <p className="text-muted-foreground text-sm">Fill out our comprehensive online application form with your personal and academic details.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-saraswati-100 text-saraswati-700 font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Submit Required Documents</h3>
                      <p className="text-muted-foreground text-sm">Upload necessary documents including academic transcripts, ID proof, and photograph.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-saraswati-100 text-saraswati-700 font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Admission Interview</h3>
                      <p className="text-muted-foreground text-sm">Shortlisted candidates will be called for an interview with our faculty panel.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-saraswati-100 text-saraswati-700 font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Fee Payment & Enrollment</h3>
                      <p className="text-muted-foreground text-sm">Upon selection, complete the admission process by paying the required fees and enrolling in your chosen program.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-subtle border border-saraswati-100 overflow-hidden">
              <div className="p-6">
                <h2 className="font-heading text-2xl font-bold mb-4">Required Documents</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-saraswati-600 flex-shrink-0 mt-1" />
                    <span>Completed application form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-saraswati-600 flex-shrink-0 mt-1" />
                    <span>10th Standard mark sheet and certificate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-saraswati-600 flex-shrink-0 mt-1" />
                    <span>12th Standard mark sheet and certificate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-saraswati-600 flex-shrink-0 mt-1" />
                    <span>Transfer certificate from last attended institution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-saraswati-600 flex-shrink-0 mt-1" />
                    <span>Character certificate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-saraswati-600 flex-shrink-0 mt-1" />
                    <span>Migration certificate (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-saraswati-600 flex-shrink-0 mt-1" />
                    <span>Passport size photographs (4 copies)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-saraswati-600 flex-shrink-0 mt-1" />
                    <span>ID proof (Aadhar Card/PAN Card/Passport)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-saraswati-600 flex-shrink-0 mt-1" />
                    <span>Caste certificate (if applicable)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-saraswati-50 rounded-xl p-8 shadow-subtle border border-saraswati-100 mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-subtle">
                <div className="flex justify-center mb-3">
                  <GraduationCap className="w-10 h-10 text-saraswati-600" />
                </div>
                <h3 className="font-medium">Scholarship Options</h3>
                <p className="text-sm text-muted-foreground mt-2">Merit-based scholarships available for outstanding academic achievement.</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-subtle">
                <div className="flex justify-center mb-3">
                  <FileText className="w-10 h-10 text-saraswati-600" />
                </div>
                <h3 className="font-medium">Flexible Fee Structure</h3>
                <p className="text-sm text-muted-foreground mt-2">Multiple payment options with installment facilities for all students.</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-subtle">
                <div className="flex justify-center mb-3">
                  <CheckCircle className="w-10 h-10 text-saraswati-600" />
                </div>
                <h3 className="font-medium">Placement Assistance</h3>
                <p className="text-sm text-muted-foreground mt-2">Comprehensive placement support through our dedicated cell.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">Ready to take the next step? Apply now to secure your spot!</p>
            <button
              onClick={handleApplyNow}
              className="bg-saraswati-600 hover:bg-saraswati-700 text-white px-8 py-4 rounded-md font-medium text-lg flex items-center gap-2 mx-auto transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Apply Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apply;
