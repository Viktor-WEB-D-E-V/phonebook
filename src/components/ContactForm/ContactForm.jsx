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

    this.setState({
      name: "",
      phone: "",
    });
  };
  render() {
    const { name, phone } = this.state;

    return (
      <form className="contact-form" onSubmit={this.handleOnSubmit}>
        <label className="form-label">
          Name
          <input
            className="form-input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleOnChange}
          />
        </label>
        <label className="form-label">
          Number
          <input
            className="form-input"
            type="phone"
            name="phone"
            value={phone}
            onChange={this.handleOnChange}
          />
        </label>

        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default ContactForm;
