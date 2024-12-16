import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import CertificatesPage from '../pages/CertificatesPage';
import CountersPage from '../pages/CountersPage';
import CatalogPage from '../pages/CatalogPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
      <Route path="/counters" element={<CountersPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
}