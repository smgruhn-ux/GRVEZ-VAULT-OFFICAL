import React from "react";

const records = [
  {
    id: "001",
    type: "RECOVERED POEM",
    title: "Embers",
    preview:
      '"Once the fire dies,\nSo do I.\nFor I am drawn to the shadows..."',
    source: "Early Poetry Archive",
  },
  {
    id: "002",
    type: "RECOVERED POEM",
    title: "Forevermore",
    preview:
      '"Forevermore\nShall our souls\nBe intertwined..."',
    source: "Poetry Collection",
  },
  {
    id: "003",
    type: "RECOVERED POEM",
    title: "Angel of Death",
    preview:
      '"Awaiting restoration..."',
    source: "Poetry Collection",
  },
  {
    id: "004",
    type: "RECOVERED POEM",
    title: "Agony",
    preview:
      '"Awaiting restoration..."',
    source: "Poetry Collection",
  },
  {
    id: "005",
    type: "JOURNAL",
    title: "Omega Development",
    preview:
      "Early handwritten notes exploring Omega, the eight-point star, continuity, and the origins of the archive.",
    source: "Journal Archive",
  },
  {
    id: "006",
    type: "ARCHIVIST'S OBSERVATION",
    title: "The Raven Motif",
    preview:
      "The raven appears repeatedly across unrelated works created over multiple years.",
    source: "Cross Reference",
  },
];

export function ManuscriptsPage() {
  return (
    <section className="page-section manuscripts-page">

      <div className="page-content">

        <p className="eyebrow">
          ARCHIVE RECORD // 002
        </p>

        <h1>
          Written Record
        </h1>

        <p className="page-description">
          Poetry. Journals. Manuscripts. Research.
          Every document remains preserved in its original chronology.
        </p>

        <section className="archive-note">

          <p className="eyebrow">
            ARCHIVIST'S NOTE
          </p>

          <h2>
            Recovery In Progress
          </h2>

          <p>
            The written archive is currently being reconstructed from
            original journals, poetry, manuscripts, research, and
            development notes. Some records remain incomplete.
          </p>

        </section>

        <section className="archive-section">

          <div className="section-heading">

            <p className="eyebrow">
              RECOVERED MATERIAL
            </p>

            <h2>
              Archive Fragments
            </h2>

          </div>

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

                <h3>
                  {record.title}
                </h3>

                <pre className="fragment-preview">
                  {record.preview}
                </pre>

                <div className="fragment-footer">

                  <p>
                    <strong>Recovered From</strong>

                    <br />

                    {record.source}
                  </p>

                  <div className="fragment-status">

                    UNDER RESTORATION

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        <section className="archive-note">

          <p className="eyebrow">
            ARCHIVE STATUS
          </p>

          <h2>
            Reconstruction Active
          </h2>

          <p>
            Additional poems, journal pages, manuscript excerpts,
            research documents, photographs, and evidence records
            are currently being cataloged.
          </p>

        </section>

      </div>

    </section>
  );
}