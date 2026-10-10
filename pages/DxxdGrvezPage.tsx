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
        <section id="out-of-order" className="out-of-order-band-feature"><img src="/842255732_17906498292591284_1690210242918157018_n.jpg" alt="Out of Order EP artwork" style={{width:"min(100%, 440px)",aspectRatio:"1",objectFit:"cover",margin:"0 auto 2rem"}} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/DXXD_GRVEZ.PNG"; }} />
          <p className="eyebrow">DEBUT EP / OUT NOW</p>
          <h2>OUT OF ORDER</h2>
          <p className="out-of-order-promo-byline">DXXD GRVEZ — GIZZY GRAVES × DMONIX</p>
          <p>Gizzy Graves built the grave. DXXD GRVEZ is what crawled out.</p>
          <p>The archive remains. The sound evolved. The grave got louder.</p>
          <p>Six tracks. A new name. One united sound.</p>
          <div className="out-of-order-promo-actions">
            <a className="metal-button" href="https://music.apple.com/us/album/out-of-order-ep/6820591312" target="_blank" rel="noreferrer">Find on Apple Music ↗</a>
            <a className="metal-button secondary" href="https://open.spotify.com/search/DXXD%20GRVEZ%20Out%20of%20Order" target="_blank" rel="noreferrer">Find on Spotify ↗</a>
          </div>
        </section>
        <section className="archive-note"><p className="eyebrow">THE PROJECT</p><h2>Sound &amp; Identity</h2><p>Musically, DXXD GRVEZ draws from nu-metal, post-grunge, industrial, alternative metal, and cinematic heavy music. Its identity is darker, heavier, and more unified than the earlier Gizzy Graves featuring DMONIX format, giving the project its own visual and musical presence within GRVEZ VAULT.</p></section>
        <section className="archive-note dxxd-discography" aria-labelledby="dxxd-discography-title">
          <p className="eyebrow">OFFICIAL DISCOGRAPHY</p>
          <h2 id="dxxd-discography-title">Releases</h2>
          <article className="dxxd-discography-release">
            <img src="/842255732_17906498292591284_1690210242918157018_n.jpg" alt="Out of Order EP cover" loading="lazy" />
            <div className="dxxd-discography-info">
              <p className="eyebrow">LATEST RELEASE / OCTOBER 4, 2026</p>
              <h3>OUT OF ORDER</h3>
              <p>DXXD GRVEZ · 6-TRACK EP · EXPLICIT</p>
              <p>Gizzy Graves × DMONIX. Our debut EP under the DXXD GRVEZ name.</p>
              <a className="metal-button" href="https://music.apple.com/us/album/out-of-order-ep/6820591312" target="_blank" rel="noreferrer">Listen to the full EP on Apple Music ↗</a>
            </div>
          </article>
          <h3 className="dxxd-section-label">OUT OF ORDER · EP TRACKS</h3>
          <p className="dxxd-tracklist-note">All of the songs below belong to OUT OF ORDER. They are not separate earlier releases.</p>
          <ul className="dxxd-tracklist">
            <li><span>Withering</span></li>
            <li><span>Out of Order</span></li>
            <li><span>Pressure Sick</span></li>
            <li><span>Under and Over</span></li>
            <li><span>Head Noise</span></li>
          </ul>
          <p className="dxxd-tracklist-note">Six-track EP — visit Apple Music for the complete official track order.</p>
          <p className="dxxd-tracklist-note">Songwriting: Sheldyn Gruhn</p>
        </section>
        <section className="archive-note"><p className="eyebrow">CONNECTED</p><h2>Within the Vault</h2><div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}><Link to="/about/gizzy-graves" className="metal-button">Gizzy Graves</Link><Link to="/about/dmonix" className="metal-button secondary">DMONIX</Link><Link to="/music" className="metal-button secondary">All Releases</Link></div></section>
      </div>
    </section>
  );
}
