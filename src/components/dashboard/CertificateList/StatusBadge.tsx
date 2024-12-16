import React from 'react';

interface StatusBadgeProps {
  status: string;
}

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="flex items-center gap-1.5 text-sm">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      <span className="font-medium text-green-700">{status}</span>
    </span>
  );
}

export default StatusBadge;