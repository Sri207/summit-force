import React from 'react';
import { useApp } from '../context/AppContext';
import { runValorizationEngine } from '../services/valorizationEngine';
import { Card } from '../components/common/Card';

export const MarketplaceView = () => {
  const { records } = useApp();
  
  return (
    <div>
      <h2>Marketplace Buyer Matcher</h2>
      <div className="grid g2" style={{ marginTop: '20px' }}>
        {records.map(r => {
          const res = runValorizationEngine(r);
          return (
            <Card key={r.id}>
              <h4>{r.name}</h4>
              <p><strong>Potential Buyers:</strong> {res.buyers.join(', ')}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

// Default export added to resolve module export error in App.jsx
export default MarketplaceView;