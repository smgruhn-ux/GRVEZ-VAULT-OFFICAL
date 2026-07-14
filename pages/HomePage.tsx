import React from 'react';
import { HeroArtwork } from '../HeroArtwork';

export function HomePage() {
  return (
    <>
      <section className="hero-section home-hero">
        <HeroArtwork
          image="/home-hero.png"
          alt="GRVEZ VAULT Hero"
        />
      </section>

      <section className="vault-intro">
        <div className="vault-intro-content">
          <p className="vault-label">WELCOME TO THE VAULT</p>

          <h2>
            More than a brand.
            <br />
            More than a music project.
          </h2>

          <p className="vault-description">
            GRVEZ VAULT is a living archive of music, visual art,
            manuscripts, apparel, and cinematic storytelling.
            Every release, every design, and every creation exists as
            part of one connected body of work—built to be explored,
            not simply consumed.
          </p>

          <a href="/archive" className="vault-button">
            EXPLORE THE ARCHIVE
          </a>
        </div>
      </section>
    </>
  );
}