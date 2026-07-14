import React from "react";
import { HeroArtwork } from "../HeroArtwork";

const archiveEntries = [
  {
    id: "001",
   category: "RECORD // 001",
   title: "Recorded Evidence",
    description:
      "Songs, albums, instrumentals, lyrics, demos, and every recorded chapter preserved inside the archive.",
    link: "/music",
    action: "ENTER",
  },
  {
    id: "002",
    category: "RECORD // 002",
    title: "The Written Record",
    description:
      "Poetry, research, journals, manuscripts, and long-form writing documenting years of creative work.",
    link: "/manuscripts",
    action: "OPEN",
  },
  {
    id: "003",
   category: "RECORD // 003",
   title: "Visual Documentation",
    description:
      "Photography, documentaries, production, artwork, and visual storytelling collected throughout the archive.",
    link: "/media",
    action: "VIEW",
  },
  {
    id: "004",
    category: "RECORD // 004",
    title: "Artifacts",
    description:
      "Apparel, symbols, branding, logos, design language, and physical extensions of the archive.",
    link: "/vaultline",
    action: "EXPLORE",
  },
];

export function ArchivePage() {
  return (
    <>
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
              And the day someone finally
              understands why it mattered.
            </p>

            <p className="story-copy">
              Every entry inside GRVEZ VAULT exists in its
              original chronology.
            </p>

            <p className="story-copy">
              Different songs.
              Different symbols.
              Different manuscripts.
              Different films.
              Different ideas.
            </p>

            <p className="story-copy">
              Some connections revealed themselves immediately.
            </p>

            <p className="story-copy">
              Others only became visible with time.
            </p>

            <p className="story-copy">
              Nothing has been rearranged.
              <br />
              Nothing has been rewritten.
              <br />
              Nothing has been removed.
            </p>

            <blockquote className="vault-quote">
              The chronology remains intact.
            </blockquote>

          </div>

          <section className="archive-directory">

            <p className="eyebrow">
              CHOOSE AN ENTRY
            </p>

            <h2>
              Where would you like to begin?
            </h2>

            <div className="archive-directory-grid">
                          {archiveEntries.map((entry) => (

              <a
                key={entry.id}
                href={entry.link}
                className="archive-directory-card"
              >

                <span className="archive-number">
                  {entry.category}
                </span>

                <span className="archive-category">
                  {entry.category}
                </span>

                <h3>
                  {entry.title}
                </h3>

                <p>
                  {entry.description}
                </p>

                <span className="archive-action">
                  {entry.action} →
                </span>

              </a>

            ))}

          </div>

        </section>

        <section className="archive-philosophy">

          <p className="eyebrow">
            WHY AN ARCHIVE?
          </p>

          <h2>
            Preservation comes
            <br />
            before interpretation.
          </h2>

         <p className="story-copy">
  Every entry inside GRVEZ VAULT remains exactly where
  it was originally created.
</p>

<p className="story-copy">
  Songs.
  Symbols.
  Manuscripts.
  Films.
  Ideas.
  Designs.
</p>

<p className="story-copy">
  Some seemed connected from the very beginning.
</p>

<p className="story-copy">
  Others revealed a different story only after years
  had passed.
</p>

<p className="story-copy">
  Nothing has been rearranged.
  <br />
  Nothing has been rewritten.
  <br />
  Nothing has been removed.
</p>

<blockquote className="vault-quote">
  The chronology is part of the record.
</blockquote>

        </section>

        <section className="archive-timeline">

          <p className="eyebrow">
  ARCHIVE DIRECTORY
</p>

<h2>
  Choose a record.
</h2>

          <div className="timeline">
                        <div className="timeline-item">
              <span>01</span>
              <h3>The Work</h3>
              <p>
                Songs, writing, artwork, and ideas created independently over
                time.
              </p>
            </div>

            <div className="timeline-item">
              <span>02</span>
              <h3>The Archive</h3>
              <p>
                Every piece preserved instead of forgotten, allowing the
                chronology to remain intact.
              </p>
            </div>

            <div className="timeline-item">
              <span>03</span>
              <h3>The Discovery</h3>
              <p>
                Some connections appeared immediately.
                Others only emerged after years of looking back.
              </p>
            </div>

            <div className="timeline-item">
              <span>04</span>
              <h3>The Journey Continues</h3>
              <p>
                Every new release becomes another record.
                Every record becomes another chapter.
              </p>
            </div>

          </div>

        </section>

      </div>

    </section>

    </>
  );
}