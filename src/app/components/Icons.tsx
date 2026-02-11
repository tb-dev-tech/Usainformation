import image_33f175da016ced2aa6057ced451ad1cf090eb75b from 'figma:asset/33f175da016ced2aa6057ced451ad1cf090eb75b.png'
import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export function StarIcon({ size = 32, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 2L20.12 10.36L29.52 11.72L22.76 18.28L24.24 27.64L16 23.28L7.76 27.64L9.24 18.28L2.48 11.72L11.88 10.36L16 2Z" />
    </svg>
  );
}

export function StripeIcon({ size = 32, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      className={className}
    >
      <line x1="0" y1="4" x2="32" y2="4" />
      <line x1="0" y1="8" x2="32" y2="8" />
      <line x1="0" y1="12" x2="32" y2="12" />
      <line x1="0" y1="16" x2="32" y2="16" />
      <line x1="0" y1="20" x2="32" y2="20" />
      <line x1="0" y1="24" x2="32" y2="24" />
      <line x1="0" y1="28" x2="32" y2="28" />
    </svg>
  );
}

export function USAMapIcon({ size = 32, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12L4 10L6 11L8 9L10 10L12 9L14 11L16 10L18 12L20 10L22 11L24 9L26 10L28 12V22L26 24L24 23L22 24L20 22L18 23L16 22L14 24L12 22L10 23L8 22L6 24L4 23L2 24V12Z" />
      <circle cx="16" cy="16" r="2" fill={color} />
    </svg>
  );
}

export function StatueIcon({ size = 32, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 4L18 2L20 4L18 6L20 8L18 10L16 8L14 10L12 8L14 6L12 4L14 2L16 4Z" />
      <circle cx="16" cy="14" r="2" />
      <path d="M16 16V20" />
      <path d="M12 18L16 20L20 18" />
      <rect x="10" y="20" width="12" height="2" />
      <rect x="8" y="22" width="16" height="2" />
      <rect x="6" y="24" width="20" height="4" />
    </svg>
  );
}

export function Route66Icon({ size = 32, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 16C4 16 6 8 16 8C26 8 28 16 28 16C28 16 26 24 16 24C6 24 4 16 4 16Z" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill={color} stroke="none">66</text>
    </svg>
  );
}

export function BurgerIcon({ size = 32, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 10C6 8 8 6 16 6C24 6 26 8 26 10" />
      <line x1="6" y1="10" x2="26" y2="10" />
      <rect x="6" y="10" width="20" height="4" />
      <rect x="7" y="14" width="18" height="2" />
      <rect x="6" y="16" width="20" height="4" />
      <path d="M6 20L8 26H24L26 20" />
    </svg>
  );
}

export function FilmIcon({ size = 32, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="6" width="24" height="20" rx="2" />
      <rect x="8" y="10" width="16" height="12" />
      <circle cx="6" cy="9" r="1" fill={color} />
      <circle cx="6" cy="16" r="1" fill={color} />
      <circle cx="6" cy="23" r="1" fill={color} />
      <circle cx="26" cy="9" r="1" fill={color} />
      <circle cx="26" cy="16" r="1" fill={color} />
      <circle cx="26" cy="23" r="1" fill={color} />
    </svg>
  );
}

export function MicrophoneIcon({ size = 32, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="12" y="4" width="8" height="12" rx="4" />
      <path d="M8 14C8 18 11 20 16 20C21 20 24 18 24 14" />
      <line x1="16" y1="20" x2="16" y2="26" />
      <line x1="12" y1="26" x2="20" y2="26" />
    </svg>
  );
}

export function GlobeIcon({ size = 32, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="16" cy="16" r="12" />
      <path d="M4 16H28" />
      <path d="M16 4C13 7 12 11 12 16C12 21 13 25 16 28" />
      <path d="M16 4C19 7 20 11 20 16C20 21 19 25 16 28" />
    </svg>
  );
}

export function FlagBadgeIcon({ size = 32, className = '', color = 'currentColor' }: IconProps) {
  return (
    <svg src={image_33f175da016ced2aa6057ced451ad1cf090eb75b} 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="16" cy="16" r="12" />
      <path d="M10 10L10 22" />
      <path d="M10 10C10 10 12 8 16 8C20 8 22 10 22 10L22 16C22 16 20 14 16 14C12 14 10 16 10 16" />
      <line x1="11" y1="11" x2="21" y2="11" />
      <line x1="11" y1="13" x2="21" y2="13" />
    </svg>
  );
}
