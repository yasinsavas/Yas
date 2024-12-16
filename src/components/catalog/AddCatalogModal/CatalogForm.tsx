import React, { useState } from 'react';
import { Book, Upload } from 'lucide-react';
import FormField from '../../shared/ui/FormField';
import FormActions from '../../shared/ui/FormActions';

interface CatalogFormProps {
  onSubmit: (data: any) => Promise<void>;
  onClose: () => void;
}

const categories = [
  'Genel',
  'Endüstriyel',
  'Teknik',
  'Ürün',
  'Hizmet'
];

const languages = [
  'Türkçe',
  'İngilizce',
  'Almanca',
  'Fransızca',
  'İspanyolca'
];

export function CatalogForm({ onSubmit, onClose }: CatalogFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Genel',
    language: 'Türkçe',
    description: '',
    file: null as File | null,
    image: null as File | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (type: 'file' | 'image') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, [type]: file }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4 p-4 bg-[#0a2351]/5 rounded-lg">
        <div className="p-2 bg-[#0a2351]/10 rounded-lg">
          <Book className="w-6 h-6 text-[#0a2351]" />
        </div>
        <div>
          <h4 className="font-medium text-[#0a2351] mb-1">Katalog Bilgileri</h4>
          <p className="text-sm text-[#0a2351]/70">Yeni bir dijital katalog ekleyin</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField 
            label="Katalog Adı" 
            required
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Örn: 2024 Ürün Kataloğu"
              required
            />
          </FormField>

          <FormField label="Kategori" required>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-select"
              required
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <FormField 
          label="Açıklama" 
          required
        >
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea"
            rows={3}
            placeholder="Katalog hakkında kısa bir açıklama yazın..."
            required
          />
        </FormField>

        <div className="grid grid-cols-2 gap-4">
          <FormField label="Dil" required>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="form-select"
              required
            >
              {languages.map(language => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        {/* File Upload Areas */}
        <div className="grid grid-cols-2 gap-6">
          <FormField 
            label="PDF Dosyası" 
            required
            helpText="Maksimum dosya boyutu: 5MB"
          >
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
              </div>
            </div>
          </FormField>

          <FormField 
            label="Katalog Görseli" 
            required
            helpText="PNG, JPG (max. 2MB)"
          >
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
              </div>
            </div>
          </FormField>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          İptal
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2.5 bg-[#0a2351] text-white rounded-lg hover:bg-[#0a2351]/90 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              Yükleniyor...
            </>
          ) : (
            'Katalog Ekle'
          )}
        </button>
      </div>
    </form>
  );
}