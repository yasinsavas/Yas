import React, { useState } from 'react';
import { Tag } from 'lucide-react';
import Modal from '../shared/ui/Modal';

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddCategoryModal({ isOpen, onClose }: AddCategoryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#0a2351'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Category Data:', formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Yeni Kategori Ekle">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-[#0a2351]/5 rounded-lg">
          <div className="p-2 bg-[#0a2351]/10 rounded-lg">
            <Tag className="w-5 h-5 text-[#0a2351]" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#0a2351]">Kategori Bilgileri</h3>
            <p className="text-sm text-[#0a2351]/70">Yeni bir sertifika kategorisi ekleyin</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-1">
              Kategori Adı <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
              placeholder="Örn: Kalite, Çevre, İş Güvenliği"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-1">
              Açıklama
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
              rows={3}
              placeholder="Kategori açıklaması"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-1">
              Renk
            </label>
            <input
              type="color"
              value={formData.color}
              onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
              className="w-full h-10 p-1 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            İptal
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#0a2351] text-white rounded-lg hover:bg-[#0a2351]/90 transition-colors"
          >
            Kategori Ekle
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddCategoryModal;