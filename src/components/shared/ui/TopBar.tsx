import React from 'react';
import { Search, Bell, Settings, HelpCircle } from 'lucide-react';

export function TopBar() {
  return (
    <div className="h-16 bg-white border-b border-gray-100 fixed top-0 right-0 left-64 z-10">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Ara..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm 
                       focus:outline-none focus:ring-1 focus:ring-[#0a2351] focus:border-[#0a2351] 
                       transition-all"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          
          <div className="relative">
            <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          
          <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>

          <div className="pl-2 ml-2 border-l border-gray-200">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">John Doe</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
                alt="Profile"
                className="w-8 h-8 rounded-full ring-2 ring-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}