import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { artistLinks } from '../artist-links';
import { gizzyGravesReleases, gizzyGravesFeatDmonix, dxxdGrvezReleases, dxxdGrvezFeatDmonix, Release } from '../releases';
import { HeroArtwork } from '../HeroArtwork';

function TrackList({ tracks, showArtist }: { tracks: Release[]; showArtist?: boolean }) {
  return (
    <div className="catalog-list">
      {tracks.map((t) => (
        <div key={t.title} className="catalog-track">
          <span className="catalog-track-title">{t.title}</span>
          {showArtist && <span className="catalog-track-artist">{t.artist}</span>}
          {t.listenUrl ? (
            <a href={t.listenUrl} target="_blank" rel="noreferrer" className="catalog-track-link">Listen</a>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function MusicPage() {
  useEffect(() => {
    document.title = "Music | GRVEZ VAULT";
    const hash = window.location.hash;
    if (hash) { const el = document.querySelector(hash); if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150); }
    return () => { document.title = "GRVEZ VAULT | Music \u00b7 Archive \u00b7 Manuscripts \u00b7 Media"; };
  }, []);

  return (
    <section className="page-section music-page" aria-labelledby="music-heading">
      <div className="page-hero">
        <HeroArtwork image="/GRVEZ_VAULT_Music_Pathway.png" alt="GRVEZ VAULT music" loading="eager" clean />
      </div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">Music</p>
          <h1 id="music-heading">Recorded Chapters</h1>
          <p>Music created through the GRVEZ VAULT creative world, spanning the distinct identities of Gizzy Graves and DXXD GRVEZ. All songs written by Sheldyn Gruhn.</p>
        </div>

        {/* GIZZY GRAVES */}
        <section id="gizzy-graves" className="catalog-section">
          <p className="eyebrow">ARTIST</p>
          <h2>Gizzy Graves</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '720px', marginBottom: '1.5rem' }}>
            Artist identity curated by Sheldyn Gruhn, centered on dark alternative rock, industrial metal, hard rock, and nu-metal.
          </p>
          <Link to="/about/gizzy-graves" className="metal-button secondary" style={{ display: 'inline-flex', marginBottom: '2rem' }}>Artist Profile</Link>
          <TrackList tracks={gizzyGravesReleases} />
        </section>

        {/* GIZZY GRAVES FEAT. DMONIX */}
        <section id="gg-feat-dmonix" className="catalog-section">
          <p className="eyebrow">FEATURING</p>
          <h2>Gizzy Graves feat. DMONIX</h2>
          <TrackList tracks={gizzyGravesFeatDmonix} />
        </section>

        {/* DXXD GRVEZ */}
        <section id="dxxd-grvez" className="catalog-section">
          <p className="eyebrow">PROJECT</p>
          <h2>DXXD GRVEZ</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '720px', marginBottom: '1.5rem' }}>
            Dark alternative and heavy music project formed by Gizzy Graves and DMONIX.
          </p>
          <Link to="/dxxd-grvez" className="metal-button secondary" style={{ display: 'inline-flex', marginBottom: '2rem' }}>Project Page</Link>
          <TrackList tracks={dxxdGrvezReleases} />
        </section>

        {/* DXXD GRVEZ FEAT. DMONIX */}
        <section id="dxxd-feat-dmonix" className="catalog-section">
          <p className="eyebrow">FEATURING</p>
          <h2>DXXD GRVEZ feat. DMONIX</h2>
          <TrackList tracks={dxxdGrvezFeatDmonix} />
        </section>

        {/* STREAMING */}
        <div className="music-panel" style={{ marginTop: '3rem' }}>
          <div className="spotify-frame">
            <iframe title="Gizzy Graves on Spotify" src="https://open.spotify.com/embed/artist/39roC9iB8zx6jl5UWuK0Q0?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
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
