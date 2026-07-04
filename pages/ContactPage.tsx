import React from 'react';
import { HeroArtwork } from '../HeroArtwork';

const contactSections = [
  {
    title: 'General Contact',
    details: ['For inquiries, correspondence, and public contact.', 'contact@grvezvaultofficial.us']
  },
  {
    title: 'Vaultline',
    details: ['For Vaultline correspondence and editorial inquiries.', 'contact@vaultlineofficial.us']
  }
];

export function ContactPage() {
  return (
    <section className="page-section contact-page" aria-labelledby="contact-heading">
      <div className="page-hero">
        <HeroArtwork image="/contact-hero.jpg" alt="GRVEZ VAULT contact artwork" loading="lazy" />
      </div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">Contact</p>
          <h1 id="contact-heading">Reach the vault.</h1>
          <p>Correspondence is welcomed with discretion and clarity. Use the approved addresses below for direct contact.</p>
        </div>
        <div className="contact-grid">
          {contactSections.map((section) => (
            <article key={section.title} className="detail-card">
              <h2>{section.title}</h2>
              {section.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
