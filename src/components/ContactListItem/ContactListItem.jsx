import "./ContactListItem.css";

const ContactListItem = ({ contact }) => {
  const { name, phone } = contact;
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <button>Delete</button>
    </>
  );
};
export default ContactListItem;
