import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: Option[];
  error?: string;
  helpText?: string;
  onChange: (value: string) => void;
}

export function Select({
  label,
  options,
  error,
  helpText,
  onChange,
  className = '',
  ...props
}: SelectProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <select
        className={`
          w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm
          focus:outline-none focus:ring-2 focus:ring-[#0a2351]/20 focus:border-[#0a2351]
          transition-all hover:border-[#0a2351]/50
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {helpText && !error && (
        <p className="text-xs text-gray-500">{helpText}</p>
      )}
      
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}