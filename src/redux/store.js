import contactReducer from "./contacts/contactsReducer";
// import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
