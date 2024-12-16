import React from 'react';
import StatCard from './StatCard';
import { motion } from 'framer-motion';

const stats = [
  {
    title: "Toplam Sertifika",
    value: "12",
    subtitle: "+20% artış",
    type: "total" as const,
  },
  {
    title: "Geçerli Sertifika",
    value: "10",
    subtitle: "+15% artış",
    type: "valid" as const,
  },
  {
    title: "Yakında Sona Erecek",
    value: "2",
    subtitle: "30 gün içinde",
    type: "expiring" as const,
  },
  {
    title: "Son Güncelleme",
    value: "15.03.2024",
    subtitle: "Son sertifika tarihi",
    type: "updated" as const,
  },
];

function StatsGrid() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <StatCard 
          key={index} 
          {...stat} 
        />
      ))}
    </motion.div>
  );
}

export default StatsGrid;