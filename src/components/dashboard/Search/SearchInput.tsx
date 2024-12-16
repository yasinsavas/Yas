import React from 'react';
import { Search } from 'lucide-react';

function SearchInput() {
  return (
    <div className="relative w-full md:w-96">
      <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Sertifika ara..."
        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all hover:border-blue-200"
      />
    </div>
  );
}

export default SearchInput;