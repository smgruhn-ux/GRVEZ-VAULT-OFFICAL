import React from 'react';
import { HeroArtwork } from '../HeroArtwork';

export function AboutPage() {
  return (
    <>
      <section className="page-section about-page" aria-labelledby="about-heading">
        <div className="page-hero">
          <HeroArtwork
            image="/about-hero.jpg"
            alt="GRVEZ VAULT about artwork"
            loading="lazy"
          />
        </div>

        <div className="page-content">
          <div className="page-intro">
            <p className="eyebrow">ABOUT</p>

            <h1 id="about-heading">
              About GRVEZ VAULT
            </h1>

            <p>
              GRVEZ VAULT is a living archive where music,
              visual art, manuscripts, apparel, and cinematic
              storytelling exist as one connected body of work.
            </p>
          </div>

          <div className="content-grid">
            <article className="detail-card">
              <h2>Editorial Vision</h2>
              <p>
                The identity is cinematic and severe, shaped by
                obsidian depth, steel textures, and a deliberate
                crimson pulse that never feels ornamental.
              </p>
            </article>

            <article className="detail-card">
              <h2>Atmosphere</h2>
              <p>
                Every page is designed to feel immersive,
                handcrafted, and worthy of exploration.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="page-content">

          <p className="eyebrow">THE STORY</p>

          <h2>Built on Truth.<br />Driven by Purpose.</h2>

          <p className="story-copy">
            GRVEZ VAULT was created to preserve creative work,
            not chase trends. Music, artwork, manuscripts,
            apparel, and film all become part of one archive
            instead of existing as isolated projects.
          </p>

          <p className="story-copy">
            Every release has context.
            Every symbol has purpose.
            Every page belongs to something larger.
          </p>

          <blockquote className="vault-quote">
            EVERY PIECE HAS A PLACE.
            <br />
            EVERY SCAR HAS A RECORD.
          </blockquote>

        </div>
      </section>

      <section className="core-values">

        <div className="page-content">

          <p className="eyebrow">THE FOUNDATION</p>

          <div className="values-grid">

            <article className="value-card">
              <h3>Authenticity</h3>
              <p>
                Honest creation over manufactured content.
              </p>
            </article>

            <article className="value-card">
              <h3>Archive</h3>
              <p>
                Every project earns a permanent place inside
                the Vault.
              </p>
            </article>

            <article className="value-card">
              <h3>Craft</h3>
              <p>
                Music, writing, design, and film are treated
                with equal care.
              </p>
            </article>

            <article className="value-card">
              <h3>Continuity</h3>
              <p>
                Every piece connects to another, forming one
                evolving creative universe.
              </p>
            </article>

          </div>

        </div>
      </section>
    </>
  );
}