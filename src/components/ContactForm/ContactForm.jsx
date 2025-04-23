import { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {
  state = {
    name: "",
    phone: "",
  };

  handleOnChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    const { name, phone } = this.state;

    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleOnChange}
          />
        </label>
        <label>
          Number
          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={this.handleOnChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ContactForm;
