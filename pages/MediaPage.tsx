import React from "react";

const records = [
  {
    id: "001",
    type: "CONCEPT ART",
    title: "Death of Deceit",
    preview:
      "Concept artwork exploring the earliest visual language of the archive.",
    source: "Artwork Archive",
  },
  {
    id: "002",
    type: "SYMBOL",
    title: "Omega Development",
    preview:
      "Early exploration of the Omega mark and eight-point star.",
    source: "Design Archive",
  },
  {
    id: "003",
    type: "TATTOO",
    title: "Hourglass Sketch",
    preview:
      "Original tattoo concept drawn before later symbolic development.",
    source: "Journal Archive",
  },
  {
    id: "004",
    type: "PHOTOGRAPH",
    title: "Visual Evolution",
    preview:
      "Recovered images documenting the evolution of GRVEZ VAULT.",
    source: "Media Archive",
  },
  {
    id: "005",
    type: "ARCHIVIST'S OBSERVATION",
    title: "Recurring Symbolism",
    preview:
      "Recurring imagery appears across artwork, journals, and later visual identity.",
    source: "Cross Reference",
  },
];

export function MediaPage() {
  return (
    <section className="page-section manuscripts-page">

      <div className="page-content">

        <p className="eyebrow">
          ARCHIVE RECORD // 003
        </p>

        <h1>
          Visual Documentation
        </h1>

        <p className="page-description">
          Artwork. Photography. Concepts. Symbols.
          Visual evidence preserved throughout the archive.
        </p>

        <div className="fragment-grid">

          {records.map((record) => (

            <article
              key={record.id}
              className="fragment-card"
            >

              <div className="fragment-header">

                <span className="fragment-id">
                  RECORD {record.id}
                </span>

                <span className="fragment-type">
                  {record.type}
                </span>

              </div>

              <h3>{record.title}</h3>

              <p className="fragment-preview">
                {record.preview}
              </p>

              <p className="fragment-source">
                {record.source}
              </p>

              <div className="fragment-status">
                UNDER RESTORATION
              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}