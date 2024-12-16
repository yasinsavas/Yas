import React from 'react';
import Modal from '../shared/Modal';
import CertificateForm from './CertificateForm';

interface AddCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddCertificateModal({ isOpen, onClose }: AddCertificateModalProps) {
  const handleSubmit = async (data: any) => {
    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Yeni sertifika:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Yeni Sertifika Ekle"
    >
      <CertificateForm onClose={onClose} onSubmit={handleSubmit} />
    </Modal>
  );
}

export default AddCertificateModal;