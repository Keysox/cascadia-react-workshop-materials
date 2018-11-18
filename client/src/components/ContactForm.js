import React from 'react';
import { Formik } from 'formik';

const initialValues = {
  name: '',
  message: '',
};

const ContactForm = ({ onSubmit }) => (
  <Formik
    validate={values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.message) {
        errors.message = 'Required';
      }
      return errors;
    }}
    initialValues={initialValues}
    onSubmit={onSubmit}
  >
    {({ values, handleChange, handleSubmit, errors, touched }) => (
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <input
              className="input"
              placeholder="Taylor Swift"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              data-testid="name-input"
            />
            <p className="help is-danger">{touched.name && errors.name}</p>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              placeholder="message"
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
              data-testid="message-input"
            />
            <p className="help is-danger">
              {touched.message && errors.message}
            </p>
          </div>
        </div>
        <br />
        <div className="field">
          <div className="control">
            <input
              type="submit"
              value="Submit Form"
              className="button is-primary"
              data-testid="submit-input"
            />
          </div>
        </div>
      </form>
    )}
  </Formik>
);

export default ContactForm;
