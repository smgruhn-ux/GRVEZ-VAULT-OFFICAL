import React from 'react';
import { HeroArtwork } from '../components/HeroArtwork';

export function AboutPage() {
  return (
    <section className="page-section about-page" aria-labelledby="about-heading">
      <div className="page-hero">
        <HeroArtwork image="/about-hero.jpg" alt="GRVEZ VAULT about artwork" loading="lazy" />
      </div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">About</p>
          <h1 id="about-heading">Vaultline by Gizzy Graves</h1>
          <p>GRVEZ VAULT is a private chamber for music, image, and ritual atmosphere. The experience is curated with restraint, texture, and cinematic tension.</p>
        </div>
        <div className="content-grid">
          <article className="detail-card">
            <h2>Editorial vision</h2>
            <p>The identity is cinematic and severe, shaped by obsidian depth, steel textures, and a deliberate crimson pulse that never feels ornamental.</p>
          </article>
          <article className="detail-card">
            <h2>Atmosphere</h2>
            <p>Every page is designed to feel immersive and handcrafted, balancing minimalism with the weight of an archive in motion.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
