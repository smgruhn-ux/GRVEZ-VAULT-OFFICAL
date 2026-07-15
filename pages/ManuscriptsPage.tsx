import React from "react";

const records = [
  {
    id: "001",
    category: "RECOVERED POEM",
    title: "Embers",
    preview:
      '"Once the fire dies,\nSo do I.\nFor I am drawn to the shadows..."',
    source: "Recovered: Early Poetry Archive",
  },
  {
    id: "002",
    category: "RECOVERED POEM",
    title: "Embers",
    preview:
      '"I surrender my life\nto be\nthe embers\nin your flame."',
    source: "Recovered: Poetry Archive",
  },
  {
    id: "003",
    category: "JOURNAL",
    title: "Development Notes",
    preview:
      "Early handwritten exploration of Omega, the Northern Star, eight-point symbolism, continuity, and deception.",
    source: "Recovered: Journal Archive",
  },
];

export function ManuscriptsPage() {
  return (
    <section className="page-section manuscripts-page">
      <div className="page-content">

        <p className="eyebrow">ARCHIVE RECORD 002</p>

        <h1>Written Record</h1>

        <p className="page-description">
          Poetry. Journals. Manuscripts. Nothing has been rewritten.
          Everything remains where it first appeared.
        </p>

        <div className="archive-note">
          <p className="eyebrow">ARCHIVIST'S NOTE</p>

          <h2>Fragments survive.</h2>

          <p>
            Not every document remains intact. Some survive only as burned
            pages, torn journal entries, unfinished drafts, forgotten
            sketches, and observations written years apart.
          </p>
        </div>

        <h2 className="section-title">Recovered Materials</h2>

        <div className="fragment-grid">

          {records.map((record) => (

            <article key={record.id} className="fragment-card">

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

              <button className="fragment-button">
                OPEN FRAGMENT →
              </button>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}