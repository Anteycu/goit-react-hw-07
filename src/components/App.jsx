import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useGetContactsQuery } from "../services/contacts-api";

function App() {
  const { isFetching, error } = useGetContactsQuery("");

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isFetching && !error ? "Request progressing..." : <ContactList />}
    </div>
  );
}

export default App;
