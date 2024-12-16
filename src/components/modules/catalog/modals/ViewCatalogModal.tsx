import React from 'react';
import { Book, Globe, FileText, Download, Calendar } from 'lucide-react';
import Modal from '../../../modals/shared/Modal';

interface ViewCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  catalog: {
    name: string;
    category: string;
    language: string;
    pages: number;
    size: string;
    downloads: number;
    lastUpdated: string;
  };
}

function ViewCatalogModal({ isOpen, onClose, catalog }: ViewCatalogModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Katalog Detayları"
    >
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Book className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-blue-900">{catalog.name}</h4>
            <p className="text-sm text-blue-700">{catalog.category}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Globe className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Dil</div>
              <div className="font-medium text-gray-900">{catalog.language}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <FileText className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Sayfa Sayısı</div>
              <div className="font-medium text-gray-900">{catalog.pages}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Download className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">İndirme Sayısı</div>
              <div className="font-medium text-gray-900">{catalog.downloads.toLocaleString()}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Son Güncelleme</div>
              <div className="font-medium text-gray-900">{catalog.lastUpdated}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Kapat
          </button>
          <button
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

export default ViewCatalogModal;