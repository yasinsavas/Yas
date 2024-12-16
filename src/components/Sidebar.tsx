import React from 'react';
import { Home, Package, FileText, HelpCircle, BarChart2, Award, TestTube, Book, MessageSquare, Image } from 'lucide-react';

const menuItems = [
  { icon: Home, text: 'Anasayfa', subtext: 'Dashboard ve istatistikler' },
  { icon: Package, text: 'Ürün Yönetimi', subtext: 'Ürün kataloğu' },
  { icon: FileText, text: 'Blog Yönetimi', subtext: 'Blog yazıları' },
  { icon: HelpCircle, text: 'S.S.S. Yönetimi', subtext: 'Sık sorulan sorular' },
  { icon: BarChart2, text: 'Sayaçlar', subtext: 'İstatistik yönetimi' },
  { icon: Award, text: 'Sertifika Yönetimi', subtext: 'Kalite ve standart sertifikaları' },
  { icon: TestTube, text: 'Test Yönetimi', subtext: 'Test senaryoları' },
  { icon: Book, text: 'E-Katalog', subtext: 'Dijital ürün kataloğu' },
  { icon: MessageSquare, text: 'Müşteri Yorumları', subtext: 'Müşteri geri bildirimleri' },
  { icon: Image, text: 'Marka Yönetimi', subtext: 'Marka ve logo yönetimi' },
];

function Sidebar() {
  return (
    <div className="w-64 bg-[#1a1f37] text-white h-screen p-4">
      <div className="mb-8 px-4">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-3 hover:bg-[#252d4a] rounded-lg mb-1 cursor-pointer"
          >
            <item.icon className="w-5 h-5 mt-1 mr-3" />
            <div>
              <div className="text-sm font-medium">{item.text}</div>
              <div className="text-xs text-gray-400">{item.subtext}</div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;