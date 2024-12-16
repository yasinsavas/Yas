import React from 'react';
import { Award, Users, TrendingUp, Clock } from 'lucide-react';
import { PageHeader } from '../components/shared/ui/PageHeader';
import { Card } from '../components/shared/ui/Card';

const stats = [
  {
    title: "Toplam Kullanıcı",
    value: "2,543",
    subtitle: "+12.5% artış",
    icon: Users
  },
  {
    title: "Aktif Sertifika",
    value: "152",
    subtitle: "+8.2% artış",
    icon: Award
  },
  {
    title: "Aylık Görüntülenme",
    value: "45.2K",
    subtitle: "+15.8% artış",
    icon: TrendingUp
  },
  {
    title: "Ortalama Süre",
    value: "2.5s",
    subtitle: "-2.3% azalış",
    icon: Clock
  }
];

function DashboardPage() {
  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto space-y-8">
        <PageHeader
          title="Hoş Geldiniz 👋"
          subtitle="Sistem durumunu ve istatistikleri görüntüleyin"
          stats={stats}
        />
      </div>
    </div>
  );
}

export default DashboardPage;