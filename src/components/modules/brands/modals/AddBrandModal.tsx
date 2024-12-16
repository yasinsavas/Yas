import React from 'react';
import Modal from '../../../modals/shared/Modal';
import BrandForm, { BrandFormData } from './BrandForm';

interface AddBrandModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddBrandModal({ isOpen, onClose }: AddBrandModalProps) {
  const handleSubmit = async (data: BrandFormData) => {
    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Yeni marka:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Yeni Marka Ekle"
    >
      <BrandForm onClose={onClose} onSubmit={handleSubmit} />
    </Modal>
  );
}

export default AddBrandModal;