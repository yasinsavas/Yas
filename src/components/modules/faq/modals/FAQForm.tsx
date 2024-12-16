import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import FormField from '../../../modals/shared/FormField';
import FormActions from '../../../modals/shared/FormActions';

interface FAQFormProps {
  onSubmit: (data: FAQFormData) => Promise<void>;
  onClose: () => void;
  initialData?: FAQFormData;
}

export interface FAQFormData {
  question: string;
  answer: string;
  category: string;
  status: string;
}

const categories = [
  'Garanti',
  'Kargo',
  'İade',
  'Ödeme',
  'Ürün',
  'Diğer'
];

function FAQForm({ onSubmit, onClose, initialData }: FAQFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FAQFormData>(initialData || {
    question: '',
    answer: '',
    category: 'Diğer',
    status: 'Aktif'
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
        <div className="p-2 bg-blue-100 rounded-lg">
          <HelpCircle className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-blue-900 mb-1">Soru Detayları</h4>
          <p className="text-sm text-blue-700">Sık sorulan soru ekleyin veya düzenleyin</p>
        </div>
      </div>

      <div className="space-y-4">
        <FormField 
          label="Soru" 
          required
          helpText="Kullanıcıların sıkça sorduğu soruyu girin"
        >
          <input
            type="text"
            name="question"
            value={formData.question}
            onChange={handleChange}
            className="form-input"
            placeholder="Örn: Ürünleriniz için garanti süresi ne kadardır?"
            required
          />
        </FormField>

        <FormField 
          label="Cevap" 
          required
          helpText="Soru için detaylı bir cevap yazın"
        >
          <textarea
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            className="form-textarea"
            rows={4}
            placeholder="Sorunun detaylı cevabını yazın..."
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
      </div>

      <FormActions
        onClose={onClose}
        isSubmitting={isSubmitting}
        submitText={initialData ? 'Güncelle' : 'Ekle'}
      />
    </form>
  );
}

export default FAQForm;