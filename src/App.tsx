import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import { TopBar } from './components/shared/ui/TopBar';
import DashboardPage from './pages/DashboardPage';
import CertificatesPage from './pages/CertificatesPage';
import CountersPage from './pages/CountersPage';
import CatalogPage from './pages/CatalogPage';
import { AppLayout } from './components/layout/AppLayout';
import { AppRoutes } from './routes';

export function App() {
  return (
    <Router>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </Router>
  );
}

export default App;