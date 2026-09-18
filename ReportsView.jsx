import React from 'react';
import { Card } from '../components/common/Card';
import {Button}  from '../components/common/Button';

export const ReportsView = () => (
  <Card>
    <h2>Reports & Exports</h2>
    <p>Export your portfolio metrics for sustainability audits.</p>
    <Button variant="outline" onClick={() => alert('Exporting CSV...')}>Download CSV Report</Button>
  </Card>
);