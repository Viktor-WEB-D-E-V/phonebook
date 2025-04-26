import "./ContactListItem.css";
import { FaClipboardUser, FaPhone } from "react-icons/fa6";
const ContactListItem = ({ contact, onDelete }) => {
  const { name, phone } = contact;
  return (
    <div className="list-item">
      <div className="list-item-info">
        <p className="item-name">
          <FaClipboardUser /> {name}
        </p>
        <p className="item-phone">
          <FaPhone /> {phone}
        </p>
      </div>
      <button onClick={onDelete} className="remove-item">
        Delete
      </button>
    </div>
  );
};
export default ContactListItem;
