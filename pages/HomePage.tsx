import React from 'react';
import { HeroArtwork } from '../HeroArtwork';

export function HomePage() {
  return (
    <section className="hero-section home-hero" aria-labelledby="home-heading">
      <HeroArtwork image="/home-hero.jpg" alt="GRVEZ VAULT hero artwork" loading="eager" />
    </section>
  );
}
