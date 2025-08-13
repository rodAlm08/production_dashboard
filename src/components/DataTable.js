import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const DataTable = ({ rows }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell>Batch</TableCell>
          <TableCell>Drying Hours</TableCell>
          <TableCell>Finish Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, idx) => (
          <TableRow key={idx}>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.batch}</TableCell>
            <TableCell>{row.dryingHours}</TableCell>
            <TableCell>{row.finishDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default DataTable;
