import React from 'react';
import { MessageSquare, Star, Calendar, Globe, ThumbsUp, Tag } from 'lucide-react';
import Modal from '../../../modals/shared/Modal';

interface ViewReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: {
    customerName: string;
    rating: number;
    comment: string;
    product: string;
    date: string;
    status: string;
    likes: number;
    source: string;
  };
}

function ViewReviewModal({ isOpen, onClose, review }: ViewReviewModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Yorum Detayları"
    >
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="p-2 bg-blue-100 rounded-lg">
            <MessageSquare className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-blue-900">{review.customerName}</h4>
            <div className="flex items-center gap-2 mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-blue-700">{review.rating} yıldız</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h5 className="font-medium text-gray-900 mb-2">Yorum</h5>
          <p className="text-gray-600 whitespace-pre-wrap">{review.comment}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Tag className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Ürün</div>
              <div className="font-medium text-gray-900">{review.product}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Globe className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Kaynak</div>
              <div className="font-medium text-gray-900">{review.source}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <ThumbsUp className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Beğeni</div>
              <div className="font-medium text-gray-900">{review.likes}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Tarih</div>
              <div className="font-medium text-gray-900">{review.date}</div>
            </div>
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

export default ViewReviewModal;