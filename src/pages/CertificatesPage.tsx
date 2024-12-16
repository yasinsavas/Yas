import React, { useState } from 'react';
import { CertificateHeader } from '../components/certificates/CertificateHeader';
import { CertificateList } from '../components/certificates/CertificateList';
import { CertificateGrid } from '../components/certificates/CertificateGrid';
import { CertificateSearch } from '../components/certificates/CertificateSearch';
import AddCertificateModal from '../components/certificates/AddCertificateModal';
import EditCertificateModal from '../components/certificates/EditCertificateModal';
import AddCategoryModal from '../components/certificates/AddCategoryModal';
import ViewCertificateModal from '../components/certificates/ViewCertificateModal';
import DeleteModal from '../components/shared/ui/DeleteModal';

// Sample data with images
const certificates = [
  {
    id: 1,
    name: 'ISO 9001:2015',
    category: 'Kalite',
    provider: 'Bureau Veritas',
    startDate: '15.06.2023',
    endDate: '14.06.2026',
    status: 'Geçerli',
    rating: 5,
    description: 'Uluslararası kalite yönetim sistemi standardı sertifikası',
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    name: 'ISO 14001:2015',
    category: 'Çevre',
    provider: 'TÜV SÜD',
    startDate: '20.08.2023',
    endDate: '19.08.2026',
    status: 'Geçerli',
    rating: 4,
    description: 'Çevre yönetim sistemi standardı sertifikası',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    name: 'OHSAS 18001',
    category: 'İş Güvenliği',
    provider: 'SGS',
    startDate: '10.07.2023',
    endDate: '09.07.2026',
    status: 'Geçerli',
    rating: 5,
    description: 'İş sağlığı ve güvenliği yönetim sistemi standardı',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  }
];

function CertificatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [modalState, setModalState] = useState({
    addCertificate: false,
    addCategory: false,
    view: false,
    edit: false,
    delete: false
  });
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const handleCloseModals = () => {
    setModalState({
      addCertificate: false,
      addCategory: false,
      view: false,
      edit: false,
      delete: false
    });
    setSelectedCertificate(null);
  };

  const handleAction = (type: 'view' | 'edit' | 'delete', certificate: any) => {
    setSelectedCertificate(certificate);
    setModalState(prev => ({ ...prev, [type]: true }));
  };

  const filteredCertificates = certificates.filter(cert => 
    cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto space-y-8">
        <CertificateHeader />
        
        <CertificateSearch
          value={searchTerm}
          onChange={setSearchTerm}
          onAddCertificate={() => setModalState(prev => ({ ...prev, addCertificate: true }))}
          onAddCategory={() => setModalState(prev => ({ ...prev, addCategory: true }))}
          view={viewMode}
          onViewChange={setViewMode}
          onFilterChange={console.log}
        />

        {viewMode === 'list' ? (
          <CertificateList
            certificates={filteredCertificates}
            onView={(cert) => handleAction('view', cert)}
            onEdit={(cert) => handleAction('edit', cert)}
            onDelete={(cert) => handleAction('delete', cert)}
          />
        ) : (
          <CertificateGrid
            certificates={filteredCertificates}
            onView={(cert) => handleAction('view', cert)}
            onEdit={(cert) => handleAction('edit', cert)}
            onDelete={(cert) => handleAction('delete', cert)}
          />
        )}

        <AddCertificateModal
          isOpen={modalState.addCertificate}
          onClose={handleCloseModals}
        />

        <AddCategoryModal
          isOpen={modalState.addCategory}
          onClose={handleCloseModals}
        />

        {selectedCertificate && (
          <>
            <ViewCertificateModal
              isOpen={modalState.view}
              onClose={handleCloseModals}
              certificate={selectedCertificate}
            />
            <EditCertificateModal
              isOpen={modalState.edit}
              onClose={handleCloseModals}
              certificate={selectedCertificate}
            />
            <DeleteModal
              isOpen={modalState.delete}
              onClose={handleCloseModals}
              onConfirm={handleCloseModals}
              title="Sertifika Silme"
              message={`"${selectedCertificate.name}" sertifikasını silmek istediğinize emin misiniz?`}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CertificatesPage;