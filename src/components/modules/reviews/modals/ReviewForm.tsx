import React, { useState } from 'react';
import { MessageSquare, Star } from 'lucide-react';
import FormField from '../../../modals/shared/FormField';
import FormActions from '../../../modals/shared/FormActions';

interface ReviewFormProps {
  onSubmit: (data: ReviewFormData) => Promise<void>;
  onClose: () => void;
  initialData?: ReviewFormData;
}

export interface ReviewFormData {
  customerName: string;
  rating: number;
  comment: string;
  product: string;
  source: string;
  status: string;
}

const sources = [
  'Website',
  'Mobile App',
  'E-mail',
  'Sosyal Medya'
];

function ReviewForm({ onSubmit, onClose, initialData }: ReviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ReviewFormData>(initialData || {
    customerName: '',
    rating: 5,
    comment: '',
    product: '',
    source: 'Website',
    status: 'Onaylandı'
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
          <MessageSquare className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-blue-900 mb-1">Yorum Detayları</h4>
          <p className="text-sm text-blue-700">Müşteri yorumu ekleyin veya düzenleyin</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField 
            label="Müşteri Adı" 
            required
          >
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="form-input"
              placeholder="Müşteri adı"
              required
            />
          </FormField>

          <FormField 
            label="Puan" 
            required
          >
            <div className="flex items-center gap-2">
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="form-select"
                required
              >
                {[1, 2, 3, 4, 5].map(rating => (
                  <option key={rating} value={rating}>
                    {rating} {rating === 1 ? 'Yıldız' : 'Yıldız'}
                  </option>
                ))}
              </select>
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
          </FormField>
        </div>

        <FormField 
          label="Ürün" 
          required
        >
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="form-input"
            placeholder="Yorum yapılan ürün"
            required
          />
        </FormField>

        <FormField 
          label="Yorum" 
          required
        >
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="form-textarea"
            rows={4}
            placeholder="Müşteri yorumu"
            required
          />
        </FormField>

        <div className="grid grid-cols-2 gap-4">
          <FormField label="Kaynak" required>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="form-select"
              required
            >
              {sources.map(source => (
                <option key={source} value={source}>
                  {source}
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
              <option value="Onaylandı">Onaylandı</option>
              <option value="Beklemede">Beklemede</option>
              <option value="Reddedildi">Reddedildi</option>
            </select>
          </FormField>
        </div>
      </div>

      <FormActions
        onClose={onClose}
        isSubmitting={isSubmitting}
        submitText={initialData ? 'Güncelle' : 'Yorum Ekle'}
      />
    </form>
  );
}

export default ReviewForm;