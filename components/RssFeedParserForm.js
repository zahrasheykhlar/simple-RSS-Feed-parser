import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label, Alert } from 'reactstrap';
import FormInput from '../components/FormInput';
import Pagination from '../components/Pagination';
import RssList from '../components/RssList';

const validateInput = (values) => {
    const errors = {};
      if(!values['url'] ){
      errors['url'] = `Field URL is required!`
      }
    return errors;
}


const INITIAL_VALUES = { url: ''};

const changePage = function(currentItems) {
       INITIAL_VALUES['currentItems'] = currentItems;
    }

class RssFeedParserForm extends React.Component {
constructor() {
    super();
    this.state = { RssItems: [], isSubmited : false };
}

 render() {
        return(
          <div>
              <h1>Simple RSS Feed Parser!</h1>

              <Formik
                initialValues = {INITIAL_VALUES}
                validate = {validateInput}
                onSubmit = {(values, { setSubmitting }) => {
                  setTimeout(async () => {
                      const RSS_URL = values['url'];
                      fetch(RSS_URL)
                        .then(response => response.text())
                        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
                        .then(data => {
                         var items = Array.from(data.querySelectorAll("item"));
                         
                          // update state to render RssList component
                          this.setState({ RssItems: items, isSubmited: true });
                     
                          }).catch(() => {
                          const errorMessage = `<div class="alert alert-danger" role="alert">Can’t access " {RSS_URL} " response. Blocked by browser?</div>`;                         
                          document.body.insertAdjacentHTML("beforeend", errorMessage);
                          }
                          
                          );

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

              {this.state.isSubmited ? (
              <RssList items={this.state.RssItems} />
                     
              ) : <div>Please Insert a Url and press submit button to see the list below!</div>}
              </div>
  )}
};

export default RssFeedParserForm;