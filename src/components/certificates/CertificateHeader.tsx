import React from 'react';
import { Award, FileCheck, AlertTriangle, Calendar } from 'lucide-react';
import { PageHeader } from '../shared/ui/PageHeader';

const stats = [
  {
    title: 'Toplam Sertifika',
    value: '12',
    subtitle: '+20% artış',
    icon: Award
  },
  {
    title: 'Geçerli Sertifika',
    value: '10',
    subtitle: '+15% artış',
    icon: FileCheck
  },
  {
    title: 'Yakında Sona Erecek',
    value: '2',
    subtitle: '30 gün içinde',
    icon: AlertTriangle
  },
  {
    title: 'Son Güncelleme',
    value: '15.03.2024',
    subtitle: 'Son sertifika tarihi',
    icon: Calendar
  }
];

export function CertificateHeader() {
  return (
    <PageHeader
      title="Sertifika Yönetimi"
      subtitle="Kalite ve standart sertifikalarını yönetin"
      stats={stats}
    />
  );
}