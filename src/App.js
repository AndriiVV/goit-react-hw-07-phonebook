import "/node_modules/modern-normalize/modern-normalize.css";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "./redux/phonebookOperations";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// console.log("App -> useEffect() -> getContacts()...");
		dispatch(getContacts());
	}, [dispatch]);

	return (
		<div className="App">
			<h1 className="title">Phonebook</h1>
			<ContactForm />
			<h2 className="title">Contacts</h2>
			<Filter />
			<ContactList />
		</div>
	);
};

export default App;
