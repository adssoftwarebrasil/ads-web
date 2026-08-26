import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'accent',
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105';

  const variants = {
    primary: 'bg-[#0a154b] text-white hover:bg-[#104071]',
    secondary: 'bg-[#104071] text-white hover:bg-[#0a154b]',
    accent: 'bg-[#07dde5] text-[#0a154b] hover:bg-[#104071] hover:text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
