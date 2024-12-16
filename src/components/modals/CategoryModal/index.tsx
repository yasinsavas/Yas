import React from 'react';
import Modal from '../shared/Modal';
import CategoryForm, { CategoryFormData } from './CategoryForm';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CategoryModal({ isOpen, onClose }: CategoryModalProps) {
  const handleSubmit = async (data: CategoryFormData) => {
    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Kategori verisi:', data);
    // Normalde burada API çağrısı yapılır
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

export default CategoryModal;