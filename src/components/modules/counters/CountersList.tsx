import React, { useState } from 'react';
import { Eye, Edit2, Trash2, BarChart2, Users, Clock } from 'lucide-react';
import DeleteModal from '../../modals/DeleteModal';
import EditCounterModal from './modals/EditCounterModal';
import ViewCounterModal from './modals/ViewCounterModal';

interface Counter {
  name: string;
  value: string;
  change: string;
  period: string;
  type: string;
}

interface CountersListProps {
  counters: Counter[];
}

const counterIcons = {
  visitors: Users,
  pageviews: BarChart2,
  duration: Clock
};

function CountersList({ counters }: CountersListProps) {
  const [selectedCounter, setSelectedCounter] = useState<Counter | null>(null);
  const [modalState, setModalState] = useState({
    view: false,
    edit: false,
    delete: false
  });

  const handleAction = (type: 'view' | 'edit' | 'delete', counter: Counter) => {
    setSelectedCounter(counter);
    setModalState({ ...modalState, [type]: true });
  };

  const handleCloseModals = () => {
    setModalState({ view: false, edit: false, delete: false });
    setSelectedCounter(null);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <th className="text-left p-4 text-sm font-medium">Sayaç Adı</th>
                <th className="text-left p-4 text-sm font-medium">Değer</th>
                <th className="text-left p-4 text-sm font-medium">Değişim</th>
                <th className="text-left p-4 text-sm font-medium">Periyot</th>
                <th className="text-left p-4 text-sm font-medium">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {counters.map((counter, index) => {
                const Icon = counterIcons[counter.type as keyof typeof counterIcons] || BarChart2;
                return (
                  <tr key={index} className="border-b border-gray-50 hover:bg-blue-50/30 transition-all">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <Icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-900">{counter.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-lg font-semibold text-gray-900">{counter.value}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                        counter.change.startsWith('+') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      }`}>
                        {counter.change}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{counter.period}</td>
                    <td className="p-4">
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleAction('view', counter)}
                          className="action-button-primary"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleAction('edit', counter)}
                          className="action-button-primary"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleAction('delete', counter)}
                          className="action-button-danger"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {selectedCounter && (
        <>
          <ViewCounterModal
            isOpen={modalState.view}
            onClose={handleCloseModals}
            counter={selectedCounter}
          />
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
    </>
  );
}

export default CountersList;