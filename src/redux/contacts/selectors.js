import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
  const query = filter.trim().toLocaleLowerCase('en');
  const digits = query.replace(/\D/g, '');
  return contacts.filter(({ name, number }) => name.toLocaleLowerCase('en').includes(query) || number.includes(query) || (digits && number.replace(/\D/g, '').includes(digits)));
});
