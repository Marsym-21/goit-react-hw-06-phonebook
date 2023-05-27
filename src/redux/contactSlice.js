import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const value = [
  { id: 'id-1', dataName: 'Rosie Simpson', dataNumber: '459-12-56' },
  { id: 'id-2', dataName: 'Hermione Kline', dataNumber: '443-89-12' },
  { id: 'id-3', dataName: 'Eden Clements', dataNumber: '645-17-79' },
];

export const contactSlice = createSlice({
  name: 'valueContacts',
  initialState: { contacts: value },

  reducers: {
    getContactValue(state, action) {
      state.contacts.push(action.payload);
    },

    deletContactsValue(state, action) {
      state.contacts = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistContactSlice = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { getContactValue, deletContactsValue } = contactSlice.actions;
