import "./ContactForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    phone: "",
  };

  const schema = yup.object().shape({
    name: yup.string().min(3).max(50).required(),
    phone: yup.string().min(9).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className="contact-form">
        <label className="form-label" htmlFor="name">
          Name
          <Field className="form-input" type="text" name="name" />
          <ErrorMessage name="name" component={"div"} />
        </label>
        <label className="form-label" htmlFor="phone">
          Number
          <Field className="form-input" type="phone" name="phone" />
          <ErrorMessage name="phone" component={"div"} />
        </label>
        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

// class ContactForm extends Component {
//   state = {
//     name: "",
//     phone: "",
//   };

//   handleOnChange = (e) => {
//     const { name, value } = e.currentTarget;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleOnSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);

//     this.setState({
//       name: "",
//       phone: "",
//     });
//   };
//   render() {
//     const { name, phone } = this.state;
//   }
// }

export default ContactForm;
