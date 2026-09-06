import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function FilmsPage() {
  useEffect(() => { document.title = "Films & Media | GRVEZ VAULT"; return () => { document.title = "GRVEZ VAULT | Music \u00b7 Archive \u00b7 Manuscripts \u00b7 Media"; }; }, []);

  return (
    <section className="page-section" aria-labelledby="films-heading">
      <div className="page-content">

        <div className="page-intro">
          <p className="eyebrow">FILMS &amp; MEDIA</p>
          <h1 id="films-heading">Visual Projects</h1>
          <p>
            Documentary, film, and visual-media projects connected to GRVEZ VAULT.
            This section preserves work that documents the creative world
            surrounding Gizzy Graves, DMONIX, and the broader archive.
          </p>
        </div>

        {/* SOMETHING BETWEEN */}
        <article className="archive-note">
          <p className="eyebrow">DOCUMENTARY</p>
          <h2>Something Between</h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Short documentary / investigative documentary concept
          </p>
          <p>
            A short-form documentary examining the development of the Relational Continuity
            investigation through archival material, creative works, personal observations,
            and documented chronology. The film approaches the subject as an unfolding
            investigation rather than presenting the hypothesis as established fact.
          </p>
          <div style={{ marginTop: '1.5rem', fontSize: '0.88rem', lineHeight: 2 }}>
            <p style={{ margin: 0 }}><strong>Director</strong> \u2014 Sheldyn Gruhn</p>
            <p style={{ margin: 0 }}><strong>Writer</strong> \u2014 Sheldyn Gruhn</p>
            <p style={{ margin: 0 }}><strong>Producer</strong> \u2014 Sheldyn Gruhn</p>
            <p style={{ margin: 0 }}><strong>Acoustic Guitar</strong> \u2014 Jerry Downard (\u201cDestiny\u201d)</p>
          </div>
        </article>

        <section className="archive-note" style={{ marginTop: '2rem' }}>
          <p className="eyebrow">ARCHIVE CONNECTION</p>
          <h2>Part of the Record</h2>
          <p>
            Every film and documentary project preserved here is part of the same
            chronology maintained throughout GRVEZ VAULT. Visual media, like music
            and writing, contributes to the broader documentary trail.
          </p>
          <p style={{ marginTop: '1rem' }}>
            For visual documentation including concept art, symbols, photography,
            and recovered imagery, see the{' '}
            <Link to="/media" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Visual Documentation</Link>{' '}
            section of the archive.
          </p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/" className="metal-button">Return to Home</Link>
        </div>

      </div>
    </section>
  );
}
