import React from 'react';

export const Badge = ({ children, type = 'info' }) => {
  const styles = {
    high: { bg: '#E3F3EA', color: '#1F8A5F' },
    medium: { bg: '#FEF3C7', color: '#D97706' },
    low: { bg: '#FEE2E2', color: '#DC2626' },
    info: { bg: '#E0F2FE', color: '#0369A1' }
  }[type] || { bg: '#E0F2FE', color: '#0369A1' };

  return (
    <span style={{
      background: styles.bg,
      color: styles.color,
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'inline-block'
    }}>
      {children}
    </span>
  );
};