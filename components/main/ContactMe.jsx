'use client'
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

import Shapes from "./Shapes";
// ... (imports and other code)

const ContactMe = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [validationColor, setValidationColor] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      setValidationMessage('Please fill in all required fields.');
      setValidationColor('red');
      return;
    }

    emailjs
      .sendForm('service_sqqvowl', 'template_1dlt6sg', form.current, {
        publicKey: 'Dyl0EPRtQbsaRA5eF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          setValidationMessage('Your message has been successfully sent. I will contact you soon.');
          setValidationColor('green');
          setTimeout(() => {
            setValidationMessage('');
          }, 5000);
  
        },
        (error) => {
          console.log('FAILED...', error.text);
          setValidationMessage('Failed to send the message. Please try again.');
          setTimeout(() => {
            setValidationMessage('');
          }, 5000);
        }
      );
    
  };
  

  return (
    <section className="w-full min-h-screen flex flex-col items-center z-40">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Contact Me
      </h1>
      <div className="h-full w-full grid grid-cols-2 gap-4 max-sm:gap-2 a">
        <div className="max-sm:col-span-2">
          <div className="text-white flex  flex-col gap-5 max-sm:p-10 ">
            <form ref={form} onSubmit={sendEmail} className="flex items-center justify-center min-h-screen">
              <div className="bg-transparent p-8 border overflow-hidden rounded-lg shadow-lg border-[#2A0E61] w-full max-w-md">
                <div className="mb-4">
                  <label htmlFor="name" className="text-gray-300">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full bg-transparent border-b border-[#2A0E61] text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="text-gray-300">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full bg-transparent border-b border-[#2A0E61] text-white"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="text-gray-300">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-transparent border border-[#2A0E61] text-white"
                    rows={5}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    value="Send"
                    className="px-4 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                  >
                    Submit
                  </button>
                  <div className="w-full pt-2" style={{ color: validationMessage ? (validationMessage.includes('successfully') ? 'green' : 'red') : '' }}>
                    {validationMessage && <p>{validationMessage}</p>}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="max-sm:col-span-2">
          <Shapes />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
