import React, { useState } from 'react';
import { Search, Bell, Settings, HelpCircle } from 'lucide-react';
import { Clock } from './Clock';
import { CurrencyDisplay } from './CurrencyDisplay';

export function TopBar() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="h-14 bg-[#0f172a] border-b border-gray-800 fixed top-0 right-0 left-64 z-10">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Ara..."
              className="w-full pl-9 pr-4 py-2 bg-[#1e293b] border border-gray-700 rounded-lg text-sm text-gray-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 
                       transition-all placeholder-gray-500"
            />
          </div>

          {/* Maintenance Mode Toggle */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e293b] border border-gray-700 rounded-lg">
            <span className="text-sm text-gray-300">Bakım Modu</span>
            <button 
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                maintenanceMode ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                maintenanceMode ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex items-center gap-4">
          <Clock />
          <CurrencyDisplay />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-[#1e293b] rounded-lg transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          
          <div className="relative">
            <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-[#1e293b] rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </div>
          
          <button className="p-2 text-gray-400 hover:text-gray-200 hover:bg-[#1e293b] rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>

          <div className="pl-2 ml-2 border-l border-gray-700">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-200">Admin</div>
                <div className="text-xs text-gray-400">John Doe</div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
                alt="Profile"
                className="w-8 h-8 rounded-lg ring-2 ring-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}