import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contacts/reduser';
import userReduser from './auth/authReduser';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistItems = {
  key: 'auth',
  storage: storage,
  ourToken: ['token'],
};

export const store = configureStore({
  reducer: {
    state: contactReducer,
    auth: persistReducer(persistItems, userReduser),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
