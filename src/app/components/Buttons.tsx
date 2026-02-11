import React from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'light' | 'dark';
  disabled?: boolean;
  className?: string;
}

export function PrimaryButton({ 
  children, 
  onClick, 
  variant = 'light',
  disabled = false,
  className = ''
}: PrimaryButtonProps) {
  const bgColor = variant === 'light' ? 'bg-[#B33A3A]' : 'bg-[#2E4A78]';
  const hoverBg = variant === 'light' ? 'hover:bg-[#8B2E2E]' : 'hover:bg-[#1E3A68]';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${bgColor} ${hoverBg}
        text-white uppercase
        px-8 py-4 rounded-lg
        transition-all duration-300
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {children}
    </button>
  );
}

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function SecondaryButton({ 
  children, 
  onClick, 
  disabled = false,
  className = ''
}: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-transparent border-2 border-[#B33A3A]
        text-[#B33A3A] uppercase
        px-8 py-4 rounded-lg
        transition-all duration-300
        hover:bg-[#B33A3A] hover:text-white
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {children}
    </button>
  );
}
