import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from '../auth/operations';
const initialState = { items: [], isLoading: false, error: null, requests: [] };
const contactsSlice = createSlice({ name: 'contacts', initialState, reducers: {}, extraReducers: builder => {
  builder.addCase(logOut.fulfilled, () => initialState);
  for (const operation of [fetchContacts, addContact, deleteContact]) {
    builder.addCase(operation.pending, (state, action) => {
      state.requests.push(action.meta.requestId); state.isLoading = true; state.error = null;
    });
    builder.addCase(operation.fulfilled, (state, action) => {
      // Ignore requests belonging to an account that has already logged out.
      if (!state.requests.includes(action.meta.requestId)) return;
      state.requests = state.requests.filter(id => id !== action.meta.requestId);
      state.isLoading = state.requests.length > 0;
      if (operation === fetchContacts) state.items = action.payload;
      if (operation === addContact) state.items.push(action.payload);
      if (operation === deleteContact) state.items = state.items.filter(item => item.id !== action.payload);
    });
    builder.addCase(operation.rejected, (state, action) => {
      if (!state.requests.includes(action.meta.requestId)) return;
      state.requests = state.requests.filter(id => id !== action.meta.requestId);
      state.isLoading = state.requests.length > 0; state.error = action.payload;
    });
  }
} });
export default contactsSlice.reducer;
