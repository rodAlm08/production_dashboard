import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Paper } from '@mui/material';

const ProductionForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { product: '', batch: '', dryingHours: '' },
    validationSchema: Yup.object({
      product: Yup.string().required('Required'),
      batch: Yup.string().required('Required'),
      dryingHours: Yup.number().required('Required').positive()
    }),
    onSubmit: (values, { resetForm }) => { onSubmit(values); resetForm(); }
  });

  return (
    <Paper style={{ padding: '1rem', marginBottom: '1rem' }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Product" name="product" value={formik.values.product}
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          error={formik.touched.product && Boolean(formik.errors.product)}
          helperText={formik.touched.product && formik.errors.product}
          fullWidth margin="normal"
        />
        <TextField
          label="Batch" name="batch" value={formik.values.batch}
          onChange={formik.handleChange} onBlur={formik.handleBlur}
          error={formik.touched.batch && Boolean(formik.errors.batch)}
          helperText={formik.touched.batch && formik.errors.batch}
          fullWidth margin="normal"
        />
        <TextField
          label="Drying Hours" name="dryingHours" type="number"
          value={formik.values.dryingHours} onChange={formik.handleChange} onBlur={formik.handleBlur}
          error={formik.touched.dryingHours && Boolean(formik.errors.dryingHours)}
          helperText={formik.touched.dryingHours && formik.errors.dryingHours}
          fullWidth margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">Add Record</Button>
      </form>
    </Paper>
  );
};

export default ProductionForm;
