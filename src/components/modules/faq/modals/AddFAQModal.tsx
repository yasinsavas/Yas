import React from 'react';
import Modal from '../../../modals/shared/Modal';
import FAQForm, { FAQFormData } from './FAQForm';

interface AddFAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddFAQModal({ isOpen, onClose }: AddFAQModalProps) {
  const handleSubmit = async (data: FAQFormData) => {
    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Yeni soru:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Yeni Soru Ekle"
    >
      <FAQForm onClose={onClose} onSubmit={handleSubmit} />
    </Modal>
  );
}

export default AddFAQModal;