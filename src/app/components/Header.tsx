import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FlagBadgeIcon } from './Icons';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  variant?: 'light' | 'dark';
}

export function Header({ variant = 'light' }: HeaderProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const bgColor = variant === 'light' 
    ? 'bg-white/95' 
    : 'bg-[#0F0F0F]/80';
  
  const textColor = variant === 'light' ? 'text-[#1A1A1A]' : 'text-[#F2F2F2]';
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/fakta-om-usa', label: 'Fakta om USA' },
    { path: '/turisme', label: 'Turisme' },
    { path: '/sprak', label: 'Språk' },
    { path: '/geografi', label: 'Geografi' },
    { path: '/kultur', label: 'Kultur' },
    { path: '/tradisjoner', label: 'Tradisjoner' },
    { path: '/baerekraftig-utvikling', label: 'Bærekraftig utvikling' },
    { path: '/matkultur', label: 'Matkultur' },
    { path: '/kilder', label: 'Kilder' }
  ];
  
  return (
    <>
      <header 
        className={`
          ${bgColor} ${textColor}
          sticky top-0 z-50
          backdrop-blur-md
          border-b border-white/10
          transition-all duration-300
        `}
        style={{ height: '80px' }}
      >
        <div className="max-w-[1920px] mx-auto px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <FlagBadgeIcon size={48} color="#B33A3A" />
            <span 
              className="hidden lg:block"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#B33A3A'
              }}
            >
              USA
            </span>
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    uppercase transition-all duration-300
                    hover:text-[#B33A3A]
                    ${isActive ? 'text-[#B33A3A] font-bold' : ''}
                    relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B33A3A]
                    after:transition-all after:duration-300
                    hover:after:w-full
                    ${isActive ? 'after:w-full' : ''}
                  `}
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
            <div className="w-6 h-0.5 bg-current transition-all"></div>
          </button>
        </div>
      </header>
      
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        variant={variant}
      />
    </>
  );
}