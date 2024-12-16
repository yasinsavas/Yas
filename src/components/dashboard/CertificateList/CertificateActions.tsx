import React from 'react';
import { Eye, Download, Trash2 } from 'lucide-react';

function CertificateActions() {
  return (
    <div className="flex gap-1">
      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group">
        <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </button>
      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group">
        <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </button>
      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors group">
        <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}

export default CertificateActions;