import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'valueFilter',
  initialState: [],
  reducers: {
    contactValue(state, action) {
      return action.payload;
    },
  },
});

// export const { getFilterValue } = filterSlice.actions;
