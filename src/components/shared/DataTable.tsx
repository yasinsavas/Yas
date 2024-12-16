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
            <tr className="table-header">
              {columns.map((column, index) => (
                <th key={index}>
                  <div className="flex items-center gap-2">
                    {column.icon && <column.icon className="w-4 h-4 text-blue-300" />}
                    <span>{column.header}</span>
                  </div>
                </th>
              ))}
              {actions && <th>İşlemler</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
                className="table-row"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="table-cell">
                    {column.render ? column.render(item[column.accessor]) : item[column.accessor]}
                  </td>
                ))}
                {actions && (
                  <td className="table-cell">
                    <div className="flex gap-1">
                      {actions.map((action, index) => {
                        const Icon = action.icon;
                        return (
                          <button
                            key={index}
                            onClick={() => action.onClick(item)}
                            className={action.variant === 'danger' ? 'action-button-danger' : 'action-button-primary'}
                            title={action.label}
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