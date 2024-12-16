import React from 'react';
import { Eye, Edit2, Trash2, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certificate {
  name: string;
  category: string;
  provider: string;
  startDate: string;
  endDate: string;
  status: string;
  image?: string;
}

interface CertificateGridProps {
  certificates: Certificate[];
  onView: (cert: Certificate) => void;
  onEdit: (cert: Certificate) => void;
  onDelete: (cert: Certificate) => void;
}

export function CertificateGrid({ certificates, onView, onEdit, onDelete }: CertificateGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
        >
          {/* Certificate Image */}
          <div className="aspect-[4/3] overflow-hidden border-b border-gray-100">
            {cert.image ? (
              <img 
                src={cert.image} 
                alt={cert.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-[#0a2351]/5 flex items-center justify-center">
                <FileText className="w-12 h-12 text-[#0a2351]/30" />
              </div>
            )}
          </div>

          <div className="p-6 border-b border-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0a2351]/5 rounded-lg">
                <FileText className="w-5 h-5 text-[#0a2351]" />
              </div>
              <div>
                <h3 className="font-medium text-[#0a2351] group-hover:text-blue-600 transition-colors">
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
                onClick={() => onView(cert)}
                className="flex items-center justify-center gap-1.5 py-2 text-[#0a2351] hover:bg-[#0a2351]/5 rounded-lg transition-colors group"
              >
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Görüntüle</span>
              </button>
              <button 
                onClick={() => onEdit(cert)}
                className="flex items-center justify-center gap-1.5 py-2 text-[#0a2351] hover:bg-[#0a2351]/5 rounded-lg transition-colors group"
              >
                <Edit2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Düzenle</span>
              </button>
              <button 
                onClick={() => onDelete(cert)}
                className="flex items-center justify-center gap-1.5 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
              >
                <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Sil</span>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}