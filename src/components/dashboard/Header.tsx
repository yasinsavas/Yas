import React from 'react';
import StatCard from './StatCard';

function Header() {
  return (
    <div className="gradient-bg rounded-2xl p-8 relative overflow-hidden">
      {/* Header Content */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white mb-2">Sertifika Yönetimi</h1>
        <p className="text-blue-100/80">Kalite ve standart sertifikalarını yönetin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Toplam Sertifika"
          value="12"
          subtitle="+20% artış"
          type="total"
        />
        <StatCard
          title="Geçerli Sertifika"
          value="10"
          subtitle="+15% artış"
          type="valid"
        />
        <StatCard
          title="Yakında Sona Erecek"
          value="2"
          subtitle="30 gün içinde"
          type="expiring"
        />
        <StatCard
          title="Son Güncelleme"
          value="15.03.2024"
          subtitle="Son sertifika tarihi"
          type="updated"
        />
      </div>
    </div>
  );
}

export default Header;