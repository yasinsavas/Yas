import React, { useState } from 'react';
import { Eye, Download, Trash2, Shield, Award, Briefcase, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ViewModal from '../../modals/ViewModal';
import DownloadModal from '../../modals/DownloadModal';
import DeleteModal from '../../modals/DeleteModal';

interface Certificate {
  name: string;
  category: string;
  provider: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface CertificateGridProps {
  certificates: Certificate[];
}

const categoryIcons = {
  'Kalite': Shield,
  'Çevre': Award,
  'İş Güvenliği': Briefcase,
  'Bilgi Güvenliği': FileCheck,
};

function CertificateGrid({ certificates }: CertificateGridProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [modalState, setModalState] = useState({
    view: false,
    download: false,
    delete: false,
  });

  const handleAction = (type: 'view' | 'download' | 'delete', certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setModalState(prev => ({ ...prev, [type]: true }));
  };

  const handleCloseModals = () => {
    setModalState({ view: false, download: false, delete: false });
    setSelectedCertificate(null);
  };

  const handleDelete = () => {
    if (selectedCertificate) {
      console.log('Deleting certificate:', selectedCertificate.name);
      handleCloseModals();
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certificates.map((cert, index) => {
          const CategoryIcon = categoryIcons[cert.category as keyof typeof categoryIcons] || Award;
          
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 border-b border-gray-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <CategoryIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-500">{cert.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">{cert.provider}</div>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium text-green-700">{cert.status}</span>
                  </span>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50/50">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Başlangıç</div>
                    <div className="bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
                      <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                      {cert.startDate}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Bitiş</div>
                    <div className="bg-red-50 text-red-700 px-2.5 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {cert.endDate}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white border-t border-gray-50">
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => handleAction('view', cert)}
                    className="flex items-center justify-center gap-1.5 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group"
                  >
                    <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs">Görüntüle</span>
                  </button>
                  <button 
                    onClick={() => handleAction('download', cert)}
                    className="flex items-center justify-center gap-1.5 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group"
                  >
                    <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs">İndir</span>
                  </button>
                  <button 
                    onClick={() => handleAction('delete', cert)}
                    className="flex items-center justify-center gap-1.5 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
                  >
                    <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs">Sil</span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedCertificate && (
        <>
          <ViewModal
            isOpen={modalState.view}
            onClose={handleCloseModals}
            certificate={selectedCertificate}
          />
          <DownloadModal
            isOpen={modalState.download}
            onClose={handleCloseModals}
            certificateName={selectedCertificate.name}
          />
          <DeleteModal
            isOpen={modalState.delete}
            onClose={handleCloseModals}
            onConfirm={handleDelete}
            certificateName={selectedCertificate.name}
          />
        </>
      )}
    </>
  );
}

export default CertificateGrid;