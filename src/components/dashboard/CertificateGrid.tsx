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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {certificates.map((cert, index) => {
        const CategoryIcon = categoryIcons[cert.category as keyof typeof categoryIcons] || Award;
        return (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <CategoryIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-500">{cert.category}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-medium text-green-700">{cert.status}</span>
              </span>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="text-sm">
                <span className="text-gray-500">Veren Kurum:</span>
                <span className="ml-2 text-gray-900">{cert.provider}</span>
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <span className="text-gray-500">Başlangıç:</span>
                  <span className="ml-2 bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs">
                    {cert.startDate}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Bitiş:</span>
                  <span className="ml-2 bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs">
                    {cert.endDate}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t">
              <button className="flex-1 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group flex items-center justify-center gap-2">
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Görüntüle</span>
              </button>
              <button className="flex-1 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group flex items-center justify-center gap-2">
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">İndir</span>
              </button>
              <button className="flex-1 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors group flex items-center justify-center gap-2">
                <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Sil</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CertificateGrid;