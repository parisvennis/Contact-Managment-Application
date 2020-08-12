const getState = ({ getStore, setStore }) => {
	return {
		store: {
			allContacts: []
		},
		actions: {
			addContact: (name, phone, address, email, id) => {
				const store = getStore();
				// must do this to have access to the store = this is different than state
				const newContact = [{ name, address, phone, email, id }];
				const contactArr = store.allContacts.concat(newContact);
				// concat = combines two pieces of data
				setStore({ allContacts: contactArr });
				// switched from allContacts to contactArr
			},
			editContact: (name, phone, address, email, id) => {
				const store = getStore();
				const modContact = { name, phone, address, email, id };
				const updatedContact = store.allContacts.map((value, i) => (index === iDel ? modContact : value));
				setStore({ allContacts: updatedContact });
			}
		},
		deleteContact: iDel => {
			const store = getStore();
			const updatedContact = store.allContacts.filter((value, i) => i !== iDel);
			setStore({ allContacts: updatedContact });
		}
		//(Arrow) Functions that update the Store
		// Remember to use the scope: scope.state.store & scope.setState()
	};
};

export default getState;
