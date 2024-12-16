import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

interface ViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
      <button 
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded-lg transition-all duration-200 ${
          view === 'grid' 
            ? 'bg-white text-[#0a2351] shadow-sm' 
            : 'text-gray-500 hover:text-[#0a2351] hover:bg-white/50'
        }`}
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
      <button 
        onClick={() => onViewChange('list')}
        className={`p-2 rounded-lg transition-all duration-200 ${
          view === 'list' 
            ? 'bg-white text-[#0a2351] shadow-sm' 
            : 'text-gray-500 hover:text-[#0a2351] hover:bg-white/50'
        }`}
      >
        <List className="w-5 h-5" />
      </button>
    </div>
  );
}