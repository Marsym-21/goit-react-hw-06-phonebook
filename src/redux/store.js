import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { persistContactSlice } from './contactSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    valueContacts: persistContactSlice,
    valueFilter: filterSlice.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

// const contactsValue = state => {
//   return state.valueContacts;
// };
// console.log(contactsValue);

export const persistor = persistStore(store);
