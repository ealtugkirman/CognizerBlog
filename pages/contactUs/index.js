import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      toast.error('Please fill in all fields.');
      return;
    }
    emailjs
      .sendForm(
        'service_rrz8dtq',
        'template_d0vhhcs',
        form.current,
        'T1RxHy4ukTEgJy-PT',
      )
      .then(
        () => {
          toast.success('Email sent successfully!');
        },
        () => {
          toast.error(
            'Error sending email. Please try again.',
          );
        },
      );
  };

  return (
    <div id="contact">
      <section className="text-black flex-col mb-20 rounded-2xl bg-white font-myfont flex">
        <div>
          <div className="flex flex-col mt-40 text-center ">
            <h1 className="mt-8 text-2xl font-bold ">
              Contact Us
            </h1>
            <p>Contact with The Cognizer</p>
          </div>
          <div className=" w-2/3 mx-auto">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col -m-2"
            >
              <div className="p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    placeholder="Your name"
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    placeholder="thisismy@mail.com"
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Your message
                  </label>
                  <textarea
                    placeholder="Your message"
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 flex justify-center mb-4">
                <button
                  type="submit" // This is the valid attribute to specify the button type
                  value="send"
                  className="text-white hover:bg-black py-2 px-10 focus:outline-none bg-blue-500 rounded-full text-md lg:text-lg"
                >
                  Send
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
