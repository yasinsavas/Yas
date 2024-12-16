import React from 'react';
import { ChevronDown } from 'lucide-react';

function CategoryFilter() {
  return (
    <div className="relative w-full sm:w-48">
      <select className="w-full appearance-none pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all hover:border-blue-200">
        <option>Tüm Sertifikalar</option>
        <option>Kalite</option>
        <option>Çevre</option>
        <option>İş Güvenliği</option>
        <option>Bilgi Güvenliği</option>
      </select>
      <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
}

export default CategoryFilter;