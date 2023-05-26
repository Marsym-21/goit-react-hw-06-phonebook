import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'valueFilter',
  initialState: '',
  reducers: {
    getFilterValue(state, action) {
      return action.payload;
    },
  },
});
export const filterValue = state => state;

export const { getFilterValue } = filterSlice.actions;
