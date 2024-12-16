import React from 'react';
import { Plus } from 'lucide-react';

interface ActionButtonsProps {
  onOpenModal: (type: 'category' | 'certificate') => void;
}

function ActionButtons({ onOpenModal }: ActionButtonsProps) {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => onOpenModal('category')}
        className="bg-white/10 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <Plus className="w-4 h-4" />
        Kategori Ekle
      </button>
      <button
        onClick={() => onOpenModal('certificate')}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <Plus className="w-4 h-4" />
        Yeni Sertifika Ekle
      </button>
    </div>
  );
}

export default ActionButtons;