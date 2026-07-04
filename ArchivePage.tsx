import React from 'react';
import { HeroArtwork } from '../HeroArtwork';

const archiveSections = [
  {
    title: 'Introduction',
    body: 'The Archive frames the GRVEZ VAULT world as an immersive study in fracture, continuity, and symbolic architecture.'
  },
  {
    title: 'Origins',
    body: 'A sequence of motifs and visual fragments traces the emergence of ritual, wound, and halo as recurring forms.'
  },
  {
    title: 'The Fracture',
    body: 'The narrative turns toward the rupture that separates image from meaning and memory from form.'
  },
  {
    title: 'The Twelve Stages',
    body: 'Each stage carries a distinct emotional and symbolic weight, moving through relic, echo, and return.'
  }
];

export function ArchivePage() {
  return (
    <section className="page-section manuscripts-page" aria-labelledby="archive-heading">
      <div className="page-hero">
        <HeroArtwork image="/manuscripts-hero.jpg" alt="GRVEZ VAULT archive artwork" loading="lazy" />
      </div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">The Archive</p>
          <h1 id="archive-heading">Where the wound meets the halo.</h1>
          <p className="archive-quote">From the garden through the grave.</p>
          <p>This exhibition is a cinematic interpretation of continuity, memory, and symbolic architecture—designed to feel like an intimate museum of fragments.</p>
        </div>
        <div className="archive-grid">
          {archiveSections.map((section) => (
            <article key={section.title} className="archive-panel">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
