import React, { useState } from 'react';
import { Search, Plus, Tag } from 'lucide-react';
import AddCertificateModal from './AddCertificateModal';
import AddCategoryModal from './AddCategoryModal';

interface SearchWithAddProps {
  onSearch: (value: string) => void;
  searchValue: string;
}

function SearchWithAdd({ onSearch, searchValue }: SearchWithAddProps) {
  const [modalState, setModalState] = useState({
    certificate: false,
    category: false
  });

  const handleCloseModals = () => {
    setModalState({
      certificate: false,
      category: false
    });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
        <input
          type="text"
          placeholder="Sertifika ara..."
          value={searchValue}
          onChange={(e) => onSearch(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a2351]/20 focus:border-[#0a2351] transition-all"
        />
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => setModalState(prev => ({ ...prev, category: true }))}
          className="bg-[#0a2351]/10 text-[#0a2351] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#0a2351]/20 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Tag className="w-4 h-4" />
          Kategori Ekle
        </button>
        <button
          onClick={() => setModalState(prev => ({ ...prev, certificate: true }))}
          className="bg-[#0a2351] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#0a2351]/90 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Yeni Sertifika
        </button>
      </div>

      <AddCertificateModal 
        isOpen={modalState.certificate}
        onClose={handleCloseModals}
      />
      <AddCategoryModal
        isOpen={modalState.category}
        onClose={handleCloseModals}
      />
    </div>
  );
}

export default SearchWithAdd;