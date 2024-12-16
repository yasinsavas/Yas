import React, { useState } from 'react';
import { BarChart2 } from 'lucide-react';
import FormField from '../../../modals/shared/FormField';
import FormActions from '../../../modals/shared/FormActions';

interface CounterFormProps {
  onSubmit: (data: any) => Promise<void>;
  onClose: () => void;
  initialData?: any;
}

const counterTypes = [
  { value: 'visitors', label: 'Ziyaretçi Sayacı' },
  { value: 'pageviews', label: 'Sayfa Görüntüleme' },
  { value: 'duration', label: 'Süre Sayacı' },
];

function CounterForm({ onSubmit, onClose, initialData }: CounterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialData || {
    name: '',
    type: 'visitors',
    initialValue: '0',
    period: 'daily',
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
        <div className="p-2 bg-blue-100 rounded-lg">
          <BarChart2 className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-blue-900 mb-1">Sayaç Bilgileri</h4>
          <p className="text-sm text-blue-700">Yeni bir sayaç ekleyin</p>
        </div>
      </div>

      <div className="space-y-4">
        <FormField label="Sayaç Adı" required>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Örn: Toplam Ziyaretçi"
            required
          />
        </FormField>

        <FormField label="Sayaç Tipi" required>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-select"
            required
          >
            {counterTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Başlangıç Değeri" required>
          <input
            type="number"
            name="initialValue"
            value={formData.initialValue}
            onChange={handleChange}
            className="form-input"
            min="0"
            required
          />
        </FormField>

        <FormField label="Periyot" required>
          <select
            name="period"
            value={formData.period}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="daily">Günlük</option>
            <option value="weekly">Haftalık</option>
            <option value="monthly">Aylık</option>
            <option value="yearly">Yıllık</option>
          </select>
        </FormField>
      </div>

      <FormActions
        onClose={onClose}
        isSubmitting={isSubmitting}
        submitText="Sayaç Ekle"
      />
    </form>
  );
}

export default CounterForm;