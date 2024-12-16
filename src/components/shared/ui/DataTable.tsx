import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Column {
  header: string;
  accessor: string;
  icon?: LucideIcon;
  render?: (value: any) => React.ReactNode;
}

interface Action {
  icon: LucideIcon;
  label: string;
  onClick: (item: any) => void;
  variant?: 'primary' | 'danger';
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  actions?: Action[];
}

export function DataTable({ columns, data, actions }: DataTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#0a2351] text-white">
              {columns.map((column, index) => (
                <th key={index} className="text-left p-4">
                  <div className="flex items-center gap-2">
                    {column.icon && <column.icon className="w-4 h-4 text-blue-300" />}
                    <span className="text-sm font-medium">{column.header}</span>
                  </div>
                </th>
              ))}
              {actions && <th className="text-left p-4">İşlemler</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <motion.tr
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
                key={rowIndex}
                className="border-b border-gray-50 hover:bg-blue-50/30 transition-all"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-4">
                    {column.render ? column.render(item[column.accessor]) : item[column.accessor]}
                  </td>
                ))}
                {actions && (
                  <td className="p-4">
                    <div className="flex gap-1">
                      {actions.map((action, index) => {
                        const Icon = action.icon;
                        return (
                          <button
                            key={index}
                            onClick={() => action.onClick(item)}
                            title={action.label}
                            className={`
                              p-2 rounded-lg transition-colors
                              ${action.variant === 'danger' 
                                ? 'text-red-600 hover:bg-red-50' 
                                : 'text-[#0a2351] hover:bg-[#0a2351]/5'}
                            `}
                          >
                            <Icon className="w-4 h-4" />
                          </button>
                        );
                      })}
                    </div>
                  </td>
                )}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}