import React, { useState } from 'react';
import { SearchInput } from './SearchInput';
import { ViewToggle } from './ViewToggle';
import { FilterButton } from './FilterButton';

interface CatalogSearchProps {
  value: string;
  onChange: (value: string) => void;
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export function CatalogSearch({ 
  value, 
  onChange, 
  view, 
  onViewChange 
}: CatalogSearchProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div className="flex-1 flex items-center gap-4 w-full">
        <SearchInput value={value} onChange={onChange} />
        <FilterButton onClick={() => setShowFilters(!showFilters)} />
        <ViewToggle view={view} onViewChange={onViewChange} />
      </div>

      {showFilters && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 p-4 z-10">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option value="">Tümü</option>
                <option value="general">Genel</option>
                <option value="technical">Teknik</option>
                <option value="industrial">Endüstriyel</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dil</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option value="">Tümü</option>
                <option value="tr">Türkçe</option>
                <option value="en">İngilizce</option>
                <option value="de">Almanca</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sıralama</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                <option value="date">Tarihe Göre</option>
                <option value="downloads">İndirmeye Göre</option>
                <option value="name">İsme Göre</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}