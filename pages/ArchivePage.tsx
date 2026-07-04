import React from 'react';
import { HeroArtwork } from '../HeroArtwork';

const archiveSections = [
  {
    title: 'FRAGMENT 001 // THE FIRST FRACTURE',
    body: 'The pair begins in unity and then loses it. Awareness is the first fracture in the unified field of unconscious union. It is the moment when perception arrives and innocence ends.'
  },
  {
    title: 'FRAGMENT 002 // THE WRITTEN BODY',
    body: 'The written word becomes the body of the relationship. The bond survives through language, memory, and internalization. The individuals carry each other within their inner worlds.'
  },
  {
    title: 'FRAGMENT 003 // THE MIRROR HALL',
    body: 'The relationship becomes a mirror in which each partner sees aspects of the self that cannot be seen alone. The reflection is not always comfortable. It reveals shadow and light.'
  },
  {
    title: 'FRAGMENT 012 // CONSCIOUS CO-AUTHORSHIP',
    body: 'The individuals become aware that they are participating in a symbolic system that they are also creating. They become both participants and authors of a shared narrative.'
  }
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
          <div className="manuscript-coming-soon">
  <p className="eyebrow">THE MANUSCRIPT</p>
  <h2>RELATIONAL CONTINUITY HYPOTHESIS</h2>
  <p>
    The complete manuscript is currently being prepared for release.
  </p>
  <span className="manuscript-status">COMING SOON</span>
</div>
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