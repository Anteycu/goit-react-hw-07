import { createSelector } from "@reduxjs/toolkit";
// import { contactsApi } from "../services/contacts-api";

// export const selectContacts = (state) =>
//   contactsApi.endpoints.getContacts.select()(state);
export const selectNameFilter = (state) => state.filters.name;

export const selectMemoVisibleContacts = createSelector(
  (state) => state.filters.name,
  (_, contacts) => contacts,
  (nameFilter, contacts) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
);

// export const selectMemoVisibleContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contactsResponse, nameFilter) => {
//     // console.log(contactsResponse.data, nameFilter);
//     return contactsResponse.data.filter((contact) =>
//       contact.name.toLowerCase().includes(nameFilter.toLowerCase())
//     );
//   }
// );
