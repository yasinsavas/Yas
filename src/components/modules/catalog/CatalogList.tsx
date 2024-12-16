import React, { useState } from 'react';
import { Eye, Download, Trash2, Search, Globe, FileText } from 'lucide-react';
import ViewCatalogModal from './modals/ViewCatalogModal';
import DeleteModal from '../../modals/DeleteModal';

interface Catalog {
  id: number;
  name: string;
  category: string;
  language: string;
  pages: number;
  size: string;
  downloads: number;
  lastUpdated: string;
  status: string;
}

interface CatalogListProps {
  catalogs: Catalog[];
}

function CatalogList({ catalogs }: CatalogListProps) {
  const [selectedCatalog, setSelectedCatalog] = useState<Catalog | null>(null);
  const [modalState, setModalState] = useState({
    view: false,
    delete: false
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAction = (type: 'view' | 'delete', catalog: Catalog) => {
    setSelectedCatalog(catalog);
    setModalState({ ...modalState, [type]: true });
  };

  const handleCloseModals = () => {
    setModalState({ view: false, delete: false });
    setSelectedCatalog(null);
  };

  const handleDownload = (catalog: Catalog) => {
    console.log('Downloading catalog:', catalog.name);
  };

  const filteredCatalogs = catalogs.filter(catalog => 
    catalog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    catalog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Katalog adı veya kategori ara..."
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
                <th className="text-left p-4 text-sm font-medium">Katalog Adı</th>
                <th className="text-left p-4 text-sm font-medium">Kategori</th>
                <th className="text-left p-4 text-sm font-medium">Dil</th>
                <th className="text-left p-4 text-sm font-medium">Sayfa</th>
                <th className="text-left p-4 text-sm font-medium">Boyut</th>
                <th className="text-left p-4 text-sm font-medium">İndirme</th>
                <th className="text-left p-4 text-sm font-medium">Son Güncelleme</th>
                <th className="text-left p-4 text-sm font-medium">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredCatalogs.map((catalog) => (
                <tr key={catalog.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition-all">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{catalog.name}</div>
                        <div className="text-sm text-gray-500">{catalog.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {catalog.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{catalog.language}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{catalog.pages}</td>
                  <td className="p-4 text-gray-600">{catalog.size}</td>
                  <td className="p-4 text-gray-600">{catalog.downloads.toLocaleString()}</td>
                  <td className="p-4 text-gray-600">{catalog.lastUpdated}</td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleAction('view', catalog)}
                        className="action-button-primary"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDownload(catalog)}
                        className="action-button-primary"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction('delete', catalog)}
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

      {selectedCatalog && (
        <>
          <ViewCatalogModal
            isOpen={modalState.view}
            onClose={handleCloseModals}
            catalog={selectedCatalog}
          />
          <DeleteModal
            isOpen={modalState.delete}
            onClose={handleCloseModals}
            onConfirm={handleCloseModals}
            title="Katalog Silme"
            message={`"${selectedCatalog.name}" kataloğunu silmek istediğinize emin misiniz?`}
          />
        </>
      )}
    </>
  );
}

export default CatalogList;