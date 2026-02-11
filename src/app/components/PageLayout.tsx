import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  backgroundImage?: string;
  backgroundOverlay?: string;
}

export function PageLayout({ 
  children, 
  variant = 'dark',
  backgroundImage,
  backgroundOverlay = 'rgba(0, 0, 0, 0.6)'
}: PageLayoutProps) {
  const bgColor = variant === 'light' ? 'bg-[#F7F7F7]' : 'bg-[#0F0F0F]';
  
  return (
    <div className={`min-h-screen flex flex-col ${variant === 'dark' ? 'dark' : ''}`}>
      <Header variant={variant} />
      
      <main className="flex-1 relative">
        {/* Background Image */}
        {backgroundImage && (
          <>
            <div 
              className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${backgroundImage})`,
                top: '80px'
              }}
            />
            <div 
              className="fixed inset-0 z-0"
              style={{ 
                background: backgroundOverlay,
                top: '80px'
              }}
            />
          </>
        )}
        
        {/* Content */}
        <div className={`relative z-10 ${!backgroundImage ? bgColor : ''}`}>
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
