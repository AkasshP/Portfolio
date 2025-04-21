import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png'; // adjust path as needed

export default function Navbar() {
  const items = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar container">
      {/* logo image */}
      <div className="logo">
        <img src={logo} alt="Akassh logo" className="logo-image" />
      </div>

      {/* desktop menu */}
      <nav className="desktop-menu">
        <ul>
          {items.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* hamburger toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        {open ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* mobile dropdown */}
      <nav className={`mobile-menu ${open ? 'open' : ''}`}>
        <ul>
          {items.map(item => (
            <li key={item} onClick={() => setOpen(false)}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
