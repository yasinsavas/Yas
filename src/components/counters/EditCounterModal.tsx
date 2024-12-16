import React, { useState } from 'react';
import { BarChart2 } from 'lucide-react';
import Modal from '../shared/ui/Modal';

interface EditCounterModalProps {
  isOpen: boolean;
  onClose: () => void;
  counter: {
    name: string;
    type: string;
    value: string;
    period: string;
    description?: string;
  };
}

function EditCounterModal({ isOpen, onClose, counter }: EditCounterModalProps) {
  const [formData, setFormData] = useState({
    name: counter.name,
    type: counter.type,
    value: counter.value.replace(/,/g, ''),
    period: counter.period,
    description: counter.description || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated Data:', formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sayaç Düzenle">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-[#0a2351]/5 rounded-lg">
          <div className="p-2 bg-[#0a2351]/10 rounded-lg">
            <BarChart2 className="w-5 h-5 text-[#0a2351]" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#0a2351]">Sayaç Bilgileri</h3>
            <p className="text-sm text-[#0a2351]/70">Sayaç bilgilerini güncelleyin</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-1">
              Sayaç Adı <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
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
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Sayaç Tipi <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                className="w-full h-[50px] px-4 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
                required
              >
                <option value="visitors">Ziyaretçi Sayacı</option>
                <option value="pageviews">Sayfa Görüntüleme</option>
                <option value="duration">Süre Sayacı</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Mevcut Değer <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.value}
                onChange={(e) => setFormData(prev => ({ ...prev, value: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-1">
              Periyot <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.period}
              onChange={(e) => setFormData(prev => ({ ...prev, period: e.target.value }))}
              className="w-full h-[50px] px-4 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
              required
            >
              <option value="daily">Günlük</option>
              <option value="weekly">Haftalık</option>
              <option value="monthly">Aylık</option>
              <option value="yearly">Yıllık</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            İptal
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#0a2351] text-white rounded-lg hover:bg-[#0a2351]/90 transition-colors"
          >
            Değişiklikleri Kaydet
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default EditCounterModal;