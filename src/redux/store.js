import { configureStore } from "@reduxjs/toolkit";

import phonebook from "./phonebookSlice";

const store = configureStore({
	reducer: {
		phonebook: phonebook,
	},
});

export default store;
