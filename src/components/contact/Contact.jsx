import React from 'react';
import './contact.css';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sfmgiim',
      'template_tdk0rp9',
      form.current,
      'cwq5M-hiqLqopsnCT'
    );
    e.target.reset();
  };
  return (
    <div>
      <section id="contact">
        <h5>Reach Out</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMailOpen className="contact__option-icon" />
              <h4>Email</h4>
              <h5>dummy@gmail.com</h5>
              <a href="mailto:dummy@gmail.com" target="_blank">
                Send a Message
              </a>
            </article>
            <article className="contact__option">
              <FaFacebookMessenger className="contact__option-icon" />
              <h4>Massenger</h4>
              <h5>@Talkworld</h5>
              <a href="https://m.me/talkworld1" target="_blank">
                Send a Message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>Talkworld Consults</h5>
              <a
                href="https://api.whatsapp.com/send?phone+2348077371889"
                target="_blank"
              >
                Send a Message
              </a>
            </article>
          </div>
          {/* end of contact options */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input type="text" name="name" placeholder="Your email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
