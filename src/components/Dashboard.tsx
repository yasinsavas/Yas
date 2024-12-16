import React from 'react';
import { Award, Search, LayoutGrid, List } from 'lucide-react';

const stats = [
  { title: 'Toplam Sertifika', value: '12', change: '+20% artış' },
  { title: 'Geçerli Sertifika', value: '10', change: '+15% artış' },
  { title: 'Yakında Sona Erecek', value: '2', change: '30 gün içinde' },
  { title: 'Son Güncelleme', value: '15.03.2024', change: 'Son sertifika tarihi' },
];

const certificates = [
  {
    name: 'ISO 9001:2015',
    category: 'Kalite',
    provider: 'Bureau Veritas',
    startDate: '15.06.2023',
    endDate: '14.06.2026',
    status: 'Geçerli',
  },
  {
    name: 'ISO 14001:2015',
    category: 'Çevre',
    provider: 'TÜV SÜD',
    startDate: '20.08.2023',
    endDate: '19.08.2026',
    status: 'Geçerli',
  },
];

function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-[#f8f9fa]">
      <div className="bg-gradient-to-r from-blue-900 to-blue-400 rounded-2xl p-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Sertifika Yönetimi</h1>
            <p className="text-blue-100">Kalite ve standart sertifikalarını yönetin</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-blue-900 px-4 py-2 rounded-lg flex items-center gap-2">
              <Award className="w-4 h-4" />
              Kategori Ekle
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Award className="w-4 h-4" />
              Yeni Sertifika Ekle
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#0c1f4d]/20 p-6 rounded-xl text-white">
              <h3 className="text-blue-200 text-sm mb-2">{stat.title}</h3>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-blue-200">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Sertifika ara..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64"
          />
        </div>
        <div className="flex gap-4 items-center">
          <select className="border rounded-lg px-4 py-2">
            <option>Tüm Sertifikalar</option>
          </select>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border">
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg border bg-gray-100">
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Sertifika Adı</th>
              <th className="text-left p-4">Kategori</th>
              <th className="text-left p-4">Veren Kurum</th>
              <th className="text-left p-4">Başlangıç Tarihi</th>
              <th className="text-left p-4">Bitiş Tarihi</th>
              <th className="text-left p-4">Durum</th>
              <th className="text-left p-4">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{cert.name}</td>
                <td className="p-4">{cert.category}</td>
                <td className="p-4">{cert.provider}</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                    {cert.startDate}
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                    {cert.endDate}
                  </span>
                </td>
                <td className="p-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {cert.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                      <Award className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                      <Award className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                      <Award className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;