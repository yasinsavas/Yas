import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarMenuItemProps {
  icon: LucideIcon;
  text: string;
  subtext: string;
  active?: boolean;
}

function SidebarMenuItem({ icon: Icon, text, subtext, active }: SidebarMenuItemProps) {
  return (
    <div
      className={`flex items-start p-3 rounded-lg mb-1 cursor-pointer transition-colors
        ${active ? 'bg-[#1e293b]' : 'hover:bg-[#1e293b]'}`}
    >
      <Icon className="w-5 h-5 mt-1 mr-3 text-gray-400" />
      <div>
        <div className={`text-sm ${active ? 'font-semibold' : 'font-medium'}`}>{text}</div>
        <div className="text-xs text-gray-500">{subtext}</div>
      </div>
    </div>
  );
}

export default SidebarMenuItem;