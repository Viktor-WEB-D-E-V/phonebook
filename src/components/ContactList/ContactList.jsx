import "./ContactList.css";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contactsList, onDelete }) => {
  return (
    <div className="contacts-list">
      {contactsList.map((contact) => {
        return (
          <ContactListItem
            key={contact.id}
            onDelete={() => {
              onDelete(contact.id);
            }}
            contact={contact}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
