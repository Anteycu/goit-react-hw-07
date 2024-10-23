import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useGetContactsQuery } from "../services/contacts-api";

function App() {
  const { isLoading, error } = useGetContactsQuery("");

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error ? "Request progressing..." : <ContactList />}
    </div>
  );
}

export default App;
