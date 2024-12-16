import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  helpText?: string;
}

export function Input({ 
  label,
  error,
  icon: Icon,
  helpText,
  className = '',
  ...props 
}: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <Icon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
        )}
        <input
          className={`
            w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm
            focus:outline-none focus:ring-2 focus:ring-[#0a2351]/20 focus:border-[#0a2351]
            transition-all hover:border-[#0a2351]/50
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>

      {helpText && !error && (
        <p className="text-xs text-gray-500">{helpText}</p>
      )}
      
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}