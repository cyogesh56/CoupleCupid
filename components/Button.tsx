import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-fun font-bold uppercase tracking-wider transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-4 rounded-2xl shadow-lg border-b-4 active:border-b-0 active:translate-y-1";
  
  const variants = {
    primary: "bg-cupid-pink text-white border-rose-600 hover:bg-rose-400 focus:ring-rose-300",
    secondary: "bg-cupid-purple text-white border-indigo-700 hover:bg-indigo-400 focus:ring-indigo-300",
    danger: "bg-cupid-yellow text-slate-900 border-amber-600 hover:bg-amber-400 focus:ring-amber-200",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-lg",
    lg: "px-10 py-5 text-2xl",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};