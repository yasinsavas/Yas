import React from 'react';
import { motion } from 'framer-motion';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

interface Catalog {
  id: number;
  name: string;
  category: string;
  language: string;
  pages: number;
  size: string;
  downloads: number;
  lastUpdated: string;
  status: string;
  description?: string;
}

interface CatalogListProps {
  catalogs: Catalog[];
  onView: (catalog: Catalog) => void;
  onDelete: (catalog: Catalog) => void;
}

export function CatalogList({ catalogs, onView, onDelete }: CatalogListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {catalogs.map((catalog, index) => (
              <TableRow
                key={catalog.id}
                catalog={catalog}
                index={index}
                onView={onView}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}