
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-saraswati-50 pt-16 border-t border-saraswati-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Shaping futures through quality education, innovation, and excellence since our establishment.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-saraswati-200 text-saraswati-700 hover:bg-saraswati-100 hover:border-saraswati-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-saraswati-200 text-saraswati-700 hover:bg-saraswati-100 hover:border-saraswati-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-saraswati-200 text-saraswati-700 hover:bg-saraswati-100 hover:border-saraswati-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-saraswati-200 text-saraswati-700 hover:bg-saraswati-100 hover:border-saraswati-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-saraswati-700 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-saraswati-400 mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-saraswati-700 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-saraswati-400 mr-2"></span>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/faculties" className="text-muted-foreground hover:text-saraswati-700 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-saraswati-400 mr-2"></span>
                  Faculties
                </Link>
              </li>
              <li>
                <Link to="/management" className="text-muted-foreground hover:text-saraswati-700 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-saraswati-400 mr-2"></span>
                  Management
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-saraswati-700 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-saraswati-400 mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://forms.google.com/apply" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-saraswati-700 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-saraswati-400 mr-2"></span>
                  Apply for Admission
                  <ExternalLink size={12} className="ml-1 inline-block" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses/#bca" className="text-muted-foreground hover:text-saraswati-700 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-saraswati-400 mr-2"></span>
                  BCA
                </Link>
              </li>
              <li>
                <Link to="/courses/#bsc-it" className="text-muted-foreground hover:text-saraswati-700 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-saraswati-400 mr-2"></span>
                  BSc IT
                </Link>
              </li>
              <li>
                <Link to="/courses/#bba" className="text-muted-foreground hover:text-saraswati-700 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-saraswati-400 mr-2"></span>
                  BBA
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex">
                <MapPin className="h-5 w-5 text-saraswati-600 flex-shrink-0 mr-3" />
                <span className="text-muted-foreground">
                  Near Amba Vadi, Station Plot, Junagadh Road, Dhoraji
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-saraswati-600 flex-shrink-0 mr-3" />
                <div className="text-muted-foreground">
                  <div>+91 9714645545</div>
                  <div>02824-225161</div>
                </div>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-saraswati-600 flex-shrink-0 mr-3" />
                <a 
                  href="mailto:scit.dhoraji@gmail.com" 
                  className="text-muted-foreground hover:text-saraswati-700 transition-colors"
                >
                  scit.dhoraji@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-saraswati-100 py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Saraswati College of Commerce, BBA & IT Dhoraji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
