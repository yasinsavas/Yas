import React, { useState, useEffect } from 'react';
import { Clock as ClockIcon } from 'lucide-react';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1e293b] text-gray-200 rounded-lg border border-gray-700">
      <ClockIcon className="w-4 h-4 text-blue-400" />
      <span className="text-sm font-medium tabular-nums">
        {time.toLocaleTimeString('tr-TR')}
      </span>
    </div>
  );
}