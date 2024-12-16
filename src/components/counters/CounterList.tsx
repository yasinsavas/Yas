import React from 'react';
import { BarChart2, TrendingUp, Clock, Edit2, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Counter {
  id: number;
  name: string;
  value: string;
  change: string;
  period: string;
  type: string;
  description: string;
  lastUpdated: string;
}

interface CounterListProps {
  counters: Counter[];
  onEdit: (counter: Counter) => void;
  onDelete: (counter: Counter) => void;
}

const counterIcons = {
  visitors: BarChart2,
  pageviews: TrendingUp,
  duration: Clock
};

export function CounterList({ counters, onEdit, onDelete }: CounterListProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#0a2351] text-white">
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Sayaç Adı</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Değer</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Değişim</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4 relative">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">Periyot</span>
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-white/10" />
              </th>
              <th className="text-left p-4">
                <span className="text-sm font-medium">İşlemler</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {counters.map((counter, index) => {
              const Icon = counterIcons[counter.type as keyof typeof counterIcons] || BarChart2;
              return (
                <motion.tr
                  key={counter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-gray-50 hover:bg-blue-50/30 transition-all"
                >
                  <td className="p-4 relative">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#0a2351]/5 rounded-lg">
                        <Icon className="w-4 h-4 text-[#0a2351]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#0a2351]">{counter.name}</div>
                        <div className="text-sm text-gray-500">{counter.description}</div>
                      </div>
                    </div>
                    <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-100" />
                  </td>
                  <td className="p-4 relative">
                    <div className="text-lg font-semibold text-[#0a2351]">{counter.value}</div>
                    <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-100" />
                  </td>
                  <td className="p-4 relative">
                    <span className={`px-2.5 py-1 rounded-full text-sm font-medium ${
                      counter.change.startsWith('+') 
                        ? 'bg-green-50 text-green-700'
                        : 'bg-red-50 text-red-700'
                    }`}>
                      {counter.change}
                    </span>
                    <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-100" />
                  </td>
                  <td className="p-4 relative">
                    <span className="text-sm text-gray-600">{counter.period}</span>
                    <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-100" />
                  </td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      <button
                        onClick={() => onEdit(counter)}
                        className="p-2 text-[#0a2351] hover:bg-[#0a2351]/5 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDelete(counter)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}