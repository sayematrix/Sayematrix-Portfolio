import React from 'react';

interface SayematrixLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  id?: string;
}

/**
 * SAYEMATRIX Plain Text Wordmark
 * Displays 'SAYEMATRIX' as a clean, bold text wordmark without icons or graphics.
 */
export const SayematrixLogo: React.FC<SayematrixLogoProps> = ({
  size = 'md',
  className = '',
  onClick,
  id,
}) => {
  const textSize = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
  }[size];

  return (
    <div
      onClick={onClick}
      id={id}
      className={`group inline-flex items-center select-none ${
        onClick ? 'cursor-pointer focus:outline-none' : ''
      } ${className}`}
      role={onClick ? 'button' : 'img'}
      aria-label="SAYEMATRIX"
    >
      <span className={`font-sans font-black tracking-[0.18em] uppercase text-[#F8FAFC] group-hover:text-emerald-400 transition-colors duration-200 ${textSize}`}>
        SAYEMATRIX
      </span>
    </div>
  );
};
