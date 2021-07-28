import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Eric Muchogo</h2>
        <p><a href="mailto:ericmuchogo@gmail.com">ericmuchogo@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Eric. I like building things.
        I am a <a href="https://icme.stanford.edu/">Karatina University</a> graduate, CPA K, and
        the co-founder of <a href="https://arthena.com">Vooka</a>. Before Vooka I was
        a Freelance web developer, HR Proffessinal, and accountant .
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Eric D&apos;Muchogo <Link to="/">ericmuchogo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
