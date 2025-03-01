import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, CheckCircle, FileText, GraduationCap, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Apply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Apply Now | Saraswati College";
  }, []);

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Replace these values with your EmailJS service, template, and public key
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // e.g., 'service_abc123'
        'YOUR_TEMPLATE_ID', // e.g., 'template_xyz456'
        {
          from_name: formState.name,
          email: formState.email,
          phone: formState.phone,
          course: formState.course,
          qualification: formState.qualification,
          message: formState.message,
        },
        'YOUR_PUBLIC_KEY' // e.g., 'ABC123DEF456GHI789'
      );
      
      if (result.text === 'OK') {
        toast({
          title: "Application submitted successfully!",
          description: "We'll review your application and get back to you soon.",
          variant: "default",
        });
        
        // Reset form after successful submission
        setFormState({
          name: '',
          email: '',
          phone: '',
          course: '',
          qualification: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Failed to send application:', error);
      toast({
        title: "Application could not be submitted",
        description: "There was an error sending your application. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Old redirect to Google Form (keeping as reference)
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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  className="bg-saraswati-600 hover:bg-saraswati-700 text-white px-8 py-4 rounded-md font-medium text-lg flex items-center gap-2 mx-auto transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Apply Now
                  <ArrowRight size={20} />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-3xl">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-2xl font-heading">Apply to Saraswati College</AlertDialogTitle>
                  <AlertDialogDescription>
                    Please fill in the form below to submit your application.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                
                <form onSubmit={handleSubmit} className="py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        disabled={loading}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 9876543210"
                        disabled={loading}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium mb-1">
                        Course Interested In
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formState.course}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:ring-2 focus:ring-saraswati-500 focus:border-transparent text-sm"
                        disabled={loading}
                      >
                        <option value="">Select a course</option>
                        <option value="BCA">BCA - Bachelor of Computer Applications</option>
                        <option value="BBA">BBA - Bachelor of Business Administration</option>
                        <option value="B.Com">B.Com - Bachelor of Commerce</option>
                        <option value="PGDCA">PGDCA - Post Graduate Diploma in Computer Applications</option>
                        <option value="M.Com">M.Com - Master of Commerce</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="qualification" className="block text-sm font-medium mb-1">
                      Highest Qualification
                    </label>
                    <Input
                      id="qualification"
                      name="qualification"
                      value={formState.qualification}
                      onChange={handleChange}
                      required
                      placeholder="12th (Science/Commerce/Arts)"
                      disabled={loading}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Additional Information
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any additional information you'd like to share..."
                      disabled={loading}
                    />
                  </div>
                </form>
                
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-saraswati-600 hover:bg-saraswati-700"
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apply;
