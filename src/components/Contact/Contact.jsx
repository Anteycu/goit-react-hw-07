import { useDeleteContactMutation } from "../../services/contacts-api";
import css from "./Contact.module.css";

const Contact = ({ username, phoneNum, contactId }) => {
  const [deleteContact] = useDeleteContactMutation();
  const handleDelete = (contactId) => deleteContact(contactId);
  return (
    <>
      <div className={css.contactInfo}>
        <h2>{username}</h2>
        <p>{phoneNum}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          handleDelete(contactId);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
