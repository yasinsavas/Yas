import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onAdd?: () => void;
  addButtonText?: string;
  showFilters?: boolean;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Ara...",
  onAdd,
  addButtonText = "Yeni Ekle",
  showFilters = false
}: SearchBarProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div className="flex-1 flex items-center gap-4 w-full">
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm 
                     focus:ring-2 focus:ring-[#0a2351]/20 focus:border-[#0a2351] 
                     transition-all hover:border-[#0a2351]/50 shadow-sm"
          />
        </div>

        {showFilters && (
          <button
            className="px-4 py-3 bg-white border border-gray-200 rounded-xl flex items-center gap-2 
                     hover:border-[#0a2351]/50 transition-all shadow-sm text-gray-700"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Filtrele</span>
          </button>
        )}
      </div>

      {onAdd && (
        <button
          onClick={onAdd}
          className="bg-[#0a2351] text-white px-6 py-3 rounded-xl flex items-center gap-2 
                   hover:bg-[#0a2351]/90 transition-all duration-200 hover:scale-105 
                   active:scale-95 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">{addButtonText}</span>
        </button>
      )}
    </div>
  );
}