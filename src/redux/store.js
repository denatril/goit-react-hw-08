import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import authReducer from './auth/slice';
import contactsSliceReducer from './contacts/slice';
import filtersSliceReducer from './filters/slice';
const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] };
export const store = configureStore({
  reducer: { contacts: contactsSliceReducer, filters: filtersSliceReducer, auth: persistReducer(authPersistConfig, authReducer) },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] } }),
});
export let persistor = persistStore(store);
