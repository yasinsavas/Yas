import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Modal from './shared/Modal';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  certificateName?: string;
}

function DeleteModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Silme İşlemi",
  message,
  certificateName 
}: DeleteModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <AlertTriangle className="w-6 h-6 text-red-600" />
        </div>
        <h4 className="text-lg font-medium text-gray-900 mb-2">
          {message || "Bu öğeyi silmek istediğinize emin misiniz?"}
        </h4>
        {certificateName && (
          <p className="text-gray-500 mb-6">
            <span className="font-medium text-gray-900">{certificateName}</span> kalıcı olarak silinecektir.
            Bu işlem geri alınamaz.
          </p>
        )}
        <div className="flex gap-3 w-full">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            İptal
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Sil
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;