import React, { useState } from 'react';
import { Eye, Edit2, Trash2, Search, Globe, Building } from 'lucide-react';
import ViewBrandModal from './modals/ViewBrandModal';
import EditBrandModal from './modals/EditBrandModal';
import DeleteModal from '../../modals/DeleteModal';

interface Brand {
  id: number;
  name: string;
  logo: string;
  category: string;
  country: string;
  website: string;
  status: string;
  lastUpdated: string;
}

interface BrandsListProps {
  brands: Brand[];
}

function BrandsList({ brands }: BrandsListProps) {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [modalState, setModalState] = useState({
    view: false,
    edit: false,
    delete: false
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAction = (type: 'view' | 'edit' | 'delete', brand: Brand) => {
    setSelectedBrand(brand);
    setModalState({ ...modalState, [type]: true });
  };

  const handleCloseModals = () => {
    setModalState({ view: false, edit: false, delete: false });
    setSelectedBrand(null);
  };

  const filteredBrands = brands.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Marka adı veya kategori ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full md:w-96 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <th className="text-left p-4 text-sm font-medium">Marka</th>
                <th className="text-left p-4 text-sm font-medium">Kategori</th>
                <th className="text-left p-4 text-sm font-medium">Ülke</th>
                <th className="text-left p-4 text-sm font-medium">Website</th>
                <th className="text-left p-4 text-sm font-medium">Durum</th>
                <th className="text-left p-4 text-sm font-medium">Son Güncelleme</th>
                <th className="text-left p-4 text-sm font-medium">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredBrands.map((brand) => (
                <tr key={brand.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition-all">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{brand.name}</div>
                        <div className="text-sm text-gray-500">{brand.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {brand.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{brand.country}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <a
                      href={`https://${brand.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {brand.website}
                    </a>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      {brand.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{brand.lastUpdated}</td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleAction('view', brand)}
                        className="action-button-primary"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction('edit', brand)}
                        className="action-button-primary"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction('delete', brand)}
                        className="action-button-danger"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedBrand && (
        <>
          <ViewBrandModal
            isOpen={modalState.view}
            onClose={handleCloseModals}
            brand={selectedBrand}
          />
          <EditBrandModal
            isOpen={modalState.edit}
            onClose={handleCloseModals}
            brand={selectedBrand}
          />
          <DeleteModal
            isOpen={modalState.delete}
            onClose={handleCloseModals}
            onConfirm={handleCloseModals}
            title="Marka Silme"
            message={`"${selectedBrand.name}" markasını silmek istediğinize emin misiniz?`}
          />
        </>
      )}
    </>
  );
}

export default BrandsList;