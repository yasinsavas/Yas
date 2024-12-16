import React from 'react';
import { FileText, Building, Globe, Star, Calendar } from 'lucide-react';

export function TableHeader() {
  return (
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
  );
}