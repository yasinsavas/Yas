import React from 'react';
import { Shield, Award, Briefcase, FileCheck, LucideIcon } from 'lucide-react';

interface CategoryWithIconProps {
  category: string;
}

const categoryIcons: Record<string, LucideIcon> = {
  'Kalite': Shield,
  'Çevre': Award,
  'İş Güvenliği': Briefcase,
  'Bilgi Güvenliği': FileCheck,
};

function CategoryWithIcon({ category }: CategoryWithIconProps) {
  const Icon = categoryIcons[category] || Award;
  
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Icon className="w-4 h-4 text-blue-600" />
      {category}
    </div>
  );
}

export default CategoryWithIcon;