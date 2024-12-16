import React, { useState } from 'react';
import ViewModal from '../../modals/ViewModal';
import DownloadModal from '../../modals/DownloadModal';
import DeleteModal from '../../modals/DeleteModal';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

interface Certificate {
  name: string;
  category: string;
  provider: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface CertificateListProps {
  certificates: Certificate[];
}

function CertificateList({ certificates }: CertificateListProps) {
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
    console.log('Deleting certificate:', selectedCertificate?.name);
    handleCloseModals();
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <TableHeader />
            </thead>
            <tbody>
              {certificates.map((certificate, index) => (
                <TableRow
                  key={index}
                  certificate={certificate}
                  onAction={handleAction}
                />
              ))}
            </tbody>
          </table>
        </div>
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

export default CertificateList;