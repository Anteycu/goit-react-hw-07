import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

export const selectMemoVisibleContacts = createSelector(
  selectNameFilter,
  (_, contacts) => contacts,
  (nameFilter, contacts) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
);
