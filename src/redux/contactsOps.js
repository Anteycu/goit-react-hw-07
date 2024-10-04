import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsApi from "../services/contacts-api";

export const fetchContacts = createAsyncThunk("", () => {
  contactsApi.fetchContacts();
});

export const addContact = createAsyncThunk("", () => {
  contactsApi.updateContacts({});
});

export const deleteContact = createAsyncThunk("", () => {
  contactsApi.deleteContact("");
});
