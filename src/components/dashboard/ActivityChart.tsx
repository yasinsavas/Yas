import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award } from 'lucide-react';

const activities = [
  {
    title: 'Yeni Sertifika Eklendi',
    description: 'ISO 9001:2015 sertifikası sisteme eklendi',
    time: '2 saat önce',
    icon: Award,
    color: 'bg-blue-500'
  },
  {
    title: 'Kullanıcı Girişi',
    description: 'Ahmet Yılmaz sisteme giriş yaptı',
    time: '3 saat önce',
    icon: Users,
    color: 'bg-green-500'
  },
  {
    title: 'Trafik Artışı',
    description: 'Ziyaretçi sayısında %25 artış',
    time: '5 saat önce',
    icon: TrendingUp,
    color: 'bg-purple-500'
  }
];

function ActivityChart() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-[#0a2351]">Son Aktiviteler</h2>
      </div>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className={`${activity.color} p-2 rounded-lg`}>
              <activity.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{activity.title}</h3>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ActivityChart;