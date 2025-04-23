import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <ContactForm onSubmit={submitHandler} />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
