import React from 'react';

interface DateBadgeProps {
  date: string;
  type: 'start' | 'end';
}

function DateBadge({ date, type }: DateBadgeProps) {
  const colorClass = type === 'start' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700';
  
  return (
    <span className={`${colorClass} px-2.5 py-1 rounded-full text-xs font-medium`}>
      {date}
    </span>
  );
}

export default DateBadge;