
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Faculties', path: '/faculties' },
  { name: 'Management', path: '/management' },
  { name: 'Contact', path: '/contact' },
  { name: 'Apply', path: '/apply' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-subtle'
          : 'py-5 bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo isScrolled={isScrolled} size={isScrolled ? "sm" : "md"} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              const isApply = link.name === 'Apply';
              
              return (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                      isApply
                        ? 'bg-saraswati-600 text-white hover:bg-saraswati-700 ml-2'
                        : isActive 
                          ? 'text-saraswati-700'
                          : 'text-foreground/80 hover:text-saraswati-700'
                    }`}
                  >
                    {link.name}
                    {isActive && !isApply && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-saraswati-500 rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-foreground lg:hidden"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '0', paddingTop: '5rem' }}
        >
          <nav className="container h-full">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                const isApply = link.name === 'Apply';
                
                return (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 text-xl font-medium rounded-md transition-all ${
                        isApply
                          ? 'bg-saraswati-600 text-white text-center my-4'
                          : isActive 
                            ? 'text-saraswati-700 bg-saraswati-50'
                            : 'hover:bg-saraswati-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
