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
        <section className="archive-note"><p className="eyebrow">THE PROJECT</p><h2>Sound &amp; Identity</h2><p>Musically, DXXD GRVEZ draws from nu-metal, post-grunge, industrial, alternative metal, and cinematic heavy music. Its identity is darker, heavier, and more unified than the earlier Gizzy Graves featuring DMONIX format, giving the project its own visual and musical presence within GRVEZ VAULT.</p></section>
        <section className="archive-note"><p className="eyebrow">RELEASES</p><h2>Discography</h2><div className="catalog-list" style={{ marginTop: '1rem' }}><div className="catalog-track"><span className="catalog-track-title">UNDER AND OVER</span><span className="catalog-track-artist">DXXD GRVEZ</span></div><div className="catalog-track"><span className="catalog-track-title">PRESSURE SICK</span><span className="catalog-track-artist">DXXD GRVEZ</span></div></div><p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--muted)' }}>Written by Sheldyn Gruhn</p></section>
        <section className="archive-note"><p className="eyebrow">CONNECTED</p><h2>Within the Vault</h2><div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}><Link to="/about/gizzy-graves" className="metal-button">Gizzy Graves</Link><Link to="/about/dmonix" className="metal-button secondary">DMONIX</Link><Link to="/music" className="metal-button secondary">All Releases</Link></div></section>
      </div>
    </section>
  );
}
