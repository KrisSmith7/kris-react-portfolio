import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper'

function Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function inputChange(event) {
        //using helper function to match email to regex
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);
            // if "false", send error msg. Otherwise, set empty string
if (!isValid) {
    setErrorMessage('Your email is invalid.');
  } else {
    setErrorMessage('');
  }
          }  else {
            // if no text found in name or message field, send error msg.
            if (!event.target.value.length) {
              setErrorMessage(`${event.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }

        if (!errorMessage) {
          setFormState({...formState, [event.target.name]: event.target.value})
        }
    };
    
    //shows if data is being logged from contact form
    // console.log (formState)
    
//handles form submission - only consoles logs as back-end is not complete    
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <section>
        <h1>Contact me</h1>
        <p>Phone: 555-555-5555; Email: krissmithcodes@gmail.com</p>
        <form id="contact-form" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={inputChange} />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={inputChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={inputChange} />
          </div>
          {errorMessage && (
  <div>
    <p className="error-text">{errorMessage}</p>
  </div>
)}
          <button type="submit">Submit</button>
        </form>
      </section>
    );
};

export default Contact;