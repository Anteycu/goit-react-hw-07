import axios from "axios";

axios.defaults.baseURL = "https://6700132e4da5bd2375531ab3.mockapi.io/";

export const fetchContacts = () => {
  return axios.get("/contacts");
};

export function updateContacts(contact) {
  return axios.post("/contacts", contact);
}

export function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}
