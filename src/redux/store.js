import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filtersSlice";
import { contactsApi } from "../services/contacts-api";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
