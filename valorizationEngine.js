import { WASTE_KB } from '../data/wasteKnowledgeBase';

export function runValorizationEngine(waste) {
  const nameKey = (waste.name || '').toLowerCase().trim();
  const kbKey = Object.keys(WASTE_KB).find(k => nameKey.includes(k)) || 'fly ash';
  const kb = WASTE_KB[kbKey];

  const qtyTons = waste.unit === 'kg' ? (parseFloat(waste.quantity) || 0) / 1000 : (parseFloat(waste.quantity) || 0);
  const hazardous = waste.hazard === 'Hazardous';

  const grossValue = qtyTons * kb.valuePerTon;
  const processingCost = grossValue * (hazardous ? 0.48 : 0.34);
  const netProfit = grossValue - processingCost;

  return {
    kb,
    qtyTons,
    economics: { grossValue, processingCost, netProfit, roi: ((netProfit / (processingCost || 1)) * 100).toFixed(1) },
    environment: { co2Reduction: qtyTons * kb.co2PerTon, rawSavings: qtyTons * kb.rawMatPerTon },
    buyers: kb.buyers
  };
}

// Default export added to prevent module export errors
export default runValorizationEngine;