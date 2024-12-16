import React from 'react';
import SearchInput from './SearchInput';
import CategoryFilter from './CategoryFilter';
import ViewToggle from './ViewToggle';

interface SearchBarProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

function SearchBar({ viewMode, onViewModeChange }: SearchBarProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <SearchInput />
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <CategoryFilter />
        <ViewToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
      </div>
    </div>
  );
}

export default SearchBar;