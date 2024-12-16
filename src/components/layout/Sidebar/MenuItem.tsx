import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItemProps {
  icon: LucideIcon;
  text: string;
  subtext: string;
  path: string;
}

export function MenuItem({ icon: Icon, text, subtext, path }: MenuItemProps) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`flex items-start p-3 rounded-lg mb-1 cursor-pointer transition-colors
        ${isActive 
          ? 'bg-white/10' 
          : 'hover:bg-white/5'}`}
    >
      <Icon className={`w-5 h-5 mt-1 mr-3 ${
        isActive ? 'text-blue-400' : 'text-gray-400'
      }`} />
      <div>
        <div className={`text-sm ${
          isActive ? 'font-semibold text-blue-400' : 'font-medium'
        }`}>{text}</div>
        <div className="text-xs text-gray-500">{subtext}</div>
      </div>
    </Link>
  );
}