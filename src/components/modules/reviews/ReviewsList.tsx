import React, { useState } from 'react';
import { Eye, Edit2, Trash2, Search, Star, ThumbsUp, Globe } from 'lucide-react';
import ViewReviewModal from './modals/ViewReviewModal';
import EditReviewModal from './modals/EditReviewModal';
import DeleteModal from '../../modals/DeleteModal';

interface Review {
  id: number;
  customerName: string;
  rating: number;
  comment: string;
  product: string;
  date: string;
  status: string;
  likes: number;
  source: string;
}

interface ReviewsListProps {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [modalState, setModalState] = useState({
    view: false,
    edit: false,
    delete: false
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAction = (type: 'view' | 'edit' | 'delete', review: Review) => {
    setSelectedReview(review);
    setModalState({ ...modalState, [type]: true });
  };

  const handleCloseModals = () => {
    setModalState({ view: false, edit: false, delete: false });
    setSelectedReview(null);
  };

  const filteredReviews = reviews.filter(review => 
    review.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    review.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Müşteri adı veya ürün ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full md:w-96 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <th className="text-left p-4 text-sm font-medium">Müşteri</th>
                <th className="text-left p-4 text-sm font-medium">Ürün</th>
                <th className="text-left p-4 text-sm font-medium">Puan</th>
                <th className="text-left p-4 text-sm font-medium">Yorum</th>
                <th className="text-left p-4 text-sm font-medium">Kaynak</th>
                <th className="text-left p-4 text-sm font-medium">Beğeni</th>
                <th className="text-left p-4 text-sm font-medium">Tarih</th>
                <th className="text-left p-4 text-sm font-medium">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredReviews.map((review) => (
                <tr key={review.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition-all">
                  <td className="p-4">
                    <div className="font-medium text-gray-900">{review.customerName}</div>
                  </td>
                  <td className="p-4 text-gray-600 max-w-xs truncate">{review.product}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium text-gray-900">{review.rating}</span>
                    </div>
                  </td>
                  <td className="p-4 max-w-xs">
                    <div className="text-gray-600 truncate">{review.comment}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{review.source}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-600">{review.likes}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{review.date}</td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleAction('view', review)}
                        className="action-button-primary"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction('edit', review)}
                        className="action-button-primary"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction('delete', review)}
                        className="action-button-danger"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedReview && (
        <>
          <ViewReviewModal
            isOpen={modalState.view}
            onClose={handleCloseModals}
            review={selectedReview}
          />
          <EditReviewModal
            isOpen={modalState.edit}
            onClose={handleCloseModals}
            review={selectedReview}
          />
          <DeleteModal
            isOpen={modalState.delete}
            onClose={handleCloseModals}
            onConfirm={handleCloseModals}
            title="Yorum Silme"
            message={`${selectedReview.customerName} tarafından yapılan yorumu silmek istediğinize emin misiniz?`}
          />
        </>
      )}
    </>
  );
}

export default ReviewsList;