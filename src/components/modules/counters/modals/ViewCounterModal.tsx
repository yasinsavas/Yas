import React from 'react';
import { BarChart2, Calendar, TrendingUp, Clock } from 'lucide-react';
import Modal from '../../../modals/shared/Modal';

interface ViewCounterModalProps {
  isOpen: boolean;
  onClose: () => void;
  counter: any;
}

function ViewCounterModal({ isOpen, onClose, counter }: ViewCounterModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sayaç Detayları"
    >
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BarChart2 className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-blue-900">{counter.name}</h4>
            <p className="text-sm text-blue-700">{counter.type}</p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <TrendingUp className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Mevcut Değer</div>
              <div className="font-medium text-gray-900">{counter.value}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Periyot</div>
              <div className="font-medium text-gray-900">{counter.period}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Clock className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm text-gray-500">Son Güncelleme</div>
              <div className="font-medium text-gray-900">15 dakika önce</div>
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

export default ViewCounterModal;