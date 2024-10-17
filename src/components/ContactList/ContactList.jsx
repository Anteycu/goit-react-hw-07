import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectMemoVisibleContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectMemoVisibleContacts);

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
