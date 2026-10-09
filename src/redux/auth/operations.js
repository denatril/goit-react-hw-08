import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';
axios.defaults.timeout = 15000;
export const setAuthHeader = token => { axios.defaults.headers.common.Authorization = `Bearer ${token}`; };
export const clearAuthHeader = () => { delete axios.defaults.headers.common.Authorization; };
export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  } catch { return thunkAPI.rejectWithValue('Unable to create your account. Please check your details.'); }
});
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch { return thunkAPI.rejectWithValue('Unable to sign in. Please check your email and password.'); }
});
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try { await axios.post('/users/logout'); }
  catch (error) {
    if (error.response?.status !== 401) return thunkAPI.rejectWithValue('Unable to sign out. Please try again.');
  }
  clearAuthHeader();
});
export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (!token) return thunkAPI.rejectWithValue(null);
  try {
    setAuthHeader(token);
    const { data } = await axios.get('/users/current');
    return data;
  } catch {
    clearAuthHeader();
    return thunkAPI.rejectWithValue('Unable to restore your session. Please sign in again.');
  }
}, { condition: (_, { getState }) => !getState().auth.isRefreshing });
export { login as logIn, logout as logOut };
