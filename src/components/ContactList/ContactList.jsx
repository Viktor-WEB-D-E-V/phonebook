import "./ContactList.css";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contactsList }) => {
  return (
    <div className="contacts-list">
      {contactsList.map((contact) => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
