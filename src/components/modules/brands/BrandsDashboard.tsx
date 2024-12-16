import React, { useState } from 'react';
import { Image, Plus } from 'lucide-react';
import BrandsList from './BrandsList';
import AddBrandModal from './modals/AddBrandModal';

const brands = [
  {
    id: 1,
    name: 'Acme Industries',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop',
    category: 'Partner',
    country: 'USA',
    website: 'www.acme.com',
    status: 'Aktif',
    lastUpdated: '2024-03-15'
  },
  {
    id: 2,
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
    category: 'Tedarikçi',
    country: 'Almanya',
    website: 'www.techcorp.de',
    status: 'Aktif',
    lastUpdated: '2024-03-14'
  },
  {
    id: 3,
    name: 'Global Solutions',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop',
    category: 'Müşteri',
    country: 'İngiltere',
    website: 'www.globalsolutions.co.uk',
    status: 'Aktif',
    lastUpdated: '2024-03-13'
  }
];

function BrandsDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="gradient-bg rounded-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-white mb-2">Marka Yönetimi</h1>
              <p className="text-blue-100/80">Marka ve logoları yönetin</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Yeni Marka Ekle
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Toplam Marka</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">48</div>
                  <div className="text-white/60 text-xs">12 ülkeden</div>
                </div>
                <div className="stat-icon">
                  <Image className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Aktif Marka</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">42</div>
                  <div className="text-white/60 text-xs">%87.5 aktif</div>
                </div>
                <div className="stat-icon">
                  <Image className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Partner Marka</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">15</div>
                  <div className="text-white/60 text-xs">%31.25 oran</div>
                </div>
                <div className="stat-icon">
                  <Image className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Logo Kullanımı</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">45</div>
                  <div className="text-white/60 text-xs">%93.75 tamamlandı</div>
                </div>
                <div className="stat-icon">
                  <Image className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <BrandsList brands={brands} />
        </div>

        <AddBrandModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default BrandsDashboard;