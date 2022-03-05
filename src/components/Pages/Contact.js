import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper'

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function inputChange(event) {
    //using helper function to match email to regex
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      console.log(isValid);
      // if "false", send error msg. Otherwise, set empty string
      if (!isValid) {
        setErrorMessage("Wait! Something's wrong with your email address");
      } else {
        setErrorMessage('');
      }
    } else {
      // if no text found in name or message field, send error msg.
      if (!event.target.value.length) {
        setErrorMessage(`Uh oh! You didn't tell me your ${event.target.name}!`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value })
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
    <section className='bg-gray h-full'>
      <div className='container py-12 px-6 h-full'>

        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class="xl:w-10/12">
            <div class="block shadow-lg rounded-lg">
              <div class="lg:flex lg:flex-wrap g-0">
                <div
                  className="lg:w-6/12 flex items-center bg-royal-purple lg:rounded-l-lg rounded-b-lg lg:rounded-br-none"
                >
                  <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h1 className='font-semibold mb-6'>Contact me</h1>
                    <p>Phone: (919) 410-7372<br />
                      Email: krissmithcodes@gmail.com
                    </p>


                  </div>

                  {/* end of gradient div */}
                </div>
                <div class="bg-orange lg:w-6/12 md:px-0">
                  <div class="md:py-4 md:mx-6">





                    {/* svg image for chat icons in message box */}
                    <div className='flex justify-center bg-orange rounded-t-lg'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="500" height="200" fill="4e1846" viewBox="0 0 500 400">
                        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                          fill="#4e1846" stroke="#b93aa7">
                          <path d="M727 3970 c-107 -19 -194 -89 -245 -198 l-27 -57 0 -475 0 -475 29
-63 c20 -42 47 -80 86 -115 82 -76 140 -92 338 -92 l152 0 0 -223 c0 -194 2
-223 16 -229 17 -6 17 -7 253 271 l151 178 183 -1 182 -2 0 378 c0 415 -1 407
63 497 27 36 51 56 96 77 l61 29 334 0 333 0 -4 123 c-4 109 -7 128 -33 182
-35 72 -108 148 -172 178 l-48 22 -850 2 c-467 0 -871 -3 -898 -7z m1798 -50
c63 -30 103 -70 138 -135 34 -64 39 -88 40 -195 l2 -85 -325 -5 c-305 -5 -328
-6 -371 -26 -67 -31 -124 -87 -156 -152 l-28 -57 -3 -372 -3 -373 -167 0
c-195 0 -171 11 -293 -135 -158 -190 -262 -310 -270 -313 -4 -2 -8 92 -9 209
0 129 -5 218 -11 225 -7 9 -61 13 -182 16 -167 3 -174 4 -227 32 -75 39 -114
78 -152 155 l-33 66 0 465 0 465 27 55 c45 94 99 145 187 176 28 10 221 13
905 14 l868 0 63 -30z"/>
                          <path d="M2172 3329 c-50 -15 -137 -105 -154 -159 -10 -34 -13 -139 -13 -440
0 -352 2 -400 17 -440 22 -56 75 -112 132 -139 40 -20 59 -21 402 -21 l359 0
40 -49 c145 -176 238 -281 251 -281 12 0 14 28 14 165 l0 165 234 0 c272 0
294 5 364 85 71 81 74 97 70 542 -3 383 -3 389 -26 435 -29 58 -97 120 -150
136 -49 15 -1489 15 -1540 1z m1562 -39 c59 -30 104 -82 117 -136 15 -64 10
-823 -5 -859 -20 -46 -64 -94 -110 -117 -38 -20 -58 -21 -272 -23 -199 -1
-234 -4 -248 -17 -13 -14 -16 -42 -16 -165 l-1 -148 -22 26 c-12 14 -71 85
-132 157 -60 72 -119 135 -130 139 -11 4 -177 8 -370 9 -302 1 -355 3 -385 17
-54 25 -78 50 -105 109 l-25 53 0 395 c0 311 3 403 14 435 22 62 69 111 128
133 51 20 78 20 783 19 l730 -2 49 -25z"/>
                        </g>
                      </svg>




                    </div>
                    <div className='px-2 py-2 bg-gray rounded-md'>
                      <form id="contact-form" onSubmit={handleFormSubmit}>
                        <div className='px-4 py-8'>
                          {/* <label htmlFor="name">Name:</label> */}
                          <input type="text" name="name" placeholder="What's your name?" className=
                            "form-control"
                            defaultValue={name} onBlur={inputChange} />
                        </div>
                        <div className='px-4 pb-8'>
                          {/* <label htmlFor="email">Email address:</label> */}
                          <input type="email" name="email" placeholder="and your email?" className=
                            "form-control"
                            defaultValue={email} onBlur={inputChange} />
                        </div>
                        <div className='px-4'>
                          {/* <label htmlFor="message">Message:</label> */}
                          <textarea name="message" rows="5" placeholder="Leave me a message!" className=
                            "form-control"
                            defaultValue={message} onBlur={inputChange} />
                        </div>
                        {errorMessage && (
                          <div>
                            <p className="error-text text-sm font-bold text-center py-2">{errorMessage}</p>
                          </div>
                        )}
                        <button type="submit" className="bg-royal-purple font-shrikhand text-purple text-3xl leading-loose uppercase rounded-md px-24 my-2">
                       
                          Submit
            
                          </button>
                      </form>
                    </div>




                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        {/* end of container div */}
      </div>

    </section>
  );
};

export default Contact;