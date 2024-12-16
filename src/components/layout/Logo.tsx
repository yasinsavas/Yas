import React from 'react';
import { BookOpen } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-white/10 rounded-xl">
        <BookOpen className="w-8 h-8 text-white" />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-white">Admin Panel</h1>
        <p className="text-xs text-white/60">Yönetim Paneli</p>
      </div>
    </div>
  );
}