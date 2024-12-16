import React, { useState } from 'react';
import { Book, Plus } from 'lucide-react';
import CatalogList from './CatalogList';
import AddCatalogModal from './modals/AddCatalogModal';

const catalogs = [
  {
    id: 1,
    name: '2024 Ürün Kataloğu',
    category: 'Genel',
    language: 'Türkçe',
    pages: 48,
    size: '12.5 MB',
    downloads: 1250,
    lastUpdated: '2024-03-15',
    status: 'Aktif'
  },
  {
    id: 2,
    name: 'Industrial Solutions 2024',
    category: 'Endüstriyel',
    language: 'İngilizce',
    pages: 64,
    size: '15.8 MB',
    downloads: 850,
    lastUpdated: '2024-03-10',
    status: 'Aktif'
  },
  {
    id: 3,
    name: 'Technical Specifications',
    category: 'Teknik',
    language: 'İngilizce',
    pages: 32,
    size: '8.2 MB',
    downloads: 620,
    lastUpdated: '2024-03-05',
    status: 'Aktif'
  }
];

function CatalogDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="gradient-bg rounded-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-white mb-2">E-Katalog Yönetimi</h1>
              <p className="text-blue-100/80">Dijital ürün kataloglarını yönetin</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Yeni Katalog Ekle
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Toplam Katalog</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">12</div>
                  <div className="text-white/60 text-xs">3 dilde mevcut</div>
                </div>
                <div className="stat-icon">
                  <Book className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Aktif Katalog</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">8</div>
                  <div className="text-white/60 text-xs">%66 aktif</div>
                </div>
                <div className="stat-icon">
                  <Book className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Toplam İndirme</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">5.2K</div>
                  <div className="text-white/60 text-xs">Son 30 gün</div>
                </div>
                <div className="stat-icon">
                  <Book className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Ortalama Boyut</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">12MB</div>
                  <div className="text-white/60 text-xs">Katalog başına</div>
                </div>
                <div className="stat-icon">
                  <Book className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <CatalogList catalogs={catalogs} />
        </div>

        <AddCatalogModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default CatalogDashboard;