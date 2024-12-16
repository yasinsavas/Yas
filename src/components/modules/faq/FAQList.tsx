import React, { useState } from 'react';
import { Eye, Edit2, Trash2, Search } from 'lucide-react';
import ViewFAQModal from './modals/ViewFAQModal';
import EditFAQModal from './modals/EditFAQModal';
import DeleteModal from '../../modals/DeleteModal';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  status: string;
  views: number;
  lastUpdated: string;
}

interface FAQListProps {
  faqs: FAQ[];
}

function FAQList({ faqs }: FAQListProps) {
  const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);
  const [modalState, setModalState] = useState({
    view: false,
    edit: false,
    delete: false
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAction = (type: 'view' | 'edit' | 'delete', faq: FAQ) => {
    setSelectedFAQ(faq);
    setModalState({ ...modalState, [type]: true });
  };

  const handleCloseModals = () => {
    setModalState({ view: false, edit: false, delete: false });
    setSelectedFAQ(null);
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Soru veya kategori ara..."
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
                <th className="text-left p-4 text-sm font-medium">Soru</th>
                <th className="text-left p-4 text-sm font-medium">Kategori</th>
                <th className="text-left p-4 text-sm font-medium">Durum</th>
                <th className="text-left p-4 text-sm font-medium">Görüntülenme</th>
                <th className="text-left p-4 text-sm font-medium">Son Güncelleme</th>
                <th className="text-left p-4 text-sm font-medium">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredFAQs.map((faq) => (
                <tr key={faq.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition-all">
                  <td className="p-4">
                    <div className="font-medium text-gray-900 max-w-md truncate">
                      {faq.question}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {faq.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      {faq.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{faq.views.toLocaleString()}</td>
                  <td className="p-4 text-gray-600">{faq.lastUpdated}</td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleAction('view', faq)}
                        className="action-button-primary"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction('edit', faq)}
                        className="action-button-primary"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAction('delete', faq)}
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

      {selectedFAQ && (
        <>
          <ViewFAQModal
            isOpen={modalState.view}
            onClose={handleCloseModals}
            faq={selectedFAQ}
          />
          <EditFAQModal
            isOpen={modalState.edit}
            onClose={handleCloseModals}
            faq={selectedFAQ}
          />
          <DeleteModal
            isOpen={modalState.delete}
            onClose={handleCloseModals}
            onConfirm={handleCloseModals}
            title="Soru Silme"
            message={`"${selectedFAQ.question}" sorusunu silmek istediğinize emin misiniz?`}
          />
        </>
      )}
    </>
  );
}

export default FAQList;