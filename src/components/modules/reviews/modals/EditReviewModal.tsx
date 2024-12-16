import React from 'react';
import Modal from '../../../modals/shared/Modal';
import ReviewForm, { ReviewFormData } from './ReviewForm';

interface EditReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: ReviewFormData;
}

function EditReviewModal({ isOpen, onClose, review }: EditReviewModalProps) {
  const handleSubmit = async (data: ReviewFormData) => {
    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Güncellenen yorum:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Yorum Düzenle"
    >
      <ReviewForm
        initialData={review}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}

export default EditReviewModal;