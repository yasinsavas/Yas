import React from 'react';
import Modal from '../../../modals/shared/Modal';
import FAQForm, { FAQFormData } from './FAQForm';

interface EditFAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  faq: FAQFormData;
}

function EditFAQModal({ isOpen, onClose, faq }: EditFAQModalProps) {
  const handleSubmit = async (data: FAQFormData) => {
    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Güncellenen soru:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Soru Düzenle"
    >
      <FAQForm
        initialData={faq}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}

export default EditFAQModal;