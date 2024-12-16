import React from 'react';
import { FileText } from 'lucide-react';

function FormHeader() {
  return (
    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
      <div className="p-2 bg-blue-100 rounded-lg">
        <FileText className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-blue-900 mb-1">Sertifika Bilgileri</h4>
        <p className="text-sm text-blue-700">Yeni bir sertifika kaydı oluşturun</p>
      </div>
    </div>
  );
}

export default FormHeader;