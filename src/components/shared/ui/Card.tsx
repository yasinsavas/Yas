import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

export function Card({ title, value, subtitle, icon: Icon }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0a2351] rounded-xl p-6 relative overflow-hidden group hover:scale-105 transition-all duration-300"
    >
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
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}