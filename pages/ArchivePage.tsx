import React from "react";
import { Link } from "react-router-dom";
import { HeroArtwork } from "../HeroArtwork";

const collections = [
  {
    id: "writings",
    title: "Written Record",
    type: "Origins & Early Writing",
    description: "Poetry, journals, manuscripts, research notes, and the creative works that form the foundation of the archive.",
    link: "/manuscripts",
    action: "OPEN RECORD",
    detail: "8 records preserved",
  },
  {
    id: "music",
    title: "Recorded Evidence",
    type: "Music & Audio",
    description: "Songs, albums, instrumentals, and audio works preserved in their original chronology.",
    link: "/music",
    action: "LISTEN",
    detail: null,
  },
  {
    id: "visual",
    title: "Visual Documentation",
    type: "Art & Symbols",
    description: "Artwork, photography, symbols, concept art, and visual evidence from across the archive.",
    link: "/media",
    action: "VIEW RECORD",
    detail: "5 records catalogued",
  },
];

export function ArchivePage() {
  return (
    <section className="page-section archive-page" aria-labelledby="archive-heading">
      <div className="page-hero"><HeroArtwork image="/manuscripts-hero.png" alt="GRVEZ VAULT Archive" clean /></div>
      <div className="page-content">
        <div className="page-intro">
          <p className="eyebrow">THE ARCHIVE</p>
          <h1 id="archive-heading">Every Record<br />Has Two Dates.</h1>
          <p className="archive-quote">The day it was created.<br />And the day someone finally understood<br />why it mattered.</p>
          <div className="archive-manifest"><p>GRVEZ VAULT exists to preserve creative work exactly as it was originally created.</p><p>Songs. Writing. Symbols. Films. Artwork. Ideas.</p><p>Time changes perspective. The archive does not.</p></div>
        </div>
        <section className="archive-directory"><p className="eyebrow">ARCHIVE COLLECTIONS</p><h2>Select a collection.</h2><div className="archive-record-grid">
          {collections.map((col) => <Link key={col.id} to={col.link} className="archive-record-card"><div className="archive-record-header"><span className="archive-record-id">{col.type}</span><span className="archive-record-status">PRESERVED</span></div><h3>{col.title}</h3><p className="archive-description">{col.description}</p>{col.detail && <p style={{ fontSize: "0.78rem", color: "var(--muted)", margin: "0 0 1rem" }}>{col.detail}</p>}<span className="archive-action">{col.action}<span className="archive-arrow">→</span></span></Link>)}
        </div></section>
        <section className="archive-feature archive-audit-pathway"><div className="archive-feature-content"><p className="eyebrow">METHODOLOGICAL AUDIT</p><h2>Forensic Integrity Audit</h2><p>The formal analytical protocol for evidence verification, chronological mapping, contradiction, and uncertainty inside the GRVEZ VAULT record.</p><Link to="/archive/forensic-integrity-audit" className="metal-button">OPEN AUDIT</Link></div><div className="archive-audit-mark" aria-hidden="true">EVIDENCE<br />CHRONOLOGY<br />INTERPRETATION<br />VULNERABILITY</div></section>
        <section className="archive-feature"><div className="archive-feature-content"><p className="eyebrow">RECOVERED MANUSCRIPT</p><h2>The Founding Edition</h2><p>The recovered research manuscript documenting the Relational Continuity Hypothesis and its twelve-stage model of relational consciousness. This record anchors the archive and connects symbolic evidence, case studies, and methodological notes.</p><div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}><Link to="/relational-continuity" className="metal-button">EXPLORE THE FRAMEWORK</Link><Link to="/record/008" className="metal-button secondary">VIEW FOUNDING RECORD</Link></div></div></section>
        <section className="archive-feature" style={{ marginTop: "4rem" }}><div className="archive-feature-content"><p className="eyebrow">CHRONOLOGY</p><h2>Chronology<br />is evidence.</h2><p>Every entry inside GRVEZ VAULT remains exactly where it was originally created. The archive does not reorganize events to strengthen a narrative. It preserves the original sequence so every connection can be discovered in context.</p><blockquote className="vault-quote">Nothing has been rewritten.<br />Nothing has been relocated.<br />Nothing has been removed.</blockquote></div></section>
        <section className="archive-closing"><p className="eyebrow">THE RECORD REMAINS</p><h2>Every new release<br />becomes another record.</h2><p>The archive continues to grow one entry at a time. Every song, manuscript, symbol, film, and design is preserved as part of the same ongoing chronology.</p><blockquote className="vault-quote">The archive is never finished.<br />It is only waiting for its next record.</blockquote></section>
      </div>
    </section>
  );
}
