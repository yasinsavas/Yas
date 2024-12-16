import React from 'react';
import { Award, FileCheck, AlertTriangle, Calendar } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  type: 'total' | 'valid' | 'expiring' | 'updated';
}

const icons = {
  total: Award,
  valid: FileCheck,
  expiring: AlertTriangle,
  updated: Calendar
};

function StatCard({ title, value, subtitle, type }: StatCardProps) {
  const Icon = icons[type];

  return (
    <div className="stat-card rounded-xl p-6 relative overflow-hidden group">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-white/70 text-sm mb-4">{title}</div>
          <div className="text-white text-3xl font-semibold mb-1.5">{value}</div>
          <div className="text-white/60 text-xs">{subtitle}</div>
        </div>
        <div className="stat-icon">
          <Icon className="w-6 h-6 text-white/40" />
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default StatCard;