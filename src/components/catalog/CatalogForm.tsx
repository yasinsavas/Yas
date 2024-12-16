import React, { useState } from 'react';
import { Book } from 'lucide-react';
import FormField from '../shared/ui/FormField';
import FormActions from '../shared/ui/FormActions';

interface CatalogFormProps {
  onSubmit: (data: any) => Promise<void>;
  onClose: () => void;
  initialData?: any;
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

export default function CatalogForm({ onSubmit, onClose, initialData }: CatalogFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialData || {
    name: '',
    category: 'Genel',
    language: 'Türkçe',
    description: '',
    file: null
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Book className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-blue-900 mb-1">Katalog Bilgileri</h4>
          <p className="text-sm text-blue-700">Yeni bir dijital katalog ekleyin</p>
        </div>
      </div>

      <div className="space-y-4">
        <FormField 
          label="Katalog Adı" 
          required
          helpText="Katalog için benzersiz bir isim girin"
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

        <div className="grid grid-cols-2 gap-4">
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

        <FormField 
          label="Açıklama" 
          required
          helpText="Katalog hakkında kısa bir açıklama yazın"
        >
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea"
            rows={4}
            placeholder="Katalog açıklaması"
            required
          />
        </FormField>

        <FormField 
          label="PDF Dosyası" 
          required
          helpText="Maksimum dosya boyutu: 50MB"
        >
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            accept=".pdf"
            className="form-input"
            required
          />
        </FormField>
      </div>

      <FormActions
        onClose={onClose}
        isSubmitting={isSubmitting}
        submitText={initialData ? 'Güncelle' : 'Katalog Ekle'}
      />
    </form>
  );
}