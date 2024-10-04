import axios from "axios";

axios.defaults.baseURL = "https://6700132e4da5bd2375531ab3.mockapi.io/";

export const fetchContacts = async () => {
  const { data } = await axios.get("/contacts");
  return data;
};

export async function updateContacts(contact) {
  const { data } = await axios.post("/contacts", { contact });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
