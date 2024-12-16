import React from 'react';
import { Search, LayoutGrid, List } from 'lucide-react';

interface SearchBarProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

function SearchBar({ viewMode, onViewModeChange }: SearchBarProps) {
  return (
    <div className="mb-6 flex justify-between items-center">
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Sertifika ara..."
          className="pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
      </div>
      <div className="flex gap-4 items-center">
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
          <option>Tüm Sertifikalar</option>
          <option>Kalite</option>
          <option>Çevre</option>
          <option>İş Güvenliği</option>
          <option>Bilgi Güvenliği</option>
        </select>
        <div className="flex gap-1">
          <button 
            onClick={() => onViewModeChange('grid')}
            className={`p-2.5 rounded-lg border border-gray-200 transition-colors ${
              viewMode === 'grid' 
                ? 'bg-blue-50 text-blue-600 border-blue-200' 
                : 'hover:bg-gray-50 text-gray-500'
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button 
            onClick={() => onViewModeChange('list')}
            className={`p-2.5 rounded-lg border border-gray-200 transition-colors ${
              viewMode === 'list' 
                ? 'bg-blue-50 text-blue-600 border-blue-200' 
                : 'hover:bg-gray-50 text-gray-500'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;