import React from "react";

const records = [
  {
    id: "001",
    category: "RECOVERED POEM",
    title: "Embers",
    preview:
      '"Once the fire dies,\nSo do I.\nFor I am drawn to the shadows..."',
    source: "Recovered: Early Poetry Archive",
    status: "RESTORATION IN PROGRESS",
  },
  {
    id: "002",
    category: "POEM",
    title: "Angel of Death",
    preview:
      '"Fragment currently being restored from the archive."',
    source: "Recovered: Poetry Archive",
    status: "RESTORATION IN PROGRESS",
  },
  {
    id: "003",
    category: "POEM",
    title: "Agony",
    preview:
      '"Fragment currently being restored from the archive."',
    source: "Recovered: Poetry Archive",
    status: "RESTORATION IN PROGRESS",
  },
  {
    id: "004",
    category: "JOURNAL",
    title: "Omega Development Notes",
    preview:
      "Early handwritten exploration of Omega, the Northern Star, eight-point symbolism, continuity, and deception.",
    source: "Recovered: Journal Archive",
    status: "RESTORATION IN PROGRESS",
  },
  {
    id: "005",
    category: "ARCHIVIST OBSERVATION",
    title: "Fire as Memory",
    preview:
      "Fire imagery appears repeatedly across poems, lyrics, and later visual works.",
    source: "Cross Reference Archive",
    status: "RESTORATION IN PROGRESS",
  },
  {
    id: "006",
    category: "ARCHIVIST OBSERVATION",
    title: "The Raven Motif",
    preview:
      "The raven appears repeatedly across visual works created over multiple years.",
    source: "Visual Evolution Archive",
    status: "RESTORATION IN PROGRESS",
  },
];

export function ManuscriptsPage() {
  return (
    <section className="page-section manuscripts-page">
      <div className="page-content">

        <p className="eyebrow">ARCHIVE RECORD 002</p>

        <h1>Written Record</h1>

        <p className="page-description">
          Poetry. Journals. Manuscripts.
          Nothing has been rewritten.
          Everything remains where it first appeared.
        </p>

        <div className="archive-note">

          <p className="eyebrow">ARCHIVIST'S NOTE</p>

          <h2>Fragments survive.</h2>

          <p>
            Not every document remains intact.
            Some survive only as burned pages,
            torn journal entries,
            unfinished drafts,
            forgotten sketches,
            and observations written years apart.
          </p>

        </div>

        <h2 className="section-title">
          Recovered Materials
        </h2>

        <div className="fragment-grid">

          {records.map((record) => (

            <article
              key={record.id}
              className="fragment-card"
            >

              <span className="fragment-category">
                {record.category}
              </span>

              <h3>{record.title}</h3>

              <pre className="fragment-preview">
                {record.preview}
              </pre>

              <p className="fragment-source">
                {record.source}
              </p>

              <div className="fragment-status">
                {record.status}
              </div>

            </article>

          ))}

        </div>

        <div className="archive-note">

          <p className="eyebrow">
            COMING ONLINE
          </p>

          <h2>
            Additional records are currently being restored.
          </h2>

          <p>
            Journals.
            Symbol studies.
            Research notes.
            Original manuscripts.
            Production notebooks.
            Timeline documents.
            Creative development archives.
          </p>

        </div>

      </div>
    </section>
  );
}