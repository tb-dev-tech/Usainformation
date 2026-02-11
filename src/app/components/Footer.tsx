import React from 'react';
import { Link } from 'react-router-dom';
import { FlagBadgeIcon } from './Icons';

export function Footer() {
  return (
    <footer 
      className="bg-[#0F0F0F] text-[#F2F2F2] border-t border-white/10 mt-auto"
      style={{ minHeight: '120px' }}
    >
      <div className="max-w-[1920px] mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link 
              to="/" 
              className="text-sm hover:text-[#C9A86A] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Home
            </Link>
            <Link 
              to="/fakta-om-usa" 
              className="text-sm hover:text-[#C9A86A] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Fakta
            </Link>
            <Link 
              to="/turisme" 
              className="text-sm hover:text-[#C9A86A] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Turisme
            </Link>
            <Link 
              to="/kultur" 
              className="text-sm hover:text-[#C9A86A] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Kultur
            </Link>
            <Link 
              to="/kilder" 
              className="text-sm hover:text-[#C9A86A] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Kilder
            </Link>
          </div>
          
          {/* Center: Logo */}
          <div className="flex items-center gap-2">
            <FlagBadgeIcon size={40} color="#C9A86A" />
          </div>
          
          {/* Right: Copyright */}
          <div className="text-sm text-center md:text-right opacity-70">
            <p style={{ fontFamily: 'Inter, sans-serif' }}>© 2026 – USA Prosjekt</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
