import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'valueContacts',
  initialState: [
    { id: 'id-1', dataName: 'Rosie Simpson', dataNumber: '459-12-56' },
    { id: 'id-2', dataName: 'Hermione Kline', dataNumber: '443-89-12' },
    { id: 'id-3', dataName: 'Eden Clements', dataNumber: '645-17-79' },
  ],
  reducers: {
    getContactValue(state, action) {
      return [...state, action.payload];
    },
    deletContactsValue(state, action) {
      return [...action.payload];
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistContactSlice = persistReducer(
  persistConfig,
  contactSlice.reducer
);
export const contactsValue = state => state.contacts;

export const { getContactValue, deletContactsValue } = contactSlice.actions;
