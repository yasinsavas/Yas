import React from 'react';
import { Book, Globe, FileText, Download, Eye, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Catalog {
  id: number;
  name: string;
  category: string;
  language: string;
  pages: number;
  size: string;
  downloads: number;
  lastUpdated: string;
  status: string;
  image: string;
}

interface CatalogGridProps {
  catalogs: Catalog[];
  onView: (catalog: Catalog) => void;
  onDelete: (catalog: Catalog) => void;
}

export function CatalogGrid({ catalogs, onView, onDelete }: CatalogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {catalogs.map((catalog, index) => (
        <motion.div
          key={catalog.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
        >
          {/* Catalog Cover Image */}
          <div className="aspect-[4/3] overflow-hidden border-b border-gray-100">
            <img 
              src={catalog.image} 
              alt={catalog.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Catalog Info */}
          <div className="p-6 border-b border-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0a2351]/5 rounded-lg">
                <Book className="w-5 h-5 text-[#0a2351]" />
              </div>
              <div>
                <h3 className="font-medium text-[#0a2351] group-hover:text-blue-600 transition-colors">
                  {catalog.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{catalog.language}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 bg-[#0a2351]/10 text-[#0a2351] rounded-full text-xs font-medium">
                {catalog.category}
              </span>
              <span className="text-sm text-gray-500">{catalog.size}</span>
            </div>
          </div>

          {/* Stats & Actions */}
          <div className="px-6 py-4 bg-gray-50/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{catalog.pages} sayfa</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{catalog.downloads.toLocaleString()}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => onView(catalog)}
                className="flex items-center justify-center gap-1.5 py-2 text-[#0a2351] hover:bg-[#0a2351]/5 rounded-lg transition-colors group"
              >
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Görüntüle</span>
              </button>
              <button 
                onClick={() => onDelete(catalog)}
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