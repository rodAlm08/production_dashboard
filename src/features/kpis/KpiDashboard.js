import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKpis, setFilter, addKpi } from './kpiSlice';
import DataTable from '../../components/DataTable';
import FilterBar from '../../components/FilterBar';
import ProductionForm from '../../components/ProductionForm';
import { CircularProgress, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const KpiDashboard = () => {
  const dispatch = useDispatch();
  const { data, status, error, filter } = useSelector(state => state.kpis);

  useEffect(() => { dispatch(fetchKpis()) }, [dispatch]);

  const filteredData = data.filter(item =>
    item.product.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>Production KPI Dashboard</Typography>

      <FilterBar value={filter} onChange={val => dispatch(setFilter(val))} />
      <ProductionForm onSubmit={values =>
        dispatch(addKpi({ ...values, finishDate: new Date().toISOString().split('T')[0] }))
      }/>

      {status === 'loading' && <CircularProgress />}
      {status === 'failed' && <Typography color="error">{error}</Typography>}
      {status === 'succeeded' && (
        <>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredData}>
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="dryingHours" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
          <DataTable rows={filteredData} />
        </>
      )}
    </div>
  );
};

export default KpiDashboard;
