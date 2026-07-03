import React from 'react';
import { HeroArtwork } from '../components/HeroArtwork';

export function ManuscriptsPage() {
  return (
    <section className="page-section manuscripts-page" aria-labelledby="manuscripts-heading">
      <div className="page-hero">
        <HeroArtwork image="/manuscripts-hero.jpg" alt="GRVEZ VAULT manuscripts artwork" loading="lazy" />
      </div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">Manuscripts</p>
          <h1 id="manuscripts-heading">Fragments, notes, and ritual text.</h1>
          <p>This section preserves the austere editorial tone of the vault and surfaces the archival side of the project with restrained luxury.</p>
        </div>
        <div className="content-grid">
          <article className="detail-card">
            <h2>Archive</h2>
            <p>Private fragments and notes are presented with the same calm severity as the rest of the experience.</p>
          </article>
          <article className="detail-card">
            <h2>Language</h2>
            <p>Each piece is intentionally sparse, allowing the artwork and pacing to do the emotional work.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
