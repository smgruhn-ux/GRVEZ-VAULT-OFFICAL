import React from 'react';
import { HeroArtwork } from '../HeroArtwork';

export function VaultlinePage() {
  return (
    <section className="page-section vaultline-page" aria-labelledby="vaultline-heading">
      <div className="page-hero">
        <HeroArtwork image="/vaultline-hero.jpg" alt="Vaultline by Gizzy Graves artwork" loading="lazy" />
      </div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">Vaultline</p>
          <h1 id="vaultline-heading">Vaultline by Gizzy Graves</h1>
          <p>A parallel lane of the GRVEZ VAULT universe, rooted in editorial storytelling and refined sonic expression.</p>
        </div>
        <a
  className="vaultline-latest"
  href="https://vaultlineofficial.us/collections/all"
  target="_blank"
  rel="noreferrer"
>
  <div className="vaultline-latest-copy">
    <p className="eyebrow">NEWEST RELEASES</p>
    <h2>Enter the latest Vaultline drop.</h2>
    <p>
      Explore the newest pieces released from Vaultline by Gizzy Graves.
    </p>
    <span className="metal-button">VIEW THE RELEASES</span>
  </div>
</a>
        <div className="vaultline-grid">
          <article className="detail-card wide">
            <h2>Collections</h2>
            <p>Future drops are being prepared as a premium, collector-minded extension of the GRVEZ VAULT world.</p>
            <ul className="detail-list">
              <li>Editorial capsules</li>
              <li>Signature archival pieces</li>
              <li>Quiet luxury presentation</li>
            </ul>
          </article>
          <article className="detail-card">
            <h2>Presentation</h2>
            <p>The identity remains dark, tactile, and cinematic, with a focus on details that feel deliberate and lasting.</p>
          </article>
          <article className="detail-card">
            <h2>Editorial notes</h2>
            <p>Vaultline exists as a refined bridge between the visual identity, the music, and future storytelling.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
