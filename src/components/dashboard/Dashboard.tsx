import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './Search';
import CertificateList from './CertificateList';
import CertificateGrid from './CertificateGrid';

const certificates = [
  {
    name: 'ISO 9001:2015',
    category: 'Kalite',
    provider: 'Bureau Veritas',
    startDate: '15.06.2023',
    endDate: '14.06.2026',
    status: 'Geçerli',
  },
  {
    name: 'ISO 14001:2015',
    category: 'Çevre',
    provider: 'TÜV SÜD',
    startDate: '20.08.2023',
    endDate: '19.08.2026',
    status: 'Geçerli',
  },
  {
    name: 'OHSAS 18001',
    category: 'İş Güvenliği',
    provider: 'SGS',
    startDate: '10.07.2023',
    endDate: '09.07.2026',
    status: 'Geçerli',
  },
  {
    name: 'ISO 27001',
    category: 'Bilgi Güvenliği',
    provider: 'Bureau Veritas',
    startDate: '05.09.2023',
    endDate: '04.09.2026',
    status: 'Geçerli',
  }
];

function Dashboard() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        <Header />
        <div className="mt-8">
          <SearchBar viewMode={viewMode} onViewModeChange={setViewMode} />
          {viewMode === 'list' ? (
            <CertificateList certificates={certificates} />
          ) : (
            <CertificateGrid certificates={certificates} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;