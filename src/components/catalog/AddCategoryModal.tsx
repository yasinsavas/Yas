import React from 'react';
import Modal from '../shared/ui/Modal';
import CategoryForm from './CategoryForm';

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddCategoryModal({ isOpen, onClose }: AddCategoryModalProps) {
  const handleSubmit = async (data: any) => {
    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Yeni kategori:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Yeni Kategori Ekle"
    >
      <CategoryForm onClose={onClose} onSubmit={handleSubmit} />
    </Modal>
  );
}

export default AddCategoryModal;