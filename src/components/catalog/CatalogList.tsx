import React from 'react';
import { Eye, Download, Trash2, FileText, Globe, Building, Star, Calendar } from 'lucide-react';

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
  description?: string;
}

interface CatalogListProps {
  catalogs: Catalog[];
  onView: (catalog: Catalog) => void;
  onDelete: (catalog: Catalog) => void;
}

export function CatalogList({ catalogs, onView, onDelete }: CatalogListProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#0a2351] text-white">
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Katalog</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Kategori</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Dil</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Sayfa</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Son Güncelleme</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4">
                <span className="text-sm font-medium">İşlemler</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {catalogs.map((catalog) => (
              <tr key={catalog.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition-all">
                <td className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#0a2351]/5 flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="w-6 h-6 text-[#0a2351]/30" />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-[#0a2351] mb-1">{catalog.name}</div>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {catalog.description || 'Dijital ürün kataloğu'}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 bg-[#0a2351]/10 text-[#0a2351] rounded-full text-sm font-medium">
                    {catalog.category}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{catalog.language}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{catalog.pages} sayfa</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{catalog.lastUpdated}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-1">
                    <button
                      onClick={() => onView(catalog)}
                      className="p-2 text-[#0a2351] hover:bg-[#0a2351]/5 rounded-lg transition-colors"
                      title="Görüntüle"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-[#0a2351] hover:bg-[#0a2351]/5 rounded-lg transition-colors"
                      title="İndir"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(catalog)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Sil"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}