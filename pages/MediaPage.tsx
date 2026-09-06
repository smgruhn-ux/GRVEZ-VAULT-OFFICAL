import React, { useEffect } from "react";
import { Breadcrumb } from "../Breadcrumb";

const records = [
  {
    id: "001",
    type: "CONCEPT ART",
    title: "Death of Deceit",
    preview: "Concept artwork exploring the earliest visual language of the archive.",
    source: "Artwork Archive",
    status: "UNDER RESTORATION",
  },
  {
    id: "002",
    type: "SYMBOL",
    title: "Omega Development",
    preview: "Early exploration of the Omega mark and eight-point star.",
    source: "Design Archive",
    status: "UNDER RESTORATION",
  },
  {
    id: "003",
    type: "TATTOO",
    title: "Hourglass Sketch",
    preview: "Original tattoo concept drawn before later symbolic development.",
    source: "Journal Archive",
    status: "UNDER RESTORATION",
  },
  {
    id: "004",
    type: "PHOTOGRAPH",
    title: "Visual Evolution",
    preview: "Recovered images documenting the evolution of GRVEZ VAULT.",
    source: "Media Archive",
    status: "UNDER RESTORATION",
  },
  {
    id: "005",
    type: "ARCHIVIST'S OBSERVATION",
    title: "Recurring Symbolism",
    preview: "Recurring imagery appears across artwork, journals, and later visual identity, aligning with the evidence used to support the recovered manuscript.",
    source: "Cross Reference",
    status: "UNDER RESTORATION",
  },
];

export function MediaPage() {
  useEffect(() => {
    document.title = "Visual Documentation | GRVEZ VAULT";
    return () => { document.title = "GRVEZ VAULT | Music \u00b7 Archive \u00b7 Manuscripts \u00b7 Media"; };
  }, []);

  return (
    <section className="page-section manuscripts-page" aria-labelledby="media-heading">
      <div className="page-content">

        <Breadcrumb items={[
          { label: "Archive", to: "/archive" },
          { label: "Visual Documentation" },
        ]} />

        <p className="eyebrow">ARCHIVE RECORD // 003</p>
        <h1 id="media-heading">Visual Documentation</h1>

        <p className="page-description">
          Artwork. Photography. Concepts. Symbols.
          Visual evidence preserved throughout the archive's investigation.
          These images and designs are part of the same documentary trail
          that supports the recovered manuscript and its twelve-stage
          relational model.
        </p>

        <section className="archive-note">
          <p className="eyebrow">VISUAL EVIDENCE</p>
          <h2>Archive In Progress</h2>
          <p>
            The visual archive documents recurring motifs, early concept
            language, and symbolic patterns found across music, writing,
            manuscripts, and recovered artifacts. It serves as supporting
            evidence for the investigative narrative rather than a separate
            gallery.
          </p>
          <p style={{ marginTop: "1rem", color: "var(--muted)", fontSize: "0.95rem" }}>
            Visual records below are being restored and catalogued.
            Source imagery, artwork files, and supporting documentation
            will be added as restoration progresses.
          </p>
        </section>

        <section className="archive-section">
          <div className="section-heading">
            <p className="eyebrow">RECOVERED VISUAL RECORDS</p>
            <h2>Catalogued Evidence</h2>
          </div>
          <div className="fragment-grid">
            {records.map((record) => (
              <article key={record.id} className="fragment-card">
                <div className="fragment-header">
                  <span className="fragment-id">VISUAL {record.id}</span>
                  <span className="fragment-type">{record.type}</span>
                </div>
                <h3>{record.title}</h3>
                <p className="fragment-preview">{record.preview}</p>
                <div className="fragment-footer">
                  <p>
                    <strong>Recovered From</strong>
                    <br />
                    {record.source}
                  </p>
                  <div className="fragment-status">{record.status}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="archive-note" style={{ marginTop: "4rem" }}>
          <p className="eyebrow">ARCHIVIST'S NOTE</p>
          <h2>Restoration Ongoing</h2>
          <p>
            Visual records are being preserved in their original form.
            As source imagery and supporting documentation become available,
            each record will be updated with the recovered material.
          </p>
        </section>

      </div>
    </section>
  );
}
