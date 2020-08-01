import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import FormInput from '../components/FormInput';

const validateInputs = (values) => {
    const errors = {};
      Object.entries(values).forEach(([key, value])=>{
      if(!values[key] ){
      errors[key] = `Field ${key} is required!`
      }
    });
    return errors;

}

const INITIAL_VALUES = { url: '' };
const RssFeedParserForm = () => (
  <div>
    <h1>Simple RSS Feed Parser!</h1>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            <Field type="url" 
                   name="url" 
                   label="RSS URL"
                   component={FormInput}/>
         
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RssFeedParserForm;