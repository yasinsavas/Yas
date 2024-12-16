import React from 'react';
import { FileText, Tag, Building, Calendar, CheckCircle, Settings } from 'lucide-react';

function TableHeader() {
  return (
    <tr className="bg-[#0a2351] text-white">
      <th className="p-4">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Sertifika Adı</span>
        </div>
      </th>
      <th className="p-4">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Kategori</span>
        </div>
      </th>
      <th className="p-4">
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Veren Kurum</span>
        </div>
      </th>
      <th className="p-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Başlangıç Tarihi</span>
        </div>
      </th>
      <th className="p-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Bitiş Tarihi</span>
        </div>
      </th>
      <th className="p-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">Durum</span>
        </div>
      </th>
      <th className="p-4">
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium">İşlemler</span>
        </div>
      </th>
    </tr>
  );
}

export default TableHeader;