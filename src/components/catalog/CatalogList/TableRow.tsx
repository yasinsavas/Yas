import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, Trash2, FileText, Globe, Calendar } from 'lucide-react';

interface TableRowProps {
  catalog: {
    id: number;
    name: string;
    category: string;
    language: string;
    pages: number;
    lastUpdated: string;
    description?: string;
  };
  index: number;
  onView: (catalog: any) => void;
  onDelete: (catalog: any) => void;
}

export function TableRow({ catalog, index, onView, onDelete }: TableRowProps) {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="border-b border-gray-50 hover:bg-blue-50/30 transition-all"
    >
      <td className="p-4">
        <div className="flex items-start gap-4">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="w-12 h-12 rounded-lg overflow-hidden bg-[#0a2351]/5 flex-shrink-0"
          >
            <div className="w-full h-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#0a2351]/30" />
            </div>
          </motion.div>
          <div>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
              className="font-medium text-[#0a2351] mb-1"
            >
              {catalog.name}
            </motion.div>
            <motion.p 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              className="text-sm text-gray-500 line-clamp-2"
            >
              {catalog.description || 'Dijital ürün kataloğu'}
            </motion.p>
          </div>
        </div>
      </td>
      <td className="p-4">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
          className="px-2.5 py-1 bg-[#0a2351]/10 text-[#0a2351] rounded-full text-sm font-medium"
        >
          {catalog.category}
        </motion.span>
      </td>
      <td className="p-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          className="flex items-center gap-2"
        >
          <Globe className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">{catalog.language}</span>
        </motion.div>
      </td>
      <td className="p-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
          className="flex items-center gap-2"
        >
          <FileText className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">{catalog.pages} sayfa</span>
        </motion.div>
      </td>
      <td className="p-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
          className="flex items-center gap-2"
        >
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">{catalog.lastUpdated}</span>
        </motion.div>
      </td>
      <td className="p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
          className="flex gap-1"
        >
          <button
            onClick={() => onView(catalog)}
            className="p-2 text-[#0a2351] hover:bg-[#0a2351]/5 rounded-lg transition-colors group"
            title="Görüntüle"
          >
            <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
          <button
            className="p-2 text-[#0a2351] hover:bg-[#0a2351]/5 rounded-lg transition-colors group"
            title="İndir"
          >
            <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => onDelete(catalog)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
            title="Sil"
          >
            <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </td>
    </motion.tr>
  );
}