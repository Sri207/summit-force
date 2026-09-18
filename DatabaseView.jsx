import React from 'react';
import { useApp } from '../context/AppContext';
import { Card } from '../components/common/Card';

export const DatabaseView = () => {
  const { records, deleteRecord } = useApp();

  return (
    <Card>
      <h3>Registered Streams Database</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map(r => (
            <tr key={r.id}>
              <td className="mono">{r.id}</td>
              <td>{r.name}</td>
              <td>{r.category}</td>
              <td>{r.quantity} {r.unit}</td>
              <td>
                <button className="btn btn-outline" onClick={() => deleteRecord(r.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

// Default Export added to resolve module import error in App.jsx
export default DatabaseView;