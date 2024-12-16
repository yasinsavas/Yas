import React from 'react';
import Modal from '../shared/ui/Modal';
import CatalogForm from './CatalogForm';

interface AddCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddCatalogModal({ isOpen, onClose }: AddCatalogModalProps) {
  const handleSubmit = async (data: any) => {
    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Yeni katalog:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Yeni Katalog Ekle"
    >
      <CatalogForm onClose={onClose} onSubmit={handleSubmit} />
    </Modal>
  );
}

export default AddCatalogModal;