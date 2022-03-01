import React, { useState } from 'react';

function Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const {name, email, message} = formState;

    function inputChange(event) {
        setFormState({...formState, [event.target.name]: event.target.value})
    }
console.log (formState)
    return (
        <section>
        <h1>Contact me</h1>
        <form id="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onChange={inputChange} />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onChange={inputChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onChange={inputChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
};

export default Contact;