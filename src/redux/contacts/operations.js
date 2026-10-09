import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try { return (await axios.get('/contacts')).data; }
  catch { return thunkAPI.rejectWithValue('Unable to load contacts. Please try again.'); }
}, { condition: (_, { getState }) => !getState().contacts.isLoading });
export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try { return (await axios.post('/contacts', contact)).data; }
  catch { return thunkAPI.rejectWithValue('Unable to add contact. Please try again.'); }
});
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try { await axios.delete(`/contacts/${id}`); return id; }
  catch { return thunkAPI.rejectWithValue('Unable to delete contact. Please try again.'); }
});
