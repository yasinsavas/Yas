import React from 'react';
import { Image, Globe, Building, Calendar, Link } from 'lucide-react';
import Modal from '../../../modals/shared/Modal';

interface ViewBrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: {
    name: string;
    logo: string;
    category: string;
    country: string;
    website: string;
    status: string;
    lastUpdated: string;
  };
}

function ViewBrandModal({ isOpen, onClose, brand }: ViewBrandModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Marka Detayları"
    >
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <img
            src={brand.logo}
            alt={brand.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h4 className="font-medium text-blue-900">{brand.name}</h4>
            <p className="text-sm text-blue-700">{brand.category}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Building className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Kategori</div>
              <div className="font-medium text-gray-900">{brand.category}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Globe className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Ülke</div>
              <div className="font-medium text-gray-900">{brand.country}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Link className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Website</div>
              <a
                href={`https://${brand.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline"
              >
                {brand.website}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Son Güncelleme</div>
              <div className="font-medium text-gray-900">{brand.lastUpdated}</div>
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

export default ViewBrandModal;