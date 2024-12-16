import React, { useState } from 'react';
import { FileText, Star, Upload } from 'lucide-react';
import Modal from '../shared/ui/Modal';

interface AddCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddCertificateModal({ isOpen, onClose }: AddCertificateModalProps) {
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    name: '',
    provider: '',
    description: '',
    category: 'Kalite',
    startDate: '',
    endDate: '',
    file: null as File | null,
    image: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', { ...formData, rating });
    onClose();
  };

  const handleFileChange = (type: 'file' | 'image') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, [type]: file }));
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Yeni Sertifika Ekle" maxWidth="max-w-4xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header Section */}
        <div className="flex items-start gap-4 p-4 bg-[#0a2351]/5 rounded-lg">
          <div className="p-2 bg-[#0a2351]/10 rounded-lg">
            <FileText className="w-5 h-5 text-[#0a2351]" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#0a2351]">Sertifika Bilgileri</h3>
            <p className="text-sm text-[#0a2351]/70">Yeni bir sertifika kaydı oluşturun</p>
          </div>
        </div>

        {/* Basic Info Section */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Sertifika Adı <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
                placeholder="Örn: ISO 9001:2015"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Veren Kurum <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.provider}
                onChange={(e) => setFormData(prev => ({ ...prev, provider: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
                placeholder="Örn: Bureau Veritas"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-1">
              Açıklama <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all resize-none"
              rows={3}
              placeholder="Sertifika hakkında kısa bir açıklama yazın..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Kategori <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full h-[50px] px-4 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
              >
                <option value="kalite">Kalite</option>
                <option value="cevre">Çevre</option>
                <option value="isGuvenlik">İş Güvenliği</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Değerlendirme <span className="text-red-500">*</span>
              </label>
              <div className="h-[50px] flex items-center px-4 bg-[#0a2351]/5 border-2 border-transparent rounded-lg">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        value <= rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      } transition-colors hover:scale-110`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Başlangıç Tarihi <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0a2351] mb-1">
                Bitiş Tarihi <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                className="w-full px-4 py-3 bg-[#0a2351]/5 border-2 border-transparent rounded-lg focus:border-[#0a2351] focus:bg-white transition-all"
                required
              />
            </div>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-2">
              Sertifika Dosyası <span className="text-red-500">*</span>
            </label>
            <div className="relative border-2 border-dashed border-gray-200 rounded-lg p-6 hover:border-[#0a2351] transition-colors">
              <input
                type="file"
                onChange={handleFileChange('file')}
                accept=".pdf"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
              <div className="flex flex-col items-center text-center">
                <Upload className="w-8 h-8 text-[#0a2351] mb-2" />
                <p className="text-sm font-medium text-[#0a2351]">PDF Dosyası Yükle</p>
                <p className="text-xs text-gray-500 mt-1">veya sürükle bırak</p>
                <p className="text-xs text-gray-400 mt-2">Maksimum dosya boyutu: 5MB</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0a2351] mb-2">
              Sertifika Görseli <span className="text-red-500">*</span>
            </label>
            <div className="relative border-2 border-dashed border-gray-200 rounded-lg p-6 hover:border-[#0a2351] transition-colors">
              <input
                type="file"
                onChange={handleFileChange('image')}
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
              <div className="flex flex-col items-center text-center">
                <Upload className="w-8 h-8 text-[#0a2351] mb-2" />
                <p className="text-sm font-medium text-[#0a2351]">Görsel Yükle</p>
                <p className="text-xs text-gray-500 mt-1">veya sürükle bırak</p>
                <p className="text-xs text-gray-400 mt-2">PNG, JPG (max. 2MB)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
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
            Sertifika Ekle
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddCertificateModal;