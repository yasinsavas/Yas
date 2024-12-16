import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import FormField from '../shared/FormField';
import FormActions from '../shared/FormActions';

interface CertificateFormProps {
  onSubmit: (data: any) => Promise<void>;
  onClose: () => void;
}

const categories = [
  'Kalite',
  'Çevre',
  'İş Güvenliği',
  'Bilgi Güvenliği'
];

const providers = [
  'Bureau Veritas',
  'TÜV SÜD',
  'SGS',
  'TSE'
];

function CertificateForm({ onSubmit, onClose }: CertificateFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Kalite',
    provider: '',
    startDate: '',
    endDate: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-blue-900 mb-1">Sertifika Bilgileri</h4>
          <p className="text-sm text-blue-700">Yeni bir sertifika kaydı oluşturun</p>
        </div>
      </div>

      <div className="space-y-4">
        <FormField 
          label="Sertifika Adı" 
          required
          helpText="Sertifikanın tam adını girin"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Örn: ISO 9001:2015"
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

          <FormField label="Veren Kurum" required>
            <select
              name="provider"
              value={formData.provider}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Kurum Seçin</option>
              {providers.map(provider => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField label="Başlangıç Tarihi" required>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="form-input"
              required
            />
          </FormField>

          <FormField label="Bitiş Tarihi" required>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="form-input"
              required
            />
          </FormField>
        </div>

        <FormField 
          label="Sertifika Dosyası" 
          required
          helpText="PDF formatında, maksimum 5MB"
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
        submitText="Sertifika Ekle"
      />
    </form>
  );
}

export default CertificateForm;