import React from 'react';
import { Eye, Download, Trash2 } from 'lucide-react';
import CategoryWithIcon from './CategoryWithIcon';
import DateBadge from './DateBadge';
import StatusBadge from './StatusBadge';

interface Certificate {
  name: string;
  category: string;
  provider: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface TableRowProps {
  certificate: Certificate;
  onAction: (type: 'view' | 'download' | 'delete', certificate: Certificate) => void;
}

function TableRow({ certificate, onAction }: TableRowProps) {
  return (
    <tr className="table-row">
      <td className="table-cell font-medium text-[#0a2351]">{certificate.name}</td>
      <td className="table-cell">
        <CategoryWithIcon category={certificate.category} />
      </td>
      <td className="table-cell text-gray-600">{certificate.provider}</td>
      <td className="table-cell">
        <DateBadge date={certificate.startDate} type="start" />
      </td>
      <td className="table-cell">
        <DateBadge date={certificate.endDate} type="end" />
      </td>
      <td className="table-cell">
        <StatusBadge status={certificate.status} />
      </td>
      <td className="table-cell">
        <div className="flex gap-1">
          <button 
            onClick={() => onAction('view', certificate)}
            className="action-button-primary"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onAction('download', certificate)}
            className="action-button-primary"
          >
            <Download className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onAction('delete', certificate)}
            className="action-button-danger"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;