import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: LucideIcon;
  isLoading?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  icon: Icon,
  isLoading,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200";
  
  const variants = {
    primary: "bg-[#0a2351] text-white hover:bg-[#0a2351]/90 hover:scale-105 active:scale-95",
    secondary: "border border-gray-200 text-gray-700 hover:bg-gray-50",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      ) : Icon && (
        <Icon className="w-4 h-4" />
      )}
      {children}
    </button>
  );
}