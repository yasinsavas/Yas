import React from 'react';
import { Award, Users, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    title: 'Toplam Kullanıcı',
    value: '2,543',
    change: '+12.5%',
    icon: Users
  },
  {
    title: 'Aktif Sertifika',
    value: '152',
    change: '+8.2%',
    icon: Award
  },
  {
    title: 'Aylık Görüntülenme',
    value: '45.2K',
    change: '+15.8%',
    icon: TrendingUp
  },
  {
    title: 'Ortalama Süre',
    value: '2.5s',
    change: '-2.3%',
    icon: Clock
  }
];

function DashboardHeader() {
  return (
    <div className="gradient-bg rounded-2xl p-8 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-semibold text-white mb-2">Hoş Geldiniz 👋</h1>
        <p className="text-blue-100/80">Sistem durumunu ve istatistikleri görüntüleyin</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#0a2351] rounded-xl p-6 relative overflow-hidden group hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-white/70 text-sm mb-4">{stat.title}</div>
                <div className="text-white text-3xl font-semibold mb-1.5">{stat.value}</div>
                <div className={`text-xs ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change} geçen aya göre
                </div>
              </div>
              <div className="stat-icon">
                <stat.icon className="w-6 h-6 text-white/40" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DashboardHeader;