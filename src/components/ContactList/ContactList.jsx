import styles from "./ContactList.module.css"
import { useSelector } from "react-redux";

import { deleteContact } from "../../redux/phonebookOperations";
import { useDispatch } from "react-redux";

const ContactList = () => {

  const contacts = useSelector((state) => state.phonebook.items);
  const seek = useSelector((state) => state.phonebook.filter);

  const isLoading = useSelector((state) => state.phonebook.isLoading);

  // console.log("ContactsList() is running...", contacts);

  const dispatch = useDispatch();
  
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts
        .filter((c) => {
          return c.name.toLowerCase().indexOf(seek.toLowerCase()) > -1
        })
        .map(contact => (
          <li className={styles.item} key={contact.id}><span>{contact.name}: {contact.phone}</span>
            <button className={styles.btn} type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
          </li>
      ))}
      {isLoading && <h3>Updating...</h3>}
    </ul>
  )
}

export default ContactList;