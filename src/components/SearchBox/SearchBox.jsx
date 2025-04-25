import "./SearchBox.css";
import { FaSearch } from "react-icons/fa";
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
      <p className="search-text">Find contanct by name</p>
      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input
          className="search-input"
          type="text"
          placeholder="Name"
          value={value}
          onChange={onUpdateSearch}
        />
      </div>
    </div>
  );
};

export default SearchBox;
