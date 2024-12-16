import React, { useState } from 'react';
import { Search, Plus, Filter, LayoutGrid, List, Tag } from 'lucide-react';

interface CatalogSearchProps {
  value: string;
  onChange: (value: string) => void;
  onAddCatalog: () => void;
  onAddCategory: () => void;
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export function CatalogSearch({ 
  value, 
  onChange, 
  onAddCatalog,
  onAddCategory,
  view,
  onViewChange 
}: CatalogSearchProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div className="flex-1 flex items-center gap-4 w-full">
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Katalog adı veya kategori ara..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a2351]/20 focus:border-[#0a2351]"
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors relative group"
        >
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">Filtrele</span>

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
        </button>

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
      </div>
      
      <div className="flex items-center gap-3">
        <button
          onClick={onAddCategory}
          className="bg-[#0a2351]/10 text-[#0a2351] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#0a2351]/20 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Tag className="w-4 h-4" />
          Kategori Ekle
        </button>
        <button
          onClick={onAddCatalog}
          className="bg-[#0a2351] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#0a2351]/90 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Yeni Katalog
        </button>
      </div>
    </div>
  );
}