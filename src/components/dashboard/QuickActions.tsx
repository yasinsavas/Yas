import React from 'react';
import { motion } from 'framer-motion';
import { Plus, FileText, Users, Settings } from 'lucide-react';

const actions = [
  {
    title: 'Sertifika Ekle',
    description: 'Yeni bir sertifika kaydı oluşturun',
    icon: Plus,
    color: 'bg-blue-500'
  },
  {
    title: 'Rapor Oluştur',
    description: 'Detaylı sistem raporu alın',
    icon: FileText,
    color: 'bg-purple-500'
  },
  {
    title: 'Kullanıcı Yönetimi',
    description: 'Kullanıcı izinlerini düzenleyin',
    icon: Users,
    color: 'bg-green-500'
  },
  {
    title: 'Sistem Ayarları',
    description: 'Temel ayarları yapılandırın',
    icon: Settings,
    color: 'bg-orange-500'
  }
];

function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {actions.map((action, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <div className={`${action.color} p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <action.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-[#0a2351] mb-2">{action.title}</h3>
          <p className="text-sm text-gray-600">{action.description}</p>
        </motion.button>
      ))}
    </div>
  );
}

export default QuickActions;