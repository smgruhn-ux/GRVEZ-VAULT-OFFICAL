import React from 'react';
import { HeroArtwork } from '../HeroArtwork';
import './ContactPage.css';

const contactSections = [
  {
    eyebrow: 'GRVEZ VAULT',
    title: 'General Contact',
    description: 'For general correspondence, archive and project inquiries, and media or creative inquiries where appropriate.',
    email: 'contact@grvezvaultofficial.us',
    accent: 'vault',
  },
  {
    eyebrow: 'VAULTLINE',
    title: 'Vaultline',
    description: 'For Vaultline correspondence, editorial inquiries, and brand-related contact.',
    email: 'contact@vaultlineofficial.us',
    accent: 'line',
  },
];

export function ContactPage() {
  return (
    <section className="contact-destination" aria-labelledby="contact-heading">
      <div className="contact-hero">
        <HeroArtwork image="/contact-hero.jpg" alt="GRVEZ VAULT contact artwork" loading="eager" />
        <div className="contact-hero-overlay" aria-hidden="true" />
        <div className="contact-hero-copy">
          <p className="eyebrow">GRVEZ VAULT // CONTACT</p>
          <h1 id="contact-heading">Reach the Vault.</h1>
          <p>Direct correspondence belongs in the channel that fits the work.</p>
        </div>
        <span className="contact-hero-index">OPEN CHANNELS<br />02 / 02</span>
      </div>

      <div className="contact-content">
        <div className="contact-intro">
          <p className="eyebrow">CONTACT PATHWAYS</p>
          <h2>Send the right message<br />to the right place.</h2>
          <p>Choose the address that matches your inquiry. A clear subject and the relevant project or context make the route easier to read.</p>
        </div>

        <div className="contact-pathways">
          {contactSections.map((section, index) => (
            <article className={`contact-pathway contact-pathway-${section.accent}`} key={section.title}>
              <div className="contact-pathway-top"><span>0{index + 1}</span><span>{section.eyebrow}</span></div>
              <div className="contact-pathway-body">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
              <a className="contact-email" href={`mailto:${section.email}`}>
                <span>{section.email}</span><span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <aside className="contact-guidance">
          <div><p className="eyebrow">A CLEAR ROUTE</p><h2>Specific beats broad.</h2></div>
          <p>Use a clear subject line and name the project or context in the first message. It keeps the exchange focused and sends the inquiry to the right place without unnecessary back-and-forth.</p>
        </aside>
      </div>
    </section>
  );
}
