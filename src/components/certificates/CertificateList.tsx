import React from 'react';
import { FileText, Building, Calendar, CheckCircle, Star, Eye, Edit2, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certificate {
  id: string;
  name: string;
  category: string;
  provider: string;
  startDate: string;
  endDate: string;
  status: string;
  rating?: number;
  image?: string;
  description?: string;
}

interface CertificateListProps {
  certificates: Certificate[];
  onView: (certificate: Certificate) => void;
  onEdit: (certificate: Certificate) => void;
  onDelete: (certificate: Certificate) => void;
}

export function CertificateList({ certificates, onView, onEdit, onDelete }: CertificateListProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#0a2351] text-white">
              <th className="text-left p-4 relative w-[400px]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Sertifika</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Veren Kurum</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Değerlendirme</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Başlangıç</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Bitiş</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Durum</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4">
                <span className="text-sm font-medium">İşlemler</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert, index) => (
              <motion.tr
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-50 hover:bg-blue-50/30 transition-all"
              >
                <td className="p-4 relative">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#0a2351]/5 flex-shrink-0">
                      {cert.image ? (
                        <img 
                          src={cert.image} 
                          alt={cert.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-8 h-8 text-[#0a2351]/30" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-[#0a2351] mb-1">{cert.name}</div>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {cert.description || 'Uluslararası kalite yönetim sistemi standardı sertifikası'}
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-100" />
                </td>
                <td className="p-4 relative">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{cert.provider}</span>
                  </div>
                  <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-100" />
                </td>
                <td className="p-4 relative">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= (cert.rating || 5)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-100" />
                </td>
                <td className="p-4 relative">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{cert.startDate}</span>
                  </div>
                  <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-100" />
                </td>
                <td className="p-4 relative">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{cert.endDate}</span>
                  </div>
                  <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-100" />
                </td>
                <td className="p-4 relative">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm font-medium text-green-700">{cert.status}</span>
                  </span>
                  <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-100" />
                </td>
                <td className="p-4">
                  <div className="flex gap-1">
                    <button
                      onClick={() => onView(cert)}
                      className="p-2 text-[#0a2351] hover:bg-[#0a2351]/5 rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onEdit(cert)}
                      className="p-2 text-[#0a2351] hover:bg-[#0a2351]/5 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(cert)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}