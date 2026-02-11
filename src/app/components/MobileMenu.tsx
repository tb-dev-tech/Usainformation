import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  variant: 'light' | 'dark';
}

export function MobileMenu({ isOpen, onClose, variant }: MobileMenuProps) {
  const location = useLocation();
  
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
  
  if (!isOpen) return null;
  
  const bgColor = variant === 'light' ? 'bg-white' : 'bg-[#0F0F0F]';
  const textColor = variant === 'light' ? 'text-[#1A1A1A]' : 'text-[#F2F2F2]';
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className={`
          fixed top-0 right-0 bottom-0 w-[85%] max-w-sm
          ${bgColor} ${textColor}
          z-50 shadow-2xl
          overflow-y-auto
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 
            className="text-[#B33A3A]"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.5rem',
              fontWeight: 700
            }}
          >
            Navigation
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={`
                      block px-4 py-3 rounded-lg
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-[#B33A3A] text-white' 
                        : 'hover:bg-white/10'
                      }
                    `}
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 600
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Footer */}
        <div className="p-6 border-t border-white/10 mt-auto">
          <p 
            className="opacity-70 text-center text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © 2026 Trym – USA Prosjekt
          </p>
        </div>
      </div>
    </>
  );
}
