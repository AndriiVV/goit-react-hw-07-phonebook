import styles from "./ContactForm.module.css"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addContact } from "../../redux/phonebookOperations";

const ContactForm = () => {

  const [state, setState] = useState({name: "", phone: ""});

  const dispatch = useDispatch();
  
  const contacts = useSelector((state) => state.phonebook.items);

  const getInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  
  const handleSubmit = (e) => {
    // console.log("Add contact pressed...", state);
    e.preventDefault();

    if (contacts.find((item) => item.name === state.name)) {
		  alert(`${state.name} is already in contacts!`);
		  return;
	  }

    dispatch(addContact({ name: state.name, phone: state.phone }));
    setState({name: "", phone: ""});
  }
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.title}>Name</span>
        <input type="text"
          name="name"
          onChange={getInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={state.name}
          required/>
      </label>

      <label className={styles.field}>
        <span className={styles.title}>Number</span>
        <input type="tel"
          name="phone"
          onChange={getInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={state.phone}
          required/>
      </label>

      <button className={styles.button} type="submit">Add contact</button>
    </form>
  )
  
}

export default ContactForm;