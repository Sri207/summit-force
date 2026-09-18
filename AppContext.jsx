import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const INITIAL_RECORDS = [
  { id: 'WA-1001', name: 'Fly Ash Stream', category: 'Ash / Slag', quantity: 420, unit: 'tons', hazard: 'Non-Hazardous' },
  { id: 'WA-1002', name: 'Steel Slag Waste', category: 'Metal', quantity: 610, unit: 'tons', hazard: 'Non-Hazardous' },
  { id: 'WA-1003', name: 'Waste Plastic', category: 'Plastic / Polymer', quantity: 140, unit: 'tons', hazard: 'Hazardous' }
];

export const AppProvider = ({ children }) => {
  const [records, setRecords] = useState(() => {
    const local = localStorage.getItem('valorix_records');
    return local ? JSON.parse(local) : INITIAL_RECORDS;
  });

  const [theme, setTheme] = useState(localStorage.getItem('valorix_theme') || 'light');
  const [activeRoute, setActiveRoute] = useState('dashboard');
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    localStorage.setItem('valorix_records', JSON.stringify(records));
  }, [records]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('valorix_theme', theme);
  }, [theme]);

  const addToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const addRecord = (record) => {
    const newRecord = { ...record, id: `WA-${1000 + records.length + 1}` };
    setRecords(prev => [newRecord, ...prev]);
    addToast('Stream added successfully!');
  };

  const deleteRecord = (id) => {
    setRecords(prev => prev.filter(r => r.id !== id));
    addToast('Stream removed.');
  };

  return (
    <AppContext.Provider value={{ records, addRecord, deleteRecord, theme, setTheme, activeRoute, setActiveRoute, toasts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

// Added Default Export to resolve module export issues
export default AppContext;