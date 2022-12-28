import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        TALKWORLD CONSULTS
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/talkworlddiary">
          <BsFacebook />
        </a>
        <a href="https://instagram.com/cherryb_luv">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/ultimate_love">
          <BsTwitter />
        </a>
        <a href="https://linkedin.com/aishat_sule">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Aishatibe">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Talkworld Consults. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
