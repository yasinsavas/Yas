import React from 'react';
import Modal from '../../../modals/shared/Modal';
import CounterForm from './CounterForm';

interface AddCounterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddCounterModal({ isOpen, onClose }: AddCounterModalProps) {
  const handleSubmit = async (data: any) => {
    console.log('Yeni sayaç:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Yeni Sayaç Ekle"
    >
      <CounterForm
        onSubmit={handleSubmit}
        onClose={onClose}
      />
    </Modal>
  );
}

export default AddCounterModal;