import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { Toast } from './components/common/Toast';

import { LandingView } from './views/LandingView';
import { DashboardView } from './views/DashboardView';
import { AnalyzeView } from './views/AnalyzeView';
import { DatabaseView } from './views/DatabaseView';
import { MarketplaceView } from './views/MarketplaceView';
import { ReportsView } from './views/ReportsView';

import './App.css';

const MainLayout = () => {
  const { activeRoute, toasts } = useApp();

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '30px' }}>
        {activeRoute === 'landing' && <LandingView />}
        {activeRoute === 'dashboard' && <DashboardView />}
        {activeRoute === 'analyze' && <AnalyzeView />}
        {activeRoute === 'database' && <DatabaseView />}
        {activeRoute === 'marketplace' && <MarketplaceView />}
        {activeRoute === 'reports' && <ReportsView />}
      </main>
      <Toast toasts={toasts} />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}