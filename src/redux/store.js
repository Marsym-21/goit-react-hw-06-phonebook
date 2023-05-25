import { configureStore, createSlice } from '@reduxjs/toolkit';

// export const getFilterValue = createAction('valueFilter / getFilterValue');

// const filterReducer = createReducer('', {
//   [getFilterValue]: (state, action) => {
//     return action.payload;
//   },
// });

const filterSlice = createSlice({
  name: 'valueFilter',
  initialState: '',
  reducers: {
    getFilterValue(state, action) {
      return action.payload;
    },
  },
});

export const { getFilterValue } = filterSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: [],
    valueFilter: filterSlice.reducer,
  },
});
