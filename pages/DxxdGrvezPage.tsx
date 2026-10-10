import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function DxxdGrvezPage() {
  useEffect(() => { document.title = "DXXD GRVEZ | GRVEZ VAULT"; return () => { document.title = "GRVEZ VAULT | Music · Archive · Manuscripts · Media"; }; }, []);

  return (
    <section className="page-section dxxd-page" aria-labelledby="dxxd-heading">
      <div className="dxxd-hero"><img src="/DXXD_GRVEZ.PNG" alt="DXXD GRVEZ" loading="eager" /></div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">BAND PROJECT</p>
          <h1 id="dxxd-heading">DXXD GRVEZ</h1>
          <p>DXXD GRVEZ is a dark alternative and heavy music project formed by Gizzy Graves and DMONIX under the GRVEZ VAULT umbrella. The project brings the two creative identities together as a single unit rather than presenting DMONIX as simply a featured collaborator on Gizzy Graves material.</p>
        </div>
        <section id="out-of-order" className="out-of-order-band-feature"><img src="/out-of-order-cover.webp" alt="Out of Order EP artwork" style={{width:"min(100%, 440px)",aspectRatio:"1",objectFit:"cover",margin:"0 auto 2rem"}} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/DXXD_GRVEZ.PNG"; }} />
          <p className="eyebrow">DEBUT EP / OUT NOW</p>
          <h2>OUT OF ORDER</h2>
          <p className="out-of-order-promo-byline">DXXD GRVEZ — GIZZY GRAVES × DMONIX</p>
          <p>Gizzy Graves built the grave. DXXD GRVEZ is what crawled out.</p>
          <p>The archive remains. The sound evolved. The grave got louder.</p>
          <p>Six tracks. A new name. One united sound.</p>
          <div className="out-of-order-promo-actions">
            <a className="metal-button" href="https://music.apple.com/us/search?term=DXXD%20GRVEZ%20Out%20of%20Order" target="_blank" rel="noreferrer">Find on Apple Music ↗</a>
            <a className="metal-button secondary" href="https://open.spotify.com/search/DXXD%20GRVEZ%20Out%20of%20Order" target="_blank" rel="noreferrer">Find on Spotify ↗</a>
          </div>
        </section>
        <section className="archive-note"><p className="eyebrow">THE PROJECT</p><h2>Sound &amp; Identity</h2><p>Musically, DXXD GRVEZ draws from nu-metal, post-grunge, industrial, alternative metal, and cinematic heavy music. Its identity is darker, heavier, and more unified than the earlier Gizzy Graves featuring DMONIX format, giving the project its own visual and musical presence within GRVEZ VAULT.</p></section>
        <section className="archive-note"><p className="eyebrow">RELEASES</p><h2>Discography</h2><div className="catalog-list" style={{ marginTop: '1rem' }}><div className="catalog-track"><span className="catalog-track-title">OUT OF ORDER — 6-TRACK EP (2026)</span><span className="catalog-track-artist">AVAILABLE NOW</span></div><div className="catalog-track"><span className="catalog-track-title">UNDER AND OVER</span><span className="catalog-track-artist">DXXD GRVEZ</span></div><div className="catalog-track"><span className="catalog-track-title">PRESSURE SICK</span><span className="catalog-track-artist">DXXD GRVEZ</span></div></div><p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--muted)' }}>Written by Sheldyn Gruhn</p></section>
        <section className="archive-note"><p className="eyebrow">CONNECTED</p><h2>Within the Vault</h2><div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}><Link to="/about/gizzy-graves" className="metal-button">Gizzy Graves</Link><Link to="/about/dmonix" className="metal-button secondary">DMONIX</Link><Link to="/music" className="metal-button secondary">All Releases</Link></div></section>
      </div>
    </section>
  );
}
