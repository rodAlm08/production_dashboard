import { configureStore } from '@reduxjs/toolkit';
import kpiReducer from '../features/kpis/kpiSlice';

export const store = configureStore({
  reducer: {
    kpis: kpiReducer
  }
});
