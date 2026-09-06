import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { artistLinks } from '../artist-links';
import { releases } from '../releases';
import { HeroArtwork } from '../HeroArtwork';

export function MusicPage() {
  useEffect(() => {
    document.title = "Music | GRVEZ VAULT";
    // Handle hash-based scrolling for section links
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
    }
    return () => { document.title = "GRVEZ VAULT | Music \u00b7 Archive \u00b7 Manuscripts \u00b7 Media"; };
  }, []);

  return (
    <section className="page-section music-page" aria-labelledby="music-heading">
      <div className="page-hero">
        <HeroArtwork image="/music-hero.png" alt="GRVEZ VAULT music artwork" loading="lazy" clean />
      </div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">Music</p>
          <h1 id="music-heading">Recorded Chapters</h1>
          <p>Music created through the GRVEZ VAULT creative world, spanning the distinct identities of Gizzy Graves and DXXD GRVEZ.</p>
        </div>

        {/* GIZZY GRAVES */}
        <section id="gizzy-graves" style={{ marginBottom: "4rem" }}>
          <p className="eyebrow">ARTIST</p>
          <h2>Gizzy Graves</h2>
          <p style={{ color: "var(--muted)", maxWidth: "720px", marginBottom: "1.5rem" }}>
            Artist identity curated by Sheldyn Gruhn, centered on dark alternative rock, industrial metal, hard rock, and nu-metal.
          </p>
          <Link to="/about/gizzy-graves" className="metal-button secondary" style={{ display: "inline-flex" }}>
            Artist Profile
          </Link>
        </section>

        {/* DXXD GRVEZ */}
        <section id="dxxd-grvez" style={{ marginBottom: "4rem" }}>
          <p className="eyebrow">PROJECT</p>
          <h2>DXXD GRVEZ</h2>
          <p style={{ color: "var(--muted)", maxWidth: "720px" }}>
            Band project within the GRVEZ VAULT creative world, connecting Gizzy Graves and DMONIX.
          </p>
        </section>

        {/* RELEASES */}
        <section id="releases">
          <p className="eyebrow">RELEASES</p>
          <h2>Catalog</h2>
          <div className="release-list">
            {releases.map((release) => (
              <article key={release.title} className="release-card">
                <div className="release-media">
                  <img src={release.image} alt={`${release.title} artwork`} loading="lazy" decoding="async" />
                </div>
                <div className="release-body">
                  <p className="eyebrow small">{release.artist}</p>
                  <h2>{release.title}</h2>
                  <p>{release.description}</p>
                  <div className="inline-actions">
                    <a className="metal-button" href={release.listenUrl} target="_blank" rel="noreferrer">Listen</a>
                    {release.lyricsUrl ? (
                      <a className="metal-button secondary" href={release.lyricsUrl} target="_blank" rel="noreferrer">Lyrics</a>
                    ) : null}
                    {release.creditsUrl ? (
                      <a className="metal-button secondary" href={release.creditsUrl} target="_blank" rel="noreferrer">Credits</a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* STREAMING */}
        <div className="music-panel" style={{ marginTop: "3rem" }}>
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
            <h2>Listen Everywhere</h2>
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
