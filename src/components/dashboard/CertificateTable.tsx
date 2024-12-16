import React from 'react';
import { Eye, Download, Trash2, Award, Shield, Briefcase, FileCheck } from 'lucide-react';

interface Certificate {
  name: string;
  category: string;
  provider: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface CertificateTableProps {
  certificates: Certificate[];
}

const categoryIcons = {
  'Kalite': Shield,
  'Çevre': Award,
  'İş Güvenliği': Briefcase,
  'Bilgi Güvenliği': FileCheck,
};

function CertificateTable({ certificates }: CertificateTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-[#0f172a] text-white">
            <th className="text-left p-4 text-sm font-medium">Sertifika Adı</th>
            <th className="text-left p-4 text-sm font-medium">Kategori</th>
            <th className="text-left p-4 text-sm font-medium">Veren Kurum</th>
            <th className="text-left p-4 text-sm font-medium">Başlangıç Tarihi</th>
            <th className="text-left p-4 text-sm font-medium">Bitiş Tarihi</th>
            <th className="text-left p-4 text-sm font-medium">Durum</th>
            <th className="text-left p-4 text-sm font-medium">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((cert, index) => {
            const CategoryIcon = categoryIcons[cert.category as keyof typeof categoryIcons] || Award;
            return (
              <tr key={index} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors duration-150">
                <td className="p-4 text-sm font-medium text-gray-900">{cert.name}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CategoryIcon className="w-4 h-4 text-blue-600" />
                    {cert.category}
                  </div>
                </td>
                <td className="p-4 text-sm text-gray-600">{cert.provider}</td>
                <td className="p-4">
                  <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
                    {cert.startDate}
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-red-50 text-red-700 px-2.5 py-1 rounded-full text-xs font-medium">
                    {cert.endDate}
                  </span>
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-1.5 text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-medium text-green-700">{cert.status}</span>
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-1">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group">
                      <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group">
                      <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors group">
                      <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CertificateTable;