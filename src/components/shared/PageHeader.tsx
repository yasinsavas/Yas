import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

interface PageHeaderProps {
  title: string;
  subtitle: string;
  stats: StatProps[];
}

function StatCard({ title, value, subtitle, icon: Icon }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="stat-card"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-white/70 text-sm mb-4">{title}</div>
          <div className="text-white text-3xl font-semibold mb-1.5">{value}</div>
          <div className="text-white/60 text-xs">{subtitle}</div>
        </div>
        <div className="stat-icon">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export function PageHeader({ title, subtitle, stats }: PageHeaderProps) {
  return (
    <div className="gradient-bg rounded-2xl p-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="text-blue-100/80">{subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}