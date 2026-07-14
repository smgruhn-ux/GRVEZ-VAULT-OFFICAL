import React from "react";
import { HeroArtwork } from "../HeroArtwork";

export function AboutPage() {
  return (
    <>
      <section className="page-section about-page" aria-labelledby="about-heading">
        <div className="page-hero">
          <HeroArtwork
            image="/about-hero.jpg"
            alt="Welcome to GRVEZ VAULT"
            loading="lazy"
          />
        </div>

        <div className="page-content">

          <div className="page-intro">

            <p className="eyebrow">
              WELCOME TO THE ARCHIVE
            </p>

            <h1 id="about-heading">
              Every Archive Begins With A Story.
            </h1>

            <p>
              Before there was a manuscript...
              there were songs.
            </p>

            <p>
              Before there was a documentary...
              there were photographs.
            </p>

            <p>
              Before there was a creative philosophy...
              there were poems.
            </p>

            <p>
              Before there was a world...
              there were fragments.
            </p>

            <p>
              GRVEZ VAULT wasn't built to become a traditional artist
              website. It became the permanent home for years of music,
              writing, artwork, symbolism, apparel, filmmaking,
              documentary work, and ideas that continued to grow into
              something much larger than any single project.
            </p>

            <p>
              Nothing inside this archive was created to support a
              conclusion after the fact. Every lyric, every design,
              every symbol, every photograph, every manuscript, and
              every release remains preserved in the order it was
              created, allowing the story to exist exactly as it
              unfolded.
            </p>

          </div>

          <div className="content-grid">

            <article className="detail-card">

              <h2>
                The Archive Came First
              </h2>

              <p>
                Long before there was a website, there was a growing
                collection of songs, poetry, concepts, artwork, and
                symbols. Over time, those independent creations began
                revealing unexpected connections, eventually inspiring
                deeper exploration into creativity, continuity, and the
                stories that can emerge across years of work.
              </p>

            </article>

            <article className="detail-card">

              <h2>
                Explore | Don't Just Read
              </h2>

              <p>
                GRVEZ VAULT isn't meant to be consumed in five minutes.
                Every page connects to another. Music leads to
                manuscripts. Manuscripts lead to artwork. Artwork leads
                to symbols. Every discovery opens another door inside
                the archive.
              </p>

            </article>

          </div>

        </div>

      </section>
            <section className="about-story">

        <div className="page-content">

          <p className="eyebrow">
            BEFORE THERE WAS A THEORY
          </p>

          <h2>
            The Story Was Already Being Written.
          </h2>

          <p className="story-copy">
            Every archive begins with creation... not explanation.
            Songs were written without knowing what future projects
            they would influence. Symbols appeared long before their
            significance was fully understood. Ideas resurfaced across
            music, artwork, writing, and visual design over the course
            of years, each becoming another preserved chapter inside
            the Vault.
          </p>

          <p className="story-copy">
            Rather than rewriting history to fit a narrative, GRVEZ
            VAULT preserves the chronology exactly as it happened.
            Visitors are invited to explore the work in the same order
            it unfolded, connecting the pieces for themselves.
          </p>

          <blockquote className="vault-quote">
            "The archive wasn't created to prove a story.
            <br />
            The story revealed itself through the archive."
          </blockquote>

        </div>

      </section>

      <section className="about-story">

        <div className="page-content">

          <p className="eyebrow">
            THE DISCOVERY
          </p>

          <h2>
            Questions Came After The Work.
          </h2>

          <p className="story-copy">
            As the archive expanded, recurring themes, symbols,
            creative decisions, and personal experiences encouraged a
            deeper investigation into continuity, creativity, and human
            connection. Those observations eventually grew into an
            ongoing manuscript, not as the beginning of the story, but
            as one chapter within it.
          </p>

          <p className="story-copy">
            The manuscript exists because the creative work already
            existed. It documents questions inspired by years of
            creation while preserving the distinction between artistic
            expression, documented chronology, and personal
            interpretation.
          </p>

        </div>

      </section>

      <section className="core-values">

        <div className="page-content">

          <p className="eyebrow">
            THE ARCHITECTS
          </p>

          <div className="values-grid">

            <article className="value-card">

              <h3>Gizzy Graves</h3>

              <p>
                Founder of GRVEZ VAULT, songwriter, creative director,
                visual designer, and the architect behind every song,
                manuscript, collection, and evolving chapter within the
                archive.
              </p>

            </article>

            <article className="value-card">

              <h3>DMONIX</h3>

              <p>
                A central figure within the GRVEZ VAULT universe whose
                presence is expressed through atmosphere, symbolism,
                visual storytelling, and the mythology surrounding the
                archive.
              </p>

            </article>
                        <article className="value-card">

              <h3>The Archive</h3>

              <p>
                Music, manuscripts, visual art, documentaries,
                photography, apparel, and future projects all live
                together as one connected creative body of work instead
                of existing as isolated releases.
              </p>

            </article>

            <article className="value-card">

              <h3>The Future</h3>

              <p>
                GRVEZ VAULT continues to expand through new music,
                films, manuscripts, visual projects, and the ongoing
                preservation of every chapter still waiting to be
                written.
              </p>

            </article>

          </div>

        </div>

      </section>

      <section className="about-story">

        <div className="page-content">

          <p className="eyebrow">
            EXPLORE THE ARCHIVE
          </p>

          <h2>
            Every Door Leads Somewhere.
          </h2>

          <p className="story-copy">
            Whether you arrived here through a song, a business card,
            a manuscript, a film, or simple curiosity, you're no longer
            looking at separate projects.
          </p>

          <p className="story-copy">
            You're exploring one evolving archive where music,
            storytelling, symbolism, research, visual art, and design
            continue to influence one another over time.
          </p>

          <blockquote className="vault-quote">
            Every page has a history.
            <br />
            Every symbol leaves a trace.
            <br />
            Every chapter opens another door.
          </blockquote>

        </div>

      </section>

    </>
  );
}