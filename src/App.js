import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about" className="section container"><About /></section>
      <section id="skills" className="section container"><Skills /></section>
      <section id="experience" className="section container"><Experience /></section>
      <section id="projects" className="section container"><Projects /></section>
      <section id="contact" className="section container"><Contact /></section>
      <Footer />
    </>
  );
}
