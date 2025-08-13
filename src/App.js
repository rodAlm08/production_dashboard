import React from 'react';
import { Container } from '@mui/material';
import KpiDashboard from './features/kpis/KpiDashboard';

function App() {
  return (
    <Container style={{ marginTop: '2rem' }}>
      <KpiDashboard />
    </Container>
  );
}

export default App;
