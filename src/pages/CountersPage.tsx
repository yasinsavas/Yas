import React, { useState } from 'react';
import { BarChart2, TrendingUp, Clock, Activity } from 'lucide-react';
import { PageHeader } from '../components/shared/ui/PageHeader';
import { CounterList } from '../components/counters/CounterList';
import { CounterGrid } from '../components/counters/CounterGrid';
import { CounterSearch } from '../components/counters/CounterSearch';
import AddCounterModal from '../components/counters/AddCounterModal';
import EditCounterModal from '../components/counters/EditCounterModal';
import DeleteModal from '../components/shared/ui/DeleteModal';

const stats = [
  {
    title: "Toplam Sayaç",
    value: "48",
    subtitle: "+12% artış",
    icon: BarChart2
  },
  {
    title: "Aktif Sayaç",
    value: "42",
    subtitle: "+8% artış",
    icon: Activity
  },
  {
    title: "Toplam Görüntülenme",
    value: "125K",
    subtitle: "+15% artış",
    icon: TrendingUp
  },
  {
    title: "Ortalama Süre",
    value: "2.5s",
    subtitle: "-2% azalış",
    icon: Clock
  }
];

const counters = [
  {
    id: 1,
    name: 'Toplam Ziyaretçi',
    value: '125,430',
    change: '+12%',
    period: 'Son 30 gün',
    type: 'visitors',
    description: 'Web sitesi toplam ziyaretçi sayısı',
    lastUpdated: '15.03.2024'
  },
  {
    id: 2,
    name: 'Sayfa Görüntüleme',
    value: '543,921',
    change: '+8%',
    period: 'Son 30 gün',
    type: 'pageviews',
    description: 'Toplam sayfa görüntülenme sayısı',
    lastUpdated: '15.03.2024'
  },
  {
    id: 3,
    name: 'Ortalama Süre',
    value: '2m 45s',
    change: '-5%',
    period: 'Son 30 gün',
    type: 'duration',
    description: 'Ortalama oturum süresi',
    lastUpdated: '15.03.2024'
  }
];

function CountersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [modalState, setModalState] = useState({
    add: false,
    edit: false,
    delete: false
  });
  const [selectedCounter, setSelectedCounter] = useState<any>(null);

  const handleCloseModals = () => {
    setModalState({
      add: false,
      edit: false,
      delete: false
    });
    setSelectedCounter(null);
  };

  const handleAction = (type: 'edit' | 'delete', counter: any) => {
    setSelectedCounter(counter);
    setModalState(prev => ({ ...prev, [type]: true }));
  };

  const filteredCounters = counters.filter(counter => 
    counter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto space-y-8">
        <PageHeader
          title="Sayaç Yönetimi"
          subtitle="İstatistik ve sayaç yönetimi"
          stats={stats}
        />
        
        <CounterSearch
          value={searchTerm}
          onChange={setSearchTerm}
          onAdd={() => setModalState(prev => ({ ...prev, add: true }))}
          view={viewMode}
          onViewChange={setViewMode}
        />

        {viewMode === 'list' ? (
          <CounterList
            counters={filteredCounters}
            onEdit={(counter) => handleAction('edit', counter)}
            onDelete={(counter) => handleAction('delete', counter)}
          />
        ) : (
          <CounterGrid
            counters={filteredCounters}
            onEdit={(counter) => handleAction('edit', counter)}
            onDelete={(counter) => handleAction('delete', counter)}
          />
        )}

        <AddCounterModal
          isOpen={modalState.add}
          onClose={handleCloseModals}
        />

        {selectedCounter && (
          <>
            <EditCounterModal
              isOpen={modalState.edit}
              onClose={handleCloseModals}
              counter={selectedCounter}
            />
            <DeleteModal
              isOpen={modalState.delete}
              onClose={handleCloseModals}
              onConfirm={handleCloseModals}
              title="Sayaç Silme"
              message={`"${selectedCounter.name}" sayacını silmek istediğinize emin misiniz?`}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CountersPage;