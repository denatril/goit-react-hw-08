import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';
const initialState = { user: { name: null, email: null }, token: null, isLoggedIn: false, isRefreshing: false };
const authenticated = (state, { payload }) => { state.user = payload.user; state.token = payload.token; state.isLoggedIn = true; };
const authSlice = createSlice({ name: 'auth', initialState, reducers: {}, extraReducers: builder => builder
  .addCase(register.fulfilled, authenticated)
  .addCase(login.fulfilled, authenticated)
  .addCase(logout.fulfilled, () => initialState)
  .addCase(refreshUser.pending, state => { state.isRefreshing = true; })
  .addCase(refreshUser.fulfilled, (state, { payload }) => { state.user = payload; state.isLoggedIn = true; state.isRefreshing = false; })
  .addCase(refreshUser.rejected, () => initialState)
});
export default authSlice.reducer;
