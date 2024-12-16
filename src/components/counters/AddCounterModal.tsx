import React, { useState } from 'react';
import { BarChart2, Target, TrendingUp, Eye, Plus } from 'lucide-react';
import Modal from '../shared/ui/Modal';

interface AddCounterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddCounterModal({ isOpen, onClose }: AddCounterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    initialValue: '0',
    targetValue: '',
    description: '',
    autoIncrement: false,
    showOnDashboard: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Yeni Sayaç Ekle">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-[#0a2351]/5 rounded-lg">
          <div className="p-2 bg-[#0a2351]/10 rounded-lg">
            <BarChart2 className="w-5 h-5 text-[#0a2351]" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#0a2351]">Sayaç Bilgileri</h3>
            <p className="text-sm text-[#0a2351]/70">Yeni bir sayaç ekleyin</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-1">
              Sayaç Başlığı <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
              placeholder="Sayaç başlığını girin"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-1">
              Tür <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
              required
            >
              <option value="">Tür Seçin</option>
              <option value="visitors">Ziyaretçi Sayacı</option>
              <option value="pageviews">Sayfa Görüntüleme</option>
              <option value="duration">Süre Sayacı</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Ön Ek
              </label>
              <input
                type="text"
                value={formData.initialValue}
                onChange={(e) => setFormData(prev => ({ ...prev, initialValue: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
                placeholder="Ön Ek"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Başlangıç Değeri <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.initialValue}
                onChange={(e) => setFormData(prev => ({ ...prev, initialValue: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
                placeholder="0"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Son Ek
              </label>
              <input
                type="text"
                value={formData.targetValue}
                onChange={(e) => setFormData(prev => ({ ...prev, targetValue: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
                placeholder="Son Ek"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-1">
              Hedef Değer
            </label>
            <input
              type="text"
              value={formData.targetValue}
              onChange={(e) => setFormData(prev => ({ ...prev, targetValue: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
              placeholder="Opsiyonel"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-1">
              Açıklama
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all resize-none"
              rows={3}
              placeholder="Sayaç hakkında kısa bir açıklama girin"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="autoIncrement"
                checked={formData.autoIncrement}
                onChange={(e) => setFormData(prev => ({ ...prev, autoIncrement: e.target.checked }))}
                className="w-4 h-4 rounded border-gray-300 text-[#0a2351] focus:ring-[#0a2351]"
              />
              <label htmlFor="autoIncrement" className="text-sm text-gray-700">
                Otomatik artış aktif
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="showOnDashboard"
                checked={formData.showOnDashboard}
                onChange={(e) => setFormData(prev => ({ ...prev, showOnDashboard: e.target.checked }))}
                className="w-4 h-4 rounded border-gray-300 text-[#0a2351] focus:ring-[#0a2351]"
              />
              <label htmlFor="showOnDashboard" className="text-sm text-gray-700">
                Anasayfada göster
              </label>
            </div>
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
            Sayaç Ekle
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddCounterModal;