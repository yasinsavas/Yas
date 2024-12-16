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

interface CounterGridProps {
  counters: Counter[];
  onEdit: (counter: Counter) => void;
  onDelete: (counter: Counter) => void;
}

const counterIcons = {
  visitors: BarChart2,
  pageviews: TrendingUp,
  duration: Clock
};

export function CounterGrid({ counters, onEdit, onDelete }: CounterGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {counters.map((counter, index) => {
        const Icon = counterIcons[counter.type as keyof typeof counterIcons] || BarChart2;
        return (
          <motion.div
            key={counter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6 border-b border-gray-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#0a2351]/5 rounded-lg">
                  <Icon className="w-5 h-5 text-[#0a2351]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#0a2351] group-hover:text-blue-600 transition-colors">
                    {counter.name}
                  </h3>
                  <p className="text-sm text-gray-500">{counter.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold text-[#0a2351]">{counter.value}</div>
                <span className={`px-2.5 py-1 rounded-full text-sm font-medium ${
                  counter.change.startsWith('+') 
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}>
                  {counter.change}
                </span>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{counter.period}</span>
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
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}