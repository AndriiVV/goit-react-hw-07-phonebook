import axios from "axios";

// https://6214f513cdb9d09717a7b20c.mockapi.io/api/v1/contacts

axios.defaults.baseURL = "https://6214f513cdb9d09717a7b20c.mockapi.io";

const transformGetData = (data) =>
	data.map(({ name, phone, id }) => ({ name, phone, id }));

export const addContactApi = (contact) => {
	return axios
		.post("/api/v1/contacts", contact)
		.then(({ data }) => ({ ...contact, id: data.id }))
		.catch((err) => err);
};

export const getContactApi = () => {
	return axios
		.get("/api/v1/contacts")
		.then(({ data }) => {
			const newData = transformGetData(data);
			// console.log("getContactApi()... newData is: ", newData);
			return newData;
		})
		.catch((err) => err);
};

export const deleteContactApi = (id) => {
	return axios
		.delete(`/api/v1/contacts/${id}`)
		.then(() => id)
		.catch((err) => err);
};
