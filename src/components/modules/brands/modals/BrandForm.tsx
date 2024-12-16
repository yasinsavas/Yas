import React, { useState } from 'react';
import { Image } from 'lucide-react';
import FormField from '../../../modals/shared/FormField';
import FormActions from '../../../modals/shared/FormActions';

interface BrandFormProps {
  onSubmit: (data: BrandFormData) => Promise<void>;
  onClose: () => void;
  initialData?: BrandFormData;
}

export interface BrandFormData {
  name: string;
  category: string;
  country: string;
  website: string;
  status: string;
  logo?: File;
}

const categories = [
  'Partner',
  'Tedarikçi',
  'Müşteri',
  'Distribütör'
];

const countries = [
  'Türkiye',
  'ABD',
  'Almanya',
  'İngiltere',
  'Fransa',
  'İtalya',
  'İspanya',
  'Japonya',
  'Çin',
  'Güney Kore'
];

function BrandForm({ onSubmit, onClose, initialData }: BrandFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BrandFormData>(initialData || {
    name: '',
    category: 'Partner',
    country: 'Türkiye',
    website: '',
    status: 'Aktif'
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, logo: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Image className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-blue-900 mb-1">Marka Bilgileri</h4>
          <p className="text-sm text-blue-700">Marka ve logo bilgilerini ekleyin</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField 
            label="Marka Adı" 
            required
            helpText="Markanın tam adını girin"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Örn: Acme Industries"
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

        <div className="grid grid-cols-2 gap-4">
          <FormField label="Ülke" required>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="form-select"
              required
            >
              {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </FormField>

          <FormField 
            label="Website" 
            required
            helpText="Markanın web sitesi adresini girin"
          >
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="form-input"
              placeholder="Örn: www.acme.com"
              required
            />
          </FormField>
        </div>

        <FormField 
          label="Logo" 
          required={!initialData}
          helpText="PNG veya JPG formatında, maksimum 2MB"
        >
          <div className="space-y-4">
            <input
              type="file"
              name="logo"
              onChange={handleFileChange}
              accept="image/png,image/jpeg"
              className="form-input"
              required={!initialData}
            />
            {previewUrl && (
              <div className="mt-2">
                <img
                  src={previewUrl}
                  alt="Logo önizleme"
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </div>
            )}
          </div>
        </FormField>

        <FormField label="Durum" required>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="Aktif">Aktif</option>
            <option value="Pasif">Pasif</option>
          </select>
        </FormField>
      </div>

      <FormActions
        onClose={onClose}
        isSubmitting={isSubmitting}
        submitText={initialData ? 'Güncelle' : 'Marka Ekle'}
      />
    </form>
  );
}

export default BrandForm;