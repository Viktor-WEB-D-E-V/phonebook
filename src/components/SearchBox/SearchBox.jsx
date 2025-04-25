import "./SearchBox.css";
import { useState } from "react";
const SearchBox = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const onUpdateSearch = (event) => {
    const value = event.target.value;
    setValue(value);
    onSearch(value);
  };

  return (
    <div className="contact-search-form">
      <label>
        <p>Find contanct by name</p>
        <input type="text" value={value} onChange={onUpdateSearch} />
      </label>
    </div>
  );
};

export default SearchBox;
