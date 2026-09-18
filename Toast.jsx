import React from 'react';

export const Toast = ({ toasts = [] }) => (
  <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
    {toasts.map(t => (
      <div key={t.id} style={{
        padding: '12px 20px',
        background: 'var(--navy-900, #0f172a)',
        color: '#fff',
        borderRadius: '6px',
        marginBottom: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {t.message}
      </div>
    ))}
  </div>
);

// Added Default Export to resolve module import error in App.jsx
export default Toast;