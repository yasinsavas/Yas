import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative flex-1">
      <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
      <input
        type="text"
        placeholder="Katalog adı veya kategori ara..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg 
                 focus:ring-2 focus:ring-[#0a2351]/20 focus:border-[#0a2351] 
                 transition-all"
      />
    </div>
  );
}