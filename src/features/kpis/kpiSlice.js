import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchKpis = createAsyncThunk('kpis/fetchKpis', async () => {
  const response = await axios.get('https://mocki.io/v1/07f9a4df-c652-4c54-a0c1-d520eb8f7423');
  return response.data;
});

export const kpiSlice = createSlice({
  name: 'kpis',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
    filter: ''
  },
  reducers: {
    setFilter: (state, action) => { state.filter = action.payload },
    addKpi: (state, action) => { state.data.push(action.payload) }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchKpis.pending, (state) => { state.status = 'loading' })
      .addCase(fetchKpis.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchKpis.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setFilter, addKpi } = kpiSlice.actions;
export default kpiSlice.reducer;
