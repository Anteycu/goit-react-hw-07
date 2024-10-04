import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ username, phoneNum, contactId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contactId));
  return (
    <>
      <div className={css.contactInfo}>
        <h2>{username}</h2>
        <p>{phoneNum}</p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
