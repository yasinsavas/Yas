import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Award, BarChart2, Book, TestTube } from 'lucide-react';
import { Logo } from './Logo';

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
    <div className="w-64 bg-[#0a2351] text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-white/10">
        <Logo />
      </div>
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-start p-3 rounded-lg mb-1 cursor-pointer transition-colors
              ${location.pathname === item.path 
                ? 'bg-white/10' 
                : 'hover:bg-white/5'}`}
          >
            <item.icon className={`w-5 h-5 mt-1 mr-3 ${
              location.pathname === item.path ? 'text-blue-400' : 'text-gray-400'
            }`} />
            <div>
              <div className={`text-sm ${
                location.pathname === item.path ? 'font-semibold text-blue-400' : 'font-medium'
              }`}>{item.text}</div>
              <div className="text-xs text-gray-500">{item.subtext}</div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}