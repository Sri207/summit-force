import React from 'react';
import { useApp } from '../../context/AppContext';

export const Sidebar = () => {
  const { activeRoute, setActiveRoute } = useApp();

  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'analyze', label: 'Analyze' },
    { id: 'database', label: 'Database' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'reports', label: 'Reports' },
  ];

  return (
    <aside style={{
      width: '240px',
      background: 'var(--navy-900, #1e293b)',
      color: '#fff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      <h3 style={{ marginBottom: '20px', color: '#fff' }}>Valorix</h3>
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => setActiveRoute(item.id)}
          style={{
            textAlign: 'left',
            padding: '10px 15px',
            borderRadius: '6px',
            border: 'none',
            background: activeRoute === item.id ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: activeRoute === item.id ? 'bold' : 'normal'
          }}
        >
          {item.label}
        </button>
      ))}
    </aside>
  );
};

// Default export added to resolve module import error in App.jsx
export default Sidebar;