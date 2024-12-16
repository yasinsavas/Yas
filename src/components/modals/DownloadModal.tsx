import React from 'react';
import { Download, FileText, File } from 'lucide-react';
import Modal from './Modal';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateName: string;
}

function DownloadModal({ isOpen, onClose, certificateName }: DownloadModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sertifika İndir">
      <div className="space-y-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">{certificateName}</h4>
          <p className="text-gray-500">Sertifikayı hangi formatta indirmek istersiniz?</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all group">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-blue-50 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                <File className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">PDF</span>
              <span className="text-xs text-gray-500">2.5 MB</span>
            </div>
          </button>

          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all group">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-green-50 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                <File className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">PNG</span>
              <span className="text-xs text-gray-500">1.8 MB</span>
            </div>
          </button>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            İptal
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            İndir
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DownloadModal;