import React, { useState } from 'react';
import HeaderTitle from './HeaderTitle';
import StatsGrid from '../Stats/StatsGrid';
import { Plus } from 'lucide-react';
import AddCertificateModal from '../../modals/AddCertificateModal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="gradient-bg rounded-2xl p-8 relative overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <HeaderTitle />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Yeni Sertifika Ekle
        </button>
      </div>
      <StatsGrid />

      <AddCertificateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default Header;