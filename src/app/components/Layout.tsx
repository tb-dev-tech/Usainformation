import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'transparent';
  className?: string;
  id?: string;
}

export function Section({ 
  children, 
  variant = 'transparent',
  className = '',
  id
}: SectionProps) {
  const bgClass = 
    variant === 'light' ? 'bg-white/60 backdrop-blur-sm' :
    variant === 'dark' ? 'bg-[#1A1A1A]/80 backdrop-blur-sm' :
    '';
  
  return (
    <section 
      id={id}
      className={`py-24 px-8 ${bgClass} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export function Container({ 
  children, 
  size = 'lg',
  className = ''
}: ContainerProps) {
  const maxWidth = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-[1920px]'
  }[size];
  
  return (
    <div className={`${maxWidth} mx-auto px-8 ${className}`}>
      {children}
    </div>
  );
}

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: number;
  className?: string;
}

export function Grid({ 
  children, 
  cols = 3,
  gap = 8,
  className = ''
}: GridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }[cols];
  
  return (
    <div className={`grid ${gridCols} gap-${gap} ${className}`}>
      {children}
    </div>
  );
}
