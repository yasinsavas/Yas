import React, { useState } from 'react';
import { Tag } from 'lucide-react';
import FormField from '../shared/ui/FormField';
import FormActions from '../shared/ui/FormActions';

interface CategoryFormProps {
  onSubmit: (data: CategoryFormData) => Promise<void>;
  onClose: () => void;
  initialData?: CategoryFormData;
}

export interface CategoryFormData {
  name: string;
  description: string;
  color: string;
  icon: string;
}

const iconOptions = [
  { value: 'shield', label: 'Kalkan' },
  { value: 'award', label: 'Ödül' },
  { value: 'briefcase', label: 'Çanta' },
  { value: 'file-check', label: 'Dosya' },
];

const colorOptions = [
  { value: 'blue', label: 'Mavi', class: 'bg-blue-500' },
  { value: 'green', label: 'Yeşil', class: 'bg-green-500' },
  { value: 'purple', label: 'Mor', class: 'bg-purple-500' },
  { value: 'orange', label: 'Turuncu', class: 'bg-orange-500' },
];

export default function CategoryForm({ onSubmit, onClose, initialData }: CategoryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CategoryFormData>(initialData || {
    name: '',
    description: '',
    color: 'blue',
    icon: 'shield',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error('Form gönderimi hatası:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Tag className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-blue-900 mb-1">Kategori Bilgileri</h4>
          <p className="text-sm text-blue-700">Yeni bir katalog kategorisi ekleyin</p>
        </div>
      </div>

      <div className="space-y-4">
        <FormField
          label="Kategori Adı"
          required
          helpText="Kategori için benzersiz bir isim girin"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Örn: Kalite, Çevre, İş Güvenliği"
            required
          />
        </FormField>

        <FormField
          label="Açıklama"
          required
          helpText="Kategori hakkında kısa bir açıklama yazın"
        >
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea"
            rows={3}
            placeholder="Kategori açıklaması"
            required
          />
        </FormField>

        <div className="grid grid-cols-2 gap-4">
          <FormField 
            label="İkon"
            helpText="Kategoriyi temsil edecek bir ikon seçin"
          >
            <select
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              className="form-select"
            >
              {iconOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField 
            label="Renk"
            helpText="Kategori için bir renk seçin"
          >
            <div className="flex gap-2">
              {colorOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, color: option.value }))}
                  className={`w-8 h-8 rounded-full ${option.class} transition-all duration-200 hover:scale-110 ${
                    formData.color === option.value ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                  }`}
                />
              ))}
            </div>
          </FormField>
        </div>
      </div>

      <FormActions
        onClose={onClose}
        isSubmitting={isSubmitting}
        submitText="Kategori Ekle"
      />
    </form>
  );
}