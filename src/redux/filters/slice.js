import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
const filtersSlice = createSlice({ name: 'filters', initialState: { name: '' }, reducers: {
  changeFilter: (state, action) => { state.name = action.payload; },
}, extraReducers: builder => builder.addCase(logOut.fulfilled, state => { state.name = ''; }) });
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
