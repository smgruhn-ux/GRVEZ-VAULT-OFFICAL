import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function FilmsPage() {
  useEffect(() => {
    document.title = "Films & Media | GRVEZ VAULT";
    return () => { document.title = "GRVEZ VAULT | Music \u00b7 Archive \u00b7 Manuscripts \u00b7 Media"; };
  }, []);

  return (
    <section className="page-section" aria-labelledby="films-heading">
      <div className="page-content">

        <div className="page-intro">
          <p className="eyebrow">FILMS & MEDIA</p>
          <h1 id="films-heading">Visual Projects</h1>
          <p>
            Documentary, film, and visual-media projects connected to GRVEZ VAULT.
            This section preserves work that documents the creative world
            surrounding Gizzy Graves, DMONIX, and the broader archive.
          </p>
        </div>

        <section className="archive-note">
          <p className="eyebrow">STATUS</p>
          <h2>Projects In Development</h2>
          <p>
            Film and documentary projects connected to GRVEZ VAULT are
            in various stages of development. Project details, descriptions,
            and media will be added to this section as they become available
            for public documentation.
          </p>
          <p>
            For visual documentation including concept art, symbols, photography,
            and recovered imagery, see the{" "}
            <Link to="/media" style={{ color: "var(--accent)", textDecoration: "underline" }}>
              Visual Documentation
            </Link>{" "}
            section of the archive.
          </p>
        </section>

        <section className="archive-note">
          <p className="eyebrow">ARCHIVE CONNECTION</p>
          <h2>Part of the Record</h2>
          <p>
            Every film and documentary project preserved here is part of
            the same chronology maintained throughout GRVEZ VAULT. Visual
            media, like music and writing, contributes to the broader
            documentary trail.
          </p>
        </section>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/archive" className="metal-button">
            Return to Archive
          </Link>
        </div>

      </div>
    </section>
  );
}
