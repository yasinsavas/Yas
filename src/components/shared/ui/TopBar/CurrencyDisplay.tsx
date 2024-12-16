import React, { useState, useEffect } from 'react';
import { DollarSign, Euro } from 'lucide-react';

export function CurrencyDisplay() {
  const [rates, setRates] = useState({
    usd: '29.84',
    eur: '32.45'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simüle edilmiş kur değişimleri
      setRates({
        usd: (29 + Math.random() * 2).toFixed(2),
        eur: (32 + Math.random() * 2).toFixed(2)
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1e293b] text-gray-200 rounded-lg border border-gray-700">
        <DollarSign className="w-4 h-4 text-green-400" />
        <span className="text-sm font-medium tabular-nums">{rates.usd} ₺</span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1e293b] text-gray-200 rounded-lg border border-gray-700">
        <Euro className="w-4 h-4 text-blue-400" />
        <span className="text-sm font-medium tabular-nums">{rates.eur} ₺</span>
      </div>
    </div>
  );
}