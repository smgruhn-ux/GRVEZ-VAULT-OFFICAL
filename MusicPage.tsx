import React from 'react';
import { artistLinks } from '../../artist-links';
import { releases } from '../../releases';
import { HeroArtwork } from '../components/HeroArtwork';

export function MusicPage() {
  return (
    <section className="page-section music-page" aria-labelledby="music-heading">
      <div className="page-hero">
        <HeroArtwork image="/music-hero.jpg" alt="GRVEZ VAULT music artwork" loading="lazy" />
      </div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">Listen</p>
          <h1 id="music-heading">Featured releases</h1>
          <p>A restrained collection of dark, intimate releases framed with the same premium editorial language as the rest of the vault.</p>
        </div>
        <div className="release-list">
          {releases.map((release) => (
            <article key={release.title} className="release-card">
              <div className="release-media">
                <img src={release.image} alt={`${release.title} artwork`} loading="lazy" decoding="async" />
              </div>
              <div className="release-body">
                <p className="eyebrow small">Featured release</p>
                <h2>{release.title}</h2>
                <p className="release-artist">{release.artist}</p>
                <p>{release.description}</p>
                <div className="inline-actions">
                  <a className="metal-button" href={release.listenUrl} target="_blank" rel="noreferrer">Listen</a>
                  {release.lyricsUrl ? (
                    <a className="metal-button secondary" href={release.lyricsUrl} target="_blank" rel="noreferrer">Lyrics</a>
                  ) : (
                    <span className="metal-button secondary disabled">Lyrics — Coming Soon</span>
                  )}
                  {release.creditsUrl ? (
                    <a className="metal-button tertiary" href={release.creditsUrl} target="_blank" rel="noreferrer">Credits</a>
                  ) : (
                    <span className="metal-button tertiary disabled">Credits — Coming Soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="music-panel">
          <div className="spotify-frame">
            <iframe
              title="Gizzy Graves on Spotify"
              src="https://open.spotify.com/embed/artist/39roC9iB8zx6jl5UWuK0Q0?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <div className="music-panel-copy">
            <p className="eyebrow">Streaming</p>
            <h2>GRVEZ VAULT across the listening landscape</h2>
            <p>From streaming platforms to the wider editorial world, this section is prepared for the full GRVEZ VAULT music experience.</p>
          </div>
          <div className="streaming-grid">
            {artistLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="streaming-pill">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
