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

const makeListItem =(item) => {
  return  `<article>
                      <img src="${item.querySelector("link").innerHTML}/image/large.png" alt="">
                      <h2>
                        <a href="${item.querySelector("link").innerHTML}" target="_blank" rel="noopener">
                          ${item.querySelector("title").innerHTML}
                        </a>
                      </h2>
                    </article>
                  `;
}

Array.prototype.mymap = function(makeListItem){
  let html = ``;
    for (let i = 0; i < this.length; i++) {
                  html += makeListItem(this[i]);
                };
    return html;
}

const INITIAL_VALUES = { url: '' };

const RssFeedParserForm = () => (
  <div>
    <h1>Simple RSS Feed Parser!</h1>
    <Formik
      initialValues = {INITIAL_VALUES}
      validate = {validateInputs}
      onSubmit = {(values, { setSubmitting }) => {
        setTimeout(async () => {
            const RSS_URL = values['url'];
            fetch(RSS_URL)
              .then(response => response.text())
              .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
              .then(data => {
                const items = Array.from(data.querySelectorAll("item"));
                let html = items.mymap(makeListItem);
                document.body.insertAdjacentHTML("beforeend", html);
              });


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