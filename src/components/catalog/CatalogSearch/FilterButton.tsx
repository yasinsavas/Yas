import React from 'react';
import { Filter } from 'lucide-react';

interface FilterButtonProps {
  onClick: () => void;
}

export function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 
               hover:bg-gray-50 transition-colors relative group"
    >
      <Filter className="w-4 h-4 text-gray-500" />
      <span className="text-sm text-gray-700">Filtrele</span>
    </button>
  );
}