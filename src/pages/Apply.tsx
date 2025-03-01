import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Apply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Apply Now | Saraswati College";
  }, []);

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // Generate year options for the dropdown (last 10 years)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);
  
  const [formState, setFormState] = useState({
    name: '',
    sex: 'male',
    caste: 'OPEN',
    studentMobile: '',
    parentsMobile: '',
    course: 'BCA',
    address: '',
    schoolName: '',
    stream: 'Science',
    passingYear: currentYear.toString(),
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await emailjs.send(
        'service_4v2wu5n',
        'template_9k00jko',
        {
          student_name: formState.name,
          sex: formState.sex,
          caste: formState.caste,
          student_mobile: formState.studentMobile,
          parents_mobile: formState.parentsMobile,
          course: formState.course,
          address: formState.address,
          school_name: formState.schoolName,
          stream: formState.stream,
          passing_year: formState.passingYear,
          additional_message: formState.message,
        },
        '2_Z9XEdsrTvoVBPsu'
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
          sex: 'male',
          caste: 'OPEN',
          studentMobile: '',
          parentsMobile: '',
          course: 'BCA',
          address: '',
          schoolName: '',
          stream: 'Science',
          passingYear: currentYear.toString(),
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-tight px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block bg-saraswati-100 text-saraswati-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Admissions Open
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Apply to <span className="text-saraswati-700">Saraswati College</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our diverse community of learners and embark on a journey toward academic excellence and professional success.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-subtle border border-saraswati-100 mb-12">
            <h2 className="font-heading text-2xl font-bold mb-6 text-center md:text-left">Application Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Name */}
              <div>
                <Label htmlFor="name" className="text-base">Student Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  disabled={loading}
                  className="mt-1"
                />
              </div>
              
              {/* Sex Radio Buttons */}
              <div>
                <Label className="text-base mb-2 block">Sex</Label>
                <RadioGroup 
                  value={formState.sex} 
                  onValueChange={(value) => handleRadioChange('sex', value)}
                  className="flex flex-row space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Caste Radio Buttons */}
              <div>
                <Label className="text-base mb-2 block">Caste</Label>
                <RadioGroup 
                  value={formState.caste} 
                  onValueChange={(value) => handleRadioChange('caste', value)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="SC" id="sc" />
                    <Label htmlFor="sc">SC</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ST" id="st" />
                    <Label htmlFor="st">ST</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="SEBC" id="sebc" />
                    <Label htmlFor="sebc">SEBC</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="OPEN" id="open" />
                    <Label htmlFor="open">OPEN</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Mobile Numbers - Two Column on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="studentMobile" className="text-base">Student Mobile Number</Label>
                  <Input
                    type="tel"
                    id="studentMobile"
                    name="studentMobile"
                    value={formState.studentMobile}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                    disabled={loading}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="parentsMobile" className="text-base">Parents Mobile Number</Label>
                  <Input
                    type="tel"
                    id="parentsMobile"
                    name="parentsMobile"
                    value={formState.parentsMobile}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                    disabled={loading}
                    className="mt-1"
                  />
                </div>
              </div>
              
              {/* Course Radio Buttons */}
              <div>
                <Label className="text-base mb-2 block">Which course do you want to apply for?</Label>
                <RadioGroup 
                  value={formState.course} 
                  onValueChange={(value) => handleRadioChange('course', value)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="BCA" id="bca" />
                    <Label htmlFor="bca">BCA</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="BSCIT" id="bscit" />
                    <Label htmlFor="bscit">BSCIT</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="BBA" id="bba" />
                    <Label htmlFor="bba">BBA</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Residence Address */}
              <div>
                <Label htmlFor="address" className="text-base">Residence Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formState.address}
                  onChange={handleChange}
                  required
                  placeholder="Your complete residential address"
                  disabled={loading}
                  className="mt-1"
                  rows={3}
                />
              </div>
              
              {/* School Name */}
              <div>
                <Label htmlFor="schoolName" className="text-base">Name of your last 12th Std school?</Label>
                <Input
                  id="schoolName"
                  name="schoolName"
                  value={formState.schoolName}
                  onChange={handleChange}
                  required
                  placeholder="School Name"
                  disabled={loading}
                  className="mt-1"
                />
              </div>
              
              {/* Stream Radio Buttons */}
              <div>
                <Label className="text-base mb-2 block">Stream in 12th Standard?</Label>
                <RadioGroup 
                  value={formState.stream} 
                  onValueChange={(value) => handleRadioChange('stream', value)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Science" id="science" />
                    <Label htmlFor="science">Science</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Commerce" id="commerce" />
                    <Label htmlFor="commerce">Commerce</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Arts" id="arts" />
                    <Label htmlFor="arts">Arts</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Passing Year Dropdown */}
              <div>
                <Label htmlFor="passingYear" className="text-base">12th Standard Passing Year?</Label>
                <select
                  id="passingYear"
                  name="passingYear"
                  value={formState.passingYear}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="mt-1 w-full rounded-md border border-input p-2 bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {years.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Additional Message */}
              <div>
                <Label htmlFor="message" className="text-base">Any additional information</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Any additional information you'd like to share..."
                  disabled={loading}
                  className="mt-1"
                  rows={3}
                />
              </div>
              
              {/* Submit Button */}
              <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-saraswati-600 hover:bg-saraswati-700 text-lg py-6"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
                <Send className="ml-2" />
              </Button>
            </form>
          </div>
          
          <div className="bg-saraswati-50 rounded-xl p-6 md:p-8 shadow-subtle border border-saraswati-100 mb-8">
            <h3 className="font-heading text-xl font-semibold mb-4">What Happens Next?</h3>
            <ol className="space-y-3 list-decimal pl-5">
              <li>Our admissions team will review your application</li>
              <li>You'll receive a confirmation email with next steps</li>
              <li>Bring your original documents for verification when requested</li>
              <li>Complete the admission process by paying the required fees</li>
            </ol>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apply;
