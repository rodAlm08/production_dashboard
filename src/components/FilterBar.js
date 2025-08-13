import React from 'react';
import { TextField } from '@mui/material';

const FilterBar = ({ value, onChange }) => (
  <TextField
    label="Filter by Product"
    variant="outlined"
    value={value}
    onChange={e => onChange(e.target.value)}
    style={{ marginBottom: '1rem' }}
  />
);

export default FilterBar;
