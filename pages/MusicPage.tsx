import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { artistLinks } from '../artist-links';
import { gizzyGravesReleases, dxxdGrvezReleases } from '../releases';
import { HeroArtwork } from '../HeroArtwork';

function ListenLinks() {
  return (
    <div className="streaming-grid" aria-label="Official listening platforms">
      {artistLinks.map((link) => (
        <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="streaming-pill">{link.label}</a>
      ))}
    </div>
  );
}

function CurrentRelease({ title, artist, image, listenUrl }: { title: string; artist: string; image: string; listenUrl: string }) {
  return (
    <div className="featured-release">
      {image ? <img src={image} alt={`${title} artwork`} loading="lazy" /> : <div className="featured-release-placeholder" aria-hidden="true" />}
      <div>
        <p className="eyebrow small">CURRENT RELEASE</p>
        <h3>{title}</h3>
        <p className="release-artist">{artist}</p>
        {listenUrl ? <a className="metal-button secondary" href={listenUrl} target="_blank" rel="noreferrer">Listen</a> : null}
      </div>
    </div>
  );
}

export function MusicPage() {
  useEffect(() => {
    document.title = "Music | GRVEZ VAULT";
    return () => { document.title = "GRVEZ VAULT | Music · Archive · Manuscripts · Media"; };
  }, []);

  const gizzyFeatured = gizzyGravesReleases.filter((release) => release.image || release.listenUrl).slice(0, 2);
  const dxxdFeatured = dxxdGrvezReleases.slice(0, 2);

  return (
    <section className="page-section music-page" aria-labelledby="music-heading">
      <div className="page-hero"><HeroArtwork image="/GRVEZ_VAULT_Music_Pathway.png" alt="GRVEZ VAULT music" loading="eager" clean /></div>
      <div className="page-content">
        <div className="page-intro"><p className="eyebrow">MUSIC</p><h1 id="music-heading">Recorded Chapters</h1><p>Music created through the GRVEZ VAULT creative world, spanning the distinct identities of Gizzy Graves and DXXD GRVEZ. All songs written by Sheldyn Gruhn.</p></div>

        <section id="gizzy-graves" className="artist-section">
          <p className="eyebrow">ARTIST</p><h2>Gizzy Graves</h2>
          <p className="artist-intro">Artist identity curated by Sheldyn Gruhn, centered on dark alternative rock, industrial metal, hard rock, and nu-metal.</p>
          <Link to="/about/gizzy-graves" className="metal-button secondary">Artist Profile</Link>
          {gizzyFeatured.length > 0 && <div className="featured-release-list">{gizzyFeatured.map((release) => <CurrentRelease key={release.title} {...release} />)}</div>}
          <div className="artist-listen"><p className="eyebrow small">OFFICIAL LISTENING</p><ListenLinks /></div>
        </section>

        <section id="dxxd-grvez" className="artist-section">
          <p className="eyebrow">PROJECT</p><h2>DXXD GRVEZ</h2>
          <p className="artist-intro">Dark alternative and heavy music project formed by Gizzy Graves and DMONIX.</p>
          <Link to="/dxxd-grvez" className="metal-button secondary">Project Page</Link>
          <div className="featured-release-list">{dxxdFeatured.map((release) => <CurrentRelease key={release.title} {...release} />)}</div>
          <div className="artist-listen"><p className="eyebrow small">OFFICIAL LISTENING</p><ListenLinks /></div>
        </section>
      </div>
    </section>
  );
}
