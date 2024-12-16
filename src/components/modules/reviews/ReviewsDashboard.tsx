import React, { useState } from 'react';
import { MessageSquare, Plus } from 'lucide-react';
import ReviewsList from './ReviewsList';
import AddReviewModal from './modals/AddReviewModal';

const reviews = [
  {
    id: 1,
    customerName: 'Ahmet Yılmaz',
    rating: 5,
    comment: 'Ürün kalitesi ve hizmet mükemmeldi. Teşekkür ederim.',
    product: 'XYZ-100 Endüstriyel Pompa',
    date: '2024-03-15',
    status: 'Onaylandı',
    likes: 24,
    source: 'Website'
  },
  {
    id: 2,
    customerName: 'Mehmet Demir',
    rating: 4,
    comment: 'Ürün beklentilerimi karşıladı, teslimat biraz gecikmeli oldu.',
    product: 'ABC-200 Filtre Sistemi',
    date: '2024-03-14',
    status: 'Onaylandı',
    likes: 12,
    source: 'Mobile App'
  },
  {
    id: 3,
    customerName: 'Ayşe Kaya',
    rating: 5,
    comment: 'Teknik destek ekibi çok yardımcı oldu. Teşekkürler.',
    product: 'DEF-300 Kontrol Ünitesi',
    date: '2024-03-13',
    status: 'Onaylandı',
    likes: 18,
    source: 'Website'
  }
];

function ReviewsDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="gradient-bg rounded-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-white mb-2">Müşteri Yorumları</h1>
              <p className="text-blue-100/80">Müşteri geri bildirimlerini yönetin</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Yeni Yorum Ekle
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Toplam Yorum</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">256</div>
                  <div className="text-white/60 text-xs">Son 30 gün: +24</div>
                </div>
                <div className="stat-icon">
                  <MessageSquare className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Ortalama Puan</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">4.8</div>
                  <div className="text-white/60 text-xs">5 üzerinden</div>
                </div>
                <div className="stat-icon">
                  <MessageSquare className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Onaylı Yorum</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">230</div>
                  <div className="text-white/60 text-xs">%90 onay oranı</div>
                </div>
                <div className="stat-icon">
                  <MessageSquare className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Toplam Beğeni</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">1.2K</div>
                  <div className="text-white/60 text-xs">Yorum başına: 5</div>
                </div>
                <div className="stat-icon">
                  <MessageSquare className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ReviewsList reviews={reviews} />
        </div>

        <AddReviewModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default ReviewsDashboard;