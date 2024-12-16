import React, { useState } from 'react';
import { BarChart2, Plus } from 'lucide-react';
import StatsGrid from '../../dashboard/Stats/StatsGrid';
import CountersList from './CountersList';
import AddCounterModal from './modals/AddCounterModal';

const counters = [
  {
    name: 'Toplam Ziyaretçi',
    value: '125,430',
    change: '+12%',
    period: 'Son 30 gün',
    type: 'visitors'
  },
  {
    name: 'Sayfa Görüntüleme',
    value: '543,921',
    change: '+8%',
    period: 'Son 30 gün',
    type: 'pageviews'
  },
  {
    name: 'Ortalama Süre',
    value: '2m 45s',
    change: '-5%',
    period: 'Son 30 gün',
    type: 'duration'
  }
];

function CountersDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="gradient-bg rounded-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-white mb-2">Sayaçlar</h1>
              <p className="text-blue-100/80">İstatistik ve sayaç yönetimi</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all"
            >
              <Plus className="w-4 h-4" />
              Yeni Sayaç Ekle
            </button>
          </div>
          <StatsGrid />
        </div>

        <div className="mt-8">
          <CountersList counters={counters} />
        </div>

        <AddCounterModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default CountersDashboard;