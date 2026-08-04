import React from "react";
import { useNavigate } from "react-router-dom";

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
    type: "JOURNAL ENTRY",
    title: "Origins",
    preview:
      '"Recovered journal entry currently undergoing restoration..."',
    source: "Personal Journal",
  },
  {
    id: "004",
    type: "RESEARCH NOTE",
    title: "Pattern Recognition",
    preview:
      '"Recovered research notes documenting early observations..."',
    source: "Research Archive",
  },
  {
    id: "005",
    type: "SYMBOL STUDY",
    title: "Omega Development",
    preview:
      "Early handwritten notes exploring Omega, the eight-point star, continuity, and the origins of the archive.",
    source: "Journal Archive",
  },
  {
    id: "006",
    type: "EVIDENCE RECORD",
    title: "The Raven Motif",
    preview:
      "The raven appears repeatedly across unrelated works created over multiple years.",
    source: "Cross Reference",
  },
  {
    id: "007",
    type: "TIMELINE",
    title: "Chronology",
    preview:
      '"Recovered chronology currently being reconstructed..."',
    source: "Evidence Timeline",
  },
    {
  id: "008",
  type: "FOUNDING EDITION",
  title: "Relational Continuity Hypothesis",
  preview:
    "FOUNDING EDITION RECOVERED\n\nThe first preserved publication documenting the Relational Continuity Hypothesis. Continue following the recovered evidence throughout the archive to uncover the investigation that led to this work.",
  source: "Published on Amazon",
},
];
export function ManuscriptsPage() {
  const navigate = useNavigate();
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
  style={{ cursor: "pointer" }}
  onClick={() => navigate(`/archive/${record.id}`)}
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

                    CLICK TO OPEN →

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

       <section className="archive-note">

  <p className="eyebrow">
    ARCHIVIST'S NOTE
  </p>

  <h2>
    Investigation Active
  </h2>

  <p>
    This archive is presented as an active investigation rather than
    a complete collection. Every recovered record represents one piece
    of a larger chronology preserved across poems, journals,
    manuscripts, symbols, photographs, and documentary evidence.
  </p>

  <p>
    Some records remain sealed. Others are incomplete. Visitors who
    continue deeper into the archive will gradually recover additional
    fragments leading toward the Founding Edition.
  </p>

</section>
      </div>

    </section>
  );
}