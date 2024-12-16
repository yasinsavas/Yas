import React from 'react';
import Modal from '../../../modals/shared/Modal';
import BrandForm, { BrandFormData } from './BrandForm';

interface EditBrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: BrandFormData;
}

function EditBrandModal({ isOpen, onClose, brand }: EditBrandModalProps) {
  const handleSubmit = async (data: BrandFormData) => {
    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Güncellenen marka:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Marka Düzenle"
    >
      <BrandForm
        initialData={brand}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}

export default EditBrandModal;