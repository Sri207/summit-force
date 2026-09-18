import React from 'react';
import { useApp } from '../context/AppContext';
import { runValorizationEngine } from '../services/valorizationEngine';
import Card from '../components/common/Card';

export const DashboardView = () => {
  const { records } = useApp();

  const metrics = records.reduce((acc, item) => {
    const res = runValorizationEngine(item);
    acc.totalTons += res.qtyTons;
    acc.grossValue += res.economics.grossValue;
    acc.netProfit += res.economics.netProfit;
    acc.co2Offset += res.environment.co2Reduction;
    return acc;
  }, { totalTons: 0, grossValue: 0, netProfit: 0, co2Offset: 0 });

  return (
    <div>
      <h2>Portfolio Summary</h2>
      <div className="grid g4" style={{ margin: '20px 0' }}>
        <Card><label>Total Waste</label><div className="mono" style={{ fontSize: '20px', fontWeight: 'bold' }}>{metrics.totalTons} t</div></Card>
        <Card><label>Gross Value</label><div className="mono" style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--green-600)' }}>${Math.round(metrics.grossValue)}</div></Card>
        <Card><label>Est. Net Profit</label><div className="mono" style={{ fontSize: '20px', fontWeight: 'bold' }}>${Math.round(metrics.netProfit)}</div></Card>
        <Card><label>CO₂ Saved</label><div className="mono" style={{ fontSize: '20px', fontWeight: 'bold' }}>{metrics.co2Offset.toFixed(1)} t</div></Card>
      </div>
    </div>
  );
};

// Added Default Export to fix App.jsx import error
export default DashboardView;