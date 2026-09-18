import React from 'react';
import { useApp } from '../context/AppContext';

export const LandingView = () => {
  const { setActiveRoute } = useApp();

  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1>Valorix Engine</h1>
      <p>Industrial Waste Valorization & Circular Economy Analytics</p>
      <button 
        className="btn btn-primary" 
        onClick={() => setActiveRoute('dashboard')}
        style={{ marginTop: '20px' }}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

// Default export added to resolve module import error
export default LandingView;