import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { runValorizationEngine } from '../services/valorizationEngine';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export const AnalyzeView = () => {
  const { addRecord, setActiveRoute } = useApp();
  const [form, setForm] = useState({ name: '', category: 'Ash / Slag', quantity: '', unit: 'tons', hazard: 'Non-Hazardous' });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    if (updated.name && updated.quantity) setPreview(runValorizationEngine(updated));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord(form);
    setActiveRoute('database');
  };

  return (
    <div className="grid g2">
      <Card>
        <h3>Analyze Stream</h3>
        <form onSubmit={handleSubmit}>
          <div className="field"><label>Name</label><input name="name" value={form.name} onChange={handleChange} required /></div>
          <div className="field">
            <label>Category</label>
            <select name="category" value={form.category} onChange={handleChange}>
              <option>Ash / Slag</option>
              <option>Metal</option>
              <option>Plastic / Polymer</option>
            </select>
          </div>
          <div className="field"><label>Quantity</label><input type="number" name="quantity" value={form.quantity} onChange={handleChange} required /></div>
          <Button variant="primary" style={{ width: '100%', marginTop: '10px' }}>Save Stream</Button>
        </form>
      </Card>
      <Card>
        <h3>AI Calculation Output</h3>
        {preview ? (
          <div>
            <p><strong>Recyclability:</strong> {preview.kb.pct}%</p>
            <p><strong>Gross Value:</strong> ${Math.round(preview.economics.grossValue)}</p>
          </div>
        ) : <p>Fill form to compute.</p>}
      </Card>
    </div>
  );
};

export default AnalyzeView;