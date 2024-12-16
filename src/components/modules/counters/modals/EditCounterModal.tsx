import React from 'react';
import Modal from '../../../modals/shared/Modal';
import CounterForm from './CounterForm';

interface EditCounterModalProps {
  isOpen: boolean;
  onClose: () => void;
  counter: any;
}

function EditCounterModal({ isOpen, onClose, counter }: EditCounterModalProps) {
  const handleSubmit = async (data: any) => {
    console.log('Güncellenen sayaç:', data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sayaç Düzenle"
    >
      <CounterForm
        initialData={counter}
        onSubmit={handleSubmit}
        onClose={onClose}
      />
    </Modal>
  );
}

export default EditCounterModal;