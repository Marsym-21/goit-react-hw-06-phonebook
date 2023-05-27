import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [
  { id: 'id-1', dataName: 'Rosie Simpson', dataNumber: '459-12-56' },
  { id: 'id-2', dataName: 'Hermione Kline', dataNumber: '443-89-12' },
  { id: 'id-3', dataName: 'Eden Clements', dataNumber: '645-17-79' },
];

const contactSlice = createSlice({
  name: 'valueContacts',
  initialState: contactsInitialState,

  reducers: {
    getContactValue(state, action) {
      console.log(state.contacts);
      console.log(action.payload);
      // return state.push(action.payload);
    },

    deletContactsValue(state, action) {
      return [...action.payload];
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

// export const contactsValue = state => {
//   console.log(state.contacts);
// };

export const { getContactValue, deletContactsValue } = contactSlice.actions;
