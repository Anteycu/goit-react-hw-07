import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://6700132e4da5bd2375531ab3.mockapi.io`,
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts",
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;

// axios.defaults.baseURL = "https://6700132e4da5bd2375531ab3.mockapi.io/";
// export const fetchContacts = () => {
//   return axios.get("/contacts");
// };
// export function updateContacts(contact) {
//   return axios.post("/contacts", contact);
// }
// export function deleteContact(id) {
//   return axios.delete(`/contacts/${id}`);
// }
