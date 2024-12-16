import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, subtitle, icon }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="stat-card"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="stat-title">{title}</div>
          <div className="stat-value">{value}</div>
          <div className="stat-subtitle">{subtitle}</div>
        </div>
        <div className="stat-icon">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

export default StatCard;