import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const documentaryQuestions = [
  { title: "WHAT DOES THE BASKETBALL MEAN?", slug: "basketball", label: "SYMBOL / EVENT" },
  { title: "WHAT HAPPENED DURING THE MAY 23 EPIPHANY?", slug: "may-23-epiphany", label: "CHRONOLOGY / TESTIMONY" },
  { title: "WHY DO THE SAME SYMBOLS KEEP REAPPEARING?", slug: "recurring-symbols", label: "SYMBOL / INTERPRETATION" },
  { title: "WHICH EVENTS HAPPENED BEFORE THE FRAMEWORK EXISTED?", slug: "pre-framework-events", label: "CHRONOLOGY / METHOD" },
];

export function FilmsPage() {
  useEffect(() => { document.title = "Films & Media | GRVEZ VAULT"; return () => { document.title = "GRVEZ VAULT | Music · Archive · Manuscripts · Media"; }; }, []);

  return (
    <section className="page-section" aria-labelledby="films-heading">
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">FILMS &amp; MEDIA</p>
          <h1 id="films-heading">Visual Projects</h1>
          <p>Documentary, film, and visual-media projects connected to GRVEZ VAULT. This section preserves work that documents the creative world surrounding Gizzy Graves, DMONIX, and the broader archive.</p>
        </div>

        <article className="archive-note">
          <p className="eyebrow">DOCUMENTARY</p>
          <h2>SOMEWHERE BETWEEN</h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>Short documentary / investigative documentary concept</p>
          <img className="film-poster" src="/SOMEWHERE_BETWEEN_THUMBNAIL.jpg" alt="Somewhere Between documentary thumbnail" loading="lazy" />
          <p>A short-form documentary examining the development of the Relational Continuity investigation through archival material, creative works, personal observations, and documented chronology. The film approaches the subject as an unfolding investigation rather than presenting the hypothesis as established fact.</p>
          <div className="film-video" style={{ marginTop: '2rem' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LHgeW8RKG_U?si=jsnQ8Xnl53NmfqVD" title="Somewhere Between trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
          <div style={{ marginTop: '1.5rem', fontSize: '0.88rem', lineHeight: 2 }}>
            <p style={{ margin: 0 }}><strong>Written, directed &amp; produced by</strong> · Sheldyn Gruhn</p>
            <p style={{ margin: 0 }}><strong>A GRVEZ VAULT Production</strong></p>
            <p style={{ margin: 0 }}><strong>Music</strong> · “Twilight (with Laura Brehm) – Instrumental”</p>
            <p style={{ margin: 0 }}><strong>Written/Performed by</strong> · Judah Earl</p>
            <p style={{ margin: 0 }}><strong>Licensed through</strong> · Musicbed</p>
            <p style={{ margin: 0 }}><strong>Musicbed reference</strong> · MB010UHWLTT02Z2</p>
            <p style={{ margin: '1rem 0 0' }}>© 2026 GRVEZ VAULT. All rights reserved.</p>
          </div>

          <section className="documentary-question-pathways" aria-labelledby="documentary-questions-heading">
            <p className="eyebrow">EXPLORE THE INVESTIGATION</p>
            <h2 id="documentary-questions-heading">QUESTIONS RAISED BY THE FILM</h2>
            <div className="documentary-question-card-grid">
              {documentaryQuestions.map((question) => (
                <Link to={`/films/questions/${question.slug}`} className="documentary-question-card" key={question.slug}>
                  <span className="documentary-question-card-label">{question.label}</span>
                  <span className="documentary-question-card-title">{question.title}</span>
                  <span className="documentary-question-card-arrow">Explore pathway →</span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        <section className="archive-note" style={{ marginTop: '2rem' }}>
          <p className="eyebrow">ARCHIVE CONNECTION</p>
          <h2>Part of the Record</h2>
          <p>Every film and documentary project preserved here is part of the same chronology maintained throughout GRVEZ VAULT. Visual media, like music and writing, contributes to the broader documentary trail.</p>
          <p style={{ marginTop: '1rem' }}>For visual documentation including concept art, symbols, photography, and recovered imagery, see the <Link to="/media" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Visual Documentation</Link> section of the archive.</p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}><Link to="/" className="metal-button">Return to Home</Link></div>
      </div>
    </section>
  );
}
