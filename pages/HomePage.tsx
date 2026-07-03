import React from 'react';
import { Link } from 'react-router-dom';
import { HeroArtwork } from '../components/HeroArtwork';

export function HomePage() {
  return (
    <section className="hero-section home-hero" aria-labelledby="home-heading">
      <HeroArtwork image="/home-hero.jpg" alt="GRVEZ VAULT hero artwork" loading="eager" />
      <div className="hero-content">
        <p className="eyebrow">GRVEZ VAULT</p>
        <h1 id="home-heading">A cinematic voice for the shadowed sublime.</h1>
        <p className="hero-intro">Explore the vault, the music, and the world behind the work.</p>
        <div className="hero-actions">
          <Link to="/music" className="metal-button">Enter the sound</Link>
          <Link to="/about" className="metal-button secondary">Read the story</Link>
        </div>
      </div>
    </section>
  );
}
