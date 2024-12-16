import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, Package, FileText, HelpCircle, BarChart2, Award, TestTube, Book, MessageSquare, Image } from 'lucide-react';

const menuItems = [
  { 
    icon: Home, 
    text: 'Anasayfa', 
    subtext: 'Dashboard ve istatistikler',
    path: '/dashboard'
  },
  { 
    icon: Award, 
    text: 'Sertifikalar', 
    subtext: 'Kalite ve standart sertifikaları',
    path: '/certificates'
  },
  { 
    icon: BarChart2, 
    text: 'Sayaçlar', 
    subtext: 'İstatistik ve sayaç yönetimi',
    path: '/counters'
  },
  { 
    icon: Book, 
    text: 'E-Katalog', 
    subtext: 'Dijital ürün kataloğu',
    path: '/catalog'
  },
  { 
    icon: TestTube, 
    text: 'Test Yönetimi', 
    subtext: 'Test senaryoları',
    path: '/tests'
  }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-[#0f172a] text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#1e293b] rounded-xl">
            <Package className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">Admin Panel</h1>
            <p className="text-xs text-gray-400">Yönetim Paneli</p>
          </div>
        </div>
      </div>
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className={`flex items-start p-3 rounded-lg mb-1 cursor-pointer transition-colors
              ${location.pathname === item.path 
                ? 'bg-[#1e293b]' 
                : 'hover:bg-[#1e293b]/50'}`}
          >
            <item.icon className={`w-5 h-5 mt-1 mr-3 ${
              location.pathname === item.path ? 'text-blue-400' : 'text-gray-400'
            }`} />
            <div>
              <div className={`text-sm ${
                location.pathname === item.path ? 'font-semibold text-blue-400' : 'font-medium text-gray-300'
              }`}>{item.text}</div>
              <div className="text-xs text-gray-500">{item.subtext}</div>
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
}