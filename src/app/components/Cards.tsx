import React from 'react';

interface InfoCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  variant?: 'light' | 'dark';
  withImage?: boolean;
  imageSrc?: string;
  className?: string;
}

export function InfoCard({ 
  icon, 
  title, 
  description, 
  variant = 'light',
  withImage = false,
  imageSrc,
  className = ''
}: InfoCardProps) {
  const bgColor = variant === 'light' ? 'bg-white' : 'bg-[#1A1A1A]';
  const textColor = variant === 'light' ? 'text-[#1A1A1A]' : 'text-[#F2F2F2]';
  const shadowColor = variant === 'light' ? 'shadow-lg' : 'shadow-xl shadow-black/30';
  
  return (
    <div 
      className={`
        ${bgColor} ${textColor} ${shadowColor}
        rounded-xl p-6
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        ${className}
      `}
    >
      {withImage && imageSrc && (
        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {icon && (
        <div className="mb-4 text-[#B33A3A]">
          {icon}
        </div>
      )}
      
      <h3 
        className="mb-3"
        style={{ 
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.5rem',
          fontWeight: 600
        }}
      >
        {title}
      </h3>
      
      <p 
        className="opacity-90"
        style={{ 
          fontFamily: 'Inter, sans-serif',
          fontSize: '1rem',
          lineHeight: 1.7
        }}
      >
        {description}
      </p>
    </div>
  );
}

interface LargeInfoBoxProps {
  icon?: React.ReactNode;
  title: string;
  content: string;
  className?: string;
}

export function LargeInfoBox({ 
  icon, 
  title, 
  content,
  className = ''
}: LargeInfoBoxProps) {
  return (
    <div 
      className={`
        bg-transparent border border-[#C9A86A]
        rounded-xl p-8
        transition-all duration-300
        hover:border-[#B33A3A] hover:shadow-lg hover:shadow-[#C9A86A]/20
        ${className}
      `}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="text-[#C9A86A] flex-shrink-0">
            {icon}
          </div>
        )}
        
        <div className="flex-1">
          <h3 
            className="mb-4 text-[#F2F2F2]"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.75rem',
              fontWeight: 600
            }}
          >
            {title}
          </h3>
          
          <p 
            className="text-[#F2F2F2] opacity-90"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              lineHeight: 1.8
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

interface SmallInfoBoxProps {
  title: string;
  content: string;
  className?: string;
}

export function SmallInfoBox({ 
  title, 
  content,
  className = ''
}: SmallInfoBoxProps) {
  return (
    <div 
      className={`
        bg-[#1A1A1A] border border-[#C9A86A]/30
        rounded-lg p-4
        transition-all duration-300
        hover:border-[#C9A86A]
        ${className}
      `}
    >
      <h4 
        className="mb-2 text-[#C9A86A]"
        style={{ 
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.125rem',
          fontWeight: 600
        }}
      >
        {title}
      </h4>
      
      <p 
        className="text-[#F2F2F2] opacity-80"
        style={{ 
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9375rem',
          lineHeight: 1.6
        }}
      >
        {content}
      </p>
    </div>
  );
}
