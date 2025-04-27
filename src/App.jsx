import { nanoid } from "nanoid";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";

const LOCALSTORAGE_KEY = "contact-list";

function App() {
  const [contactsList, setContactsList] = useState(() => {
    const savedContacts = JSON.parse(
      window.localStorage.getItem(LOCALSTORAGE_KEY)
    );
    if (savedContacts !== null) {
      return savedContacts;
    }

    return [
      { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
      { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
    ];
  });

  useEffect(() => {
    const contactListStringify = JSON.stringify(contactsList);

    window.localStorage.setItem(LOCALSTORAGE_KEY, contactListStringify);
  }, [contactsList]);

  const [searchName, setSearchName] = useState("");

  const submitHandler = ({ name, phone }) => {
    const newContact = {
      id: nanoid(),
      name,
      phone,
    };
    setContactsList((prev) => [...prev, newContact]);
  };

  const handleSearchName = (value) => {
    setSearchName(value);
  };

  const handleDeleteContact = (id) => {
    const updateList = contactsList.filter((contact) => contact.id !== id);
    setContactsList(updateList);
  };
  const filteredContacts = searchName
    ? contactsList.filter((contact) =>
        contact.name.toLowerCase().includes(searchName.toLowerCase())
      )
    : contactsList;

  return (
    <div className="container">
      <ContactForm onSubmit={submitHandler} />
      <SearchBox onSearch={handleSearchName} />
      <ContactList
        onDelete={handleDeleteContact}
        contactsList={filteredContacts}
      />
    </div>
  );
}

export default App;
