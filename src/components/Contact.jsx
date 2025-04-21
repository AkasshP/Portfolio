import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <center><h2>Get in Touch</h2></center>
      <form className="contact-form">
        <input type="text"    placeholder="Your Name"  required />
        <input type="email"   placeholder="Your Email" required />
        <textarea rows={4}    placeholder="Message"    required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
