import React from 'react';
import { HelpCircle, Tag, Eye, Calendar } from 'lucide-react';
import Modal from '../../../modals/shared/Modal';

interface ViewFAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  faq: {
    question: string;
    answer: string;
    category: string;
    status: string;
    views: number;
    lastUpdated: string;
  };
}

function ViewFAQModal({ isOpen, onClose, faq }: ViewFAQModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Soru Detayları"
    >
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="p-2 bg-blue-100 rounded-lg">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-blue-900">{faq.question}</h4>
            <p className="text-sm text-blue-700">{faq.category}</p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h5 className="font-medium text-gray-900 mb-2">Cevap</h5>
          <p className="text-gray-600 whitespace-pre-wrap">{faq.answer}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Tag className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Kategori</div>
              <div className="font-medium text-gray-900">{faq.category}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Eye className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Görüntülenme</div>
              <div className="font-medium text-gray-900">{faq.views.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Calendar className="w-5 h-5 text-gray-500" />
          <div>
            <div className="text-sm text-gray-500">Son Güncelleme</div>
            <div className="font-medium text-gray-900">{faq.lastUpdated}</div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ViewFAQModal;