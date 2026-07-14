import React from "react";
import { HeroArtwork } from "../HeroArtwork";

const archiveRecords = [
  {
    id: "001",
    title: "Recorded Evidence",
    type: "Music",
    description:
      "Songs, albums, instrumentals, lyrics, demos, and recorded works preserved in their original chronology.",
    link: "/music",
    action: "ENTER RECORD",
  },
  {
    id: "002",
    title: "Written Record",
    type: "Manuscripts",
    description:
      "Poetry, journals, manuscripts, research, and long-form writing documenting years of creative work.",
    link: "/manuscripts",
    action: "OPEN RECORD",
  },
  {
    id: "003",
    title: "Visual Documentation",
    type: "Media",
    description:
      "Photography, documentaries, artwork, production, and visual storytelling collected throughout the archive.",
    link: "/media",
    action: "VIEW RECORD",
  },
  {
    id: "004",
    title: "Artifacts",
    type: "Vaultline",
    description:
      "Symbols, apparel, branding, design language, and physical extensions of the archive.",
    link: "/vaultline",
    action: "EXPLORE RECORD",
  },
];

export function ArchivePage() {
  return (
    <section
      className="page-section archive-page"
      aria-labelledby="archive-heading"
    >

      <div className="page-hero">

        <HeroArtwork
          image="/manuscripts-hero.jpg"
          alt="GRVEZ VAULT Archive"
        />

      </div>

      <div className="page-content">

        <div className="page-intro">

          <p className="eyebrow">
            THE ARCHIVE
          </p>

          <h1 id="archive-heading">
            Every Record
            <br />
            Has Two Dates.
          </h1>

          <p className="archive-quote">
            The day it was created.
            <br />
            And the day someone finally understood
            why it mattered.
          </p>

          <div className="archive-manifest">

            <p>
              GRVEZ VAULT exists to preserve creative work
              exactly as it was originally created.
            </p>

            <p>
              Songs.
              Writing.
              Symbols.
              Films.
              Artwork.
              Ideas.
            </p>

            <p>
              Time changes perspective.
              The archive does not.
            </p>

          </div>

        </div>
                <section className="archive-directory">

          <p className="eyebrow">
            ARCHIVE DIRECTORY
          </p>

          <h2>
            Select a record.
          </h2>

          <div className="archive-record-grid">

            {archiveRecords.map((record) => (

              <a
                key={record.id}
                href={record.link}
                className="archive-record-card"
              >

                <div className="archive-record-header">

                  <span className="archive-record-id">
                    ARCHIVE RECORD {record.id}
                  </span>

                  <span className="archive-record-status">
                    PRESERVED
                  </span>

                </div>

                <h3>
                  {record.title}
                </h3>

                <div className="archive-meta">

                  <div>

                    <span className="archive-label">
                      CATEGORY
                    </span>

                    <p>
                      {record.type}
                    </p>

                  </div>

                  <div>

                    <span className="archive-label">
                      ACCESS
                    </span>

                    <p>
                      AUTHORIZED
                    </p>

                  </div>

                </div>

                <p className="archive-description">
                  {record.description}
                </p>

                <span className="archive-action">

                  {record.action}

                  <span className="archive-arrow">
                    →
                  </span>

                </span>

              </a>

            ))}

          </div>

        </section>
                <section className="archive-feature">

          <div className="archive-feature-content">

            <p className="eyebrow">
              FEATURED RECORD
            </p>

            <h2>
              Chronology
              <br />
              is evidence.
            </h2>

            <p>
              Every entry inside GRVEZ VAULT remains exactly where
              it was originally created. The archive does not reorganize
              events to strengthen a narrative. It preserves the original
              sequence so every connection can be discovered in context.
            </p>

            <blockquote className="vault-quote">
              Nothing has been rewritten.
              <br />
              Nothing has been relocated.
              <br />
              Nothing has been removed.
            </blockquote>

          </div>

        </section>
                <section className="archive-closing">

          <p className="eyebrow">
            THE RECORD REMAINS
          </p>

          <h2>
            Every new release
            <br />
            becomes another record.
          </h2>

          <p>
            The archive continues to grow one entry at a time.
            Every song, manuscript, symbol, film, and design is
            preserved as part of the same ongoing chronology.
          </p>

          <blockquote className="vault-quote">
            The archive is never finished.
            <br />
            It is only waiting for its next record.
          </blockquote>

        </section>

      </div>

    </section>

  );
}