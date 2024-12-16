import React from 'react';
import Sidebar from './Sidebar';
import { TopBar } from '../shared/ui/TopBar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <TopBar />
        <main className="mt-14 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}