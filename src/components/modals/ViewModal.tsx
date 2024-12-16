import React from 'react';
import { FileText, Calendar, Building, Tag } from 'lucide-react';
import Modal from './Modal';

interface Certificate {
  name: string;
  category: string;
  provider: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate;
}

function ViewModal({ isOpen, onClose, certificate }: ViewModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sertifika Detayları">
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-blue-900">{certificate.name}</h4>
            <p className="text-sm text-blue-700">{certificate.category}</p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Building className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Veren Kurum</div>
              <div className="font-medium text-gray-900">{certificate.provider}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Tag className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Kategori</div>
              <div className="font-medium text-gray-900">{certificate.category}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Calendar className="w-5 h-5 text-green-500" />
              <div>
                <div className="text-sm text-green-600">Başlangıç Tarihi</div>
                <div className="font-medium text-green-700">{certificate.startDate}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
              <Calendar className="w-5 h-5 text-red-500" />
              <div>
                <div className="text-sm text-red-600">Bitiş Tarihi</div>
                <div className="font-medium text-red-700">{certificate.endDate}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ViewModal;