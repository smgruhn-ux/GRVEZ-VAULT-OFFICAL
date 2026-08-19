import React from 'react';
import { artistLinks } from '../artist-links';
import { releases } from '../releases';
import { HeroArtwork } from '../HeroArtwork';

export function MusicPage() {
  return (
    <section className="page-section music-page" aria-labelledby="music-heading">
      <div className="page-hero">
        <HeroArtwork image="/music-hero.png" alt="GRVEZ VAULT music artwork" loading="lazy" clean />
      </div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">Recorded Evidence</p>
          <h1 id="music-heading">Audio Case Files</h1>
          <p>Recorded audio evidence catalogued across the archive.</p>
        </div>
        <div className="release-list">
          {releases.map((release) => (
            <article key={release.title} className="release-card">
              <div className="release-media">
                <img src={release.image} alt={`${release.title} artwork`} loading="lazy" decoding="async" />
              </div>
              <div className="release-body">
                <p className="eyebrow small">Evidence entry</p>
                <h2>{release.title}</h2>
                <p className="release-artist">{release.artist}</p>
                <p>{release.description}</p>
                <div className="inline-actions">
                  <a className="metal-button" href={release.listenUrl} target="_blank" rel="noreferrer">Play file</a>
                  {release.lyricsUrl ? (
                    <a className="metal-button secondary" href={release.lyricsUrl} target="_blank" rel="noreferrer">Lyrics</a>
                  ) : (
                    <span className="metal-button secondary disabled">Transcript — Coming Soon</span>
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
            <p className="eyebrow">Evidence access</p>
            <h2>GRVEZ VAULT audio evidence and field recordings</h2>
            <p>From recovered files to external listening points, this section surfaces audio evidence from the archive.</p>
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
