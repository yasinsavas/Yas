import { Home, Award, BarChart2, Book } from 'lucide-react';

export const menuItems = [
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
  }
];