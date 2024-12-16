import React, { useState } from 'react';
import { HelpCircle, Plus } from 'lucide-react';
import FAQList from './FAQList';
import AddFAQModal from './modals/AddFAQModal';

const faqs = [
  {
    id: 1,
    question: 'Ürünleriniz için garanti süresi ne kadardır?',
    answer: 'Tüm ürünlerimiz 2 yıl garantilidir. Garanti kapsamı ve şartları için garanti belgesini inceleyebilirsiniz.',
    category: 'Garanti',
    status: 'Aktif',
    views: 1250,
    lastUpdated: '2024-03-15'
  },
  {
    id: 2,
    question: 'Kargo teslimat süresi ne kadardır?',
    answer: 'Siparişleriniz ortalama 2-3 iş günü içerisinde teslim edilmektedir. Büyükşehirlerde bu süre 1-2 iş gününe kadar düşebilmektedir.',
    category: 'Kargo',
    status: 'Aktif',
    views: 2340,
    lastUpdated: '2024-03-14'
  },
  {
    id: 3,
    question: 'İade ve değişim koşulları nelerdir?',
    answer: 'Ürünlerimizde 14 gün içerisinde iade ve değişim hakkınız bulunmaktadır. Ürünün kullanılmamış ve orijinal ambalajında olması gerekmektedir.',
    category: 'İade',
    status: 'Aktif',
    views: 3120,
    lastUpdated: '2024-03-13'
  }
];

function FAQDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="gradient-bg rounded-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-white mb-2">S.S.S. Yönetimi</h1>
              <p className="text-blue-100/80">Sık sorulan soruları yönetin</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Yeni Soru Ekle
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Toplam Soru</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">24</div>
                  <div className="text-white/60 text-xs">+3 yeni soru</div>
                </div>
                <div className="stat-icon">
                  <HelpCircle className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Aktif Soru</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">20</div>
                  <div className="text-white/60 text-xs">%83 aktif</div>
                </div>
                <div className="stat-icon">
                  <HelpCircle className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Toplam Görüntülenme</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">12.5K</div>
                  <div className="text-white/60 text-xs">Son 30 gün</div>
                </div>
                <div className="stat-icon">
                  <HelpCircle className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>

            <div className="stat-card rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white/70 text-sm mb-4">Ortalama Okunma</div>
                  <div className="text-white text-3xl font-semibold mb-1.5">520</div>
                  <div className="text-white/60 text-xs">Soru başına</div>
                </div>
                <div className="stat-icon">
                  <HelpCircle className="w-6 h-6 text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <FAQList faqs={faqs} />
        </div>

        <AddFAQModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default FAQDashboard;