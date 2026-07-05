import React from 'react';
import { HeroArtwork } from '../HeroArtwork';

const archiveSections = [
  {
    title: 'FRAGMENT 001 // THE FIRST FRACTURE',
    body: 'The pair begins in unity and then loses it. Awareness is the first fracture.',
  },
  {
    title: 'FRAGMENT 002 // THE WRITTEN BODY',
    body: 'The written word becomes the body of the relationship. The bond survives through language.',
  },
  {
    title: 'FRAGMENT 003 // THE MIRROR HALL',
    body: 'The relationship becomes a mirror in which each partner sees aspects of the self that cannot remain hidden.',
  },
  {
    title: 'FRAGMENT 012 // CONSCIOUS CO-AUTHORSHIP',
    body: 'The individuals become aware that they are participating in a symbolic system that they are actively creating together.',
  },
];

export function ArchivePage() {
  return (
    <section
      className="page-section manuscripts-page"
      aria-labelledby="archive-heading"
    >
      <div className="page-hero">
        <HeroArtwork
          image="/manuscripts-hero.jpg"
          alt="GRVEZ VAULT archive artwork"
        />
      </div>

      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">THE ARCHIVE</p>

          <h1 id="archive-heading">
            Where the wound meets the halo.
          </h1>

          <p className="archive-quote">
            From the garden through the grave.
          </p>

          <p>
            Fragments recovered from the Relational Continuity Hypothesis.
            Twelve stages. One evolving bond. No fragment exists alone.
          </p>
        </div>

        <div className="continuity-chamber">
          <div className="continuity-orbit orbit-one"></div>
          <div className="continuity-orbit orbit-two"></div>
          <div className="continuity-orbit orbit-three"></div>

          <div className="continuity-core">
            <span className="continuity-number">12</span>
            <span className="continuity-label">STAGES</span>
          </div>

          <div className="continuity-mark mark-nine">09</div>
          <div className="continuity-mark mark-eleven">11</div>

          <p className="continuity-caption">
            TWO AUTHORS // ONE CONTINUITY
          </p>
        </div>

        <div className="manuscript-coming-soon">
          <p className="eyebrow">THE MANUSCRIPT</p>
          <h2>RELATIONAL CONTINUITY HYPOTHESIS</h2>
          <p>
            The complete manuscript is currently being prepared for release.
          </p>
          <span className="manuscript-status">COMING SOON</span>
        </div>

        <div className="archive-grid">
          {archiveSections.map((section) => (
            <article
              key={section.title}
              className="archive-panel"
            >
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}