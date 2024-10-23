import { useSelector } from "react-redux";
import { useGetContactsQuery } from "../../services/contacts-api";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectMemoVisibleContacts } from "../../redux/selectors";

const ContactList = () => {
  const { data } = useGetContactsQuery("");
  const contacts = useSelector((state) =>
    selectMemoVisibleContacts(state, data)
  );
  return (
    <ul className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <Contact username={name} phoneNum={number} contactId={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
