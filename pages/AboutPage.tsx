import React from "react";
import { HeroArtwork } from "../HeroArtwork";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const pillars = [
  { number: "01", title: "Music", text: "Original songs, recorded releases, demos, and audio work held across the Vault.", link: "/music", action: "Enter Music" },
  { number: "02", title: "Manuscripts & Writing", text: "Poetry, essays, and manuscript projects that preserve the written work as it develops.", link: "/manuscripts", action: "Read the Work" },
  { number: "03", title: "Film & Documentary", text: "Documentary films, short-form visual work, and recorded material developed through GRVEZ VAULT.", link: "/films", action: "View Films" },
  { number: "04", title: "Visual Art & Design", text: "Photography, visual art, design direction, symbolism, and the aesthetic language of the Vault.", link: "/media", action: "View Visuals" },
  { number: "05", title: "Vaultline", text: "Apparel and design created through Vaultline by Gizzy Graves, the merchandise arm connected to GRVEZ VAULT.", link: "/vaultline", action: "Enter Vaultline" },
];
const pathways = [
  ["01", "Music", "/music"], ["02", "Archive", "/archive"], ["03", "Relational Continuity", "/relational-continuity"], ["04", "Films & Media", "/films"], ["05", "Vaultline", "/vaultline"], ["06", "Contact", "/contact"],
];

export function AboutPage() {
  return <main className="about-destination" aria-labelledby="about-heading">
    <section className="about-hero"><HeroArtwork image="/about-hero.jpg" alt="About GRVEZ VAULT" loading="eager" /><div className="about-hero-overlay" aria-hidden="true" /><div className="about-hero-copy"><p className="eyebrow">ABOUT // IDENTITY STATEMENT</p><h1 id="about-heading">GRVEZ<br /><em>VAULT</em></h1><p>Built by Sheldyn Gruhn to hold the music, writing, film, visual work, personas, and evolving body of work connected to the project.</p></div><span className="about-hero-index">ORIENTATION<br />01 / 05</span></section>
    <div className="about-content">
      <section className="about-identities"><div className="about-section-intro"><p className="eyebrow">THE PEOPLE WITHIN THE VAULT</p><h2>One body of work.<br />Distinct identities.</h2></div><div className="about-identity-list"><article><span className="about-index">01</span><div><p className="eyebrow">FOUNDER / SONGWRITER / CREATIVE DIRECTOR</p><h3>Sheldyn Gruhn</h3><p>Sheldyn Gruhn founded GRVEZ VAULT and directs the writing, music, visual language, film, design, and archive that give the project its form.</p></div></article><article><span className="about-index">02</span><div><p className="eyebrow">ARTIST IDENTITY</p><h3>Gizzy Graves</h3><p>Gizzy Graves is the artist identity curated by Sheldyn Gruhn, connected to the music and visual language developed under the name.</p><Link to="/about/gizzy-graves" className="about-inline-link">View Gizzy Graves</Link></div></article><article><span className="about-index">03</span><div><p className="eyebrow">DISTINCT CREATIVE IDENTITY / COUNTERPART</p><h3>DMONIX</h3><p>DMONIX is a distinct creative identity within GRVEZ VAULT and the counterpart to Gizzy Graves, with his own presence across the project's visual world and collaborations.</p><Link to="/about/dmonix" className="about-inline-link">View DMONIX</Link></div></article></div></section>
      <section className="about-pillars"><div className="about-section-intro"><p className="eyebrow">WHAT THE VAULT HOLDS</p><h2>Work with a trace.</h2><p>Music, writing, film, visual work, design, and the connected projects remain part of one evolving body of work.</p></div><div className="about-pillar-list">{pillars.map((pillar) => <article key={pillar.number}><div className="about-pillar-top"><span>{pillar.number}</span><span>{pillar.title}</span></div><div><h3>{pillar.title}</h3><p>{pillar.text}</p><Link to={pillar.link} className="about-inline-link">{pillar.action} <span aria-hidden="true">↗</span></Link></div></article>)}</div></section>
      <section className="about-chronology"><p className="eyebrow">THE ARCHIVE</p><h2>Chronology<br />Preserved.</h2><div className="about-chronology-copy"><p>GRVEZ VAULT preserves how the work develops over time, keeping songs, writing, visuals, film, symbols, identities, and related material connected to the periods and projects they came from.</p><p>The archive holds the work in sequence so the relationship between an idea, its form, and its later development remains visible without flattening the differences between them.</p></div></section>
      <section className="about-directory"><div><p className="eyebrow">NAVIGATE</p><h2>The Vault map.</h2></div><nav aria-label="About page pathways">{pathways.map(([number, label, link]) => <Link key={link} to={link}><span>{number}</span><strong>{label}</strong><i aria-hidden="true">↗</i></Link>)}</nav></section>
    </div>
  </main>;
}
