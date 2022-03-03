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
        <section className='flex lg:justify-between px-4 h-full'>
            <div>
        <h1>Contact me</h1>
        <p>Phone: 555-555-5555</p>
        <p>Email: krissmithcodes@gmail.com</p>
            </div>

        <div className='border-2 border-orange/25 bg-gray lg:h-1/2 lg:w-1/2 shadow-2xl shadow-purple/50'>
        <form id="contact-form" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            defaultValue={name} onBlur={inputChange} />
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
        </div>
      </section>
    );
};

export default Contact;