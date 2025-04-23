import "./ContactList.css";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contactsList }) => {
  return (
    <>
      {contactsList.map((contact) => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </>
  );
};

export default ContactList;
