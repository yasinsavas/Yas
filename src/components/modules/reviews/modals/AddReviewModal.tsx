import React from 'react';
import Modal from '../../../modals/shared/Modal';
import ReviewForm, { ReviewFormData } from './ReviewForm';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddReviewModal({ isOpen, onClose }: AddReviewModalProps) {
  const handleSubmit = async (data: ReviewFormData) => {
    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Yeni yorum:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Yeni Yorum Ekle"
    >
      <ReviewForm onClose={onClose} onSubmit={handleSubmit} />
    </Modal>
  );
}

export default AddReviewModal;