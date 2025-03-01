
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  size = "md", 
  variant = "full",
  isScrolled = false
}) => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the logo image
    const img = new Image();
    img.src = "/uploads/3c77743a-8d64-4686-a86d-968f9e400da4.png";
    img.onload = () => setLogoLoaded(true);
  }, []);
  
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  const getLogoContent = () => {
    if (variant === 'icon') {
      return (
        <div className="flex items-center">
          <img 
            src="/uploads/3c77743a-8d64-4686-a86d-968f9e400da4.png" 
            alt="Saraswati College Logo" 
            className={`${sizeClasses[size]} transition-all duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <img 
          src="/uploads/3c77743a-8d64-4686-a86d-968f9e400da4.png" 
          alt="Saraswati College Logo" 
          className={`${sizeClasses[size]} transition-all duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
          fetchPriority="high"
        />
        <div className={`transition-all duration-300 ${isScrolled ? 'scale-95 origin-left' : ''}`}>
          <h1 className={`font-heading text-saraswati-950 ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'} font-bold leading-tight`}>
            Saraswati College
          </h1>
          <p className={`text-muted-foreground ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'} font-medium tracking-wide`}>Commerce, BBA & IT Dhoraji</p>
        </div>
      </div>
    );
  };

  return (
    <Link to="/" className={`inline-flex ${className}`}>
      {getLogoContent()}
    </Link>
  );
};

export default Logo;
