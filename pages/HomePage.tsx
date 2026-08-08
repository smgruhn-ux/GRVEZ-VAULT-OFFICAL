import React from "react";
import { HeroArtwork } from "../HeroArtwork";

export function HomePage() {
  return (
    <>
      <section className="hero-section home-hero">
        <HeroArtwork
          image="/home-hero-v2.png"
          alt="GRVEZ VAULT"
        />

        <div className="hero-overlay">

          <div className="hero-content">

            <p className="vault-label">
              WELCOME TO THE ARCHIVE
            </p>

            <h1>
              GRVEZ VAULT
            </h1>

            <p className="hero-tagline">
              Every archive keeps records.
              <br />
              This one keeps a story.
            </p>

            <div className="hero-buttons">

              <a href="/music" className="vault-button">
                ENTER THE ARCHIVE
              </a>

              <a href="/about" className="vault-button secondary">
                BEGIN THE STORY
              </a>

            </div>

          </div>

        </div>

      </section>

      <section className="vault-intro">

  <div className="vault-intro-content">

    <p className="vault-label">
      EVERY RECORD HAS TWO DATES.
    </p>

    <h2>
      The day it was created.
      <br />
      And the day someone finally
      <br />
      understands why it mattered.
    </h2>

    <p className="vault-description">
      Everything inside this archive was created at a different
      moment in time.
    </p>

    <p className="vault-description">
      Different songs.
      Different symbols.
      Different manuscripts.
      Different evidence.
      Different chapters.
    </p>

    <p className="vault-description">
      Some connections first appeared as isolated artifacts.
      Later they were traced back to a single recovered manuscript
      and a twelve-stage model of relational continuity.
    </p>

    <p className="vault-description">
      Nothing has been rearranged.
      Nothing has been rewritten.
      Nothing has been removed.
    </p>

    <p className="vault-description">
      Every record remains exactly where it was created.
    </p>

    <blockquote className="vault-quote">
      The only question is...
      <br /><br />
      <strong>What will you discover first?</strong>
    </blockquote>

  </div>

</section>

    <section className="featured-book">

  <div className="featured-book-content page-content">

    <div className="featured-book-cover">
      <a href="/record/008">
        <img
          src="/founding-edition.jpeg"
          alt="Relational Continuity Hypothesis Founding Edition"
          style={{ width: "340px", maxWidth: "100%", borderRadius: "12px", boxShadow: "0 20px 50px rgba(0,0,0,.45)" }}
        />
      </a>
    </div>

    <div className="featured-book-info">

      <p className="eyebrow">FOUNDING EDITION</p>

      <h2>
        RELATIONAL CONTINUITY HYPOTHESIS
      </h2>

      <p className="vault-description" style={{ fontStyle: "italic", marginTop: "0.2rem" }}>
        A Twelve-Stage Model of Relational Consciousness
      </p>

      <h3 style={{ marginTop: "0.6rem", textTransform: "uppercase", color: "#f3ece4" }}>
        AVAILABLE NOW
      </h3>

      <p className="vault-description" style={{ marginTop: "0.6rem" }}>
        A recovered research manuscript outlining the Relational Continuity Hypothesis and its twelve-stage model of relational consciousness. This record anchors the archive and connects symbolic evidence, case studies, and methodological notes.
      </p>

      <div className="hero-buttons" style={{ marginTop: "1rem" }}>

        <a
          href="https://www.amazon.com/Relational-Continuity-Hypothesis-Twelve-Stage-Consciousness-ebook/dp/B0HD63Z6TN/ref=sr_1_1?crid=2LHS046FOCMMT&dib=eyJ2IjoiMSJ9.fhE49U_qaLuqNYxQCybnGA.wollX1w2o9m8u0EGIw4ZAT4rSy89fRvIIorAtwZmwU8&dib_tag=se&keywords=relational-Continuity-Hypothesis-Twelve-Stage-Consciousness&qid=1786163705&sprefix=relational-continuity-hypothesis-twelve-stage-consciousness%2Caps%2C339&sr=8-1"
          className="vault-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUY THE BOOK
        </a>

        <a href="/record/008" className="vault-button secondary" style={{ marginLeft: ".8rem" }}>
          EXPLORE THE MANUSCRIPT
        </a>

      </div>

    </div>

  </div>

</section>

     <section className="archive-grid">

  <a href="/music" className="archive-panel music-panel">

    <div className="archive-panel-overlay">

      <p>MUSIC</p>

      <h2>Recorded Chapters</h2>

      <span>OPEN CASE →</span>

    </div>

  </a>

  <a href="/manuscripts" className="archive-panel manuscript-panel">

    <div className="archive-panel-overlay">

      <p>MANUSCRIPTS</p>

      <h2>The Written Record</h2>

      <span>REVEAL →</span>

    </div>

  </a>

  <a href="/media" className="archive-panel media-panel">

    <div className="archive-panel-overlay">

      <p>MEDIA</p>

      <h2>Recovered Footage</h2>

      <span>VIEW EVIDENCE →</span>

    </div>

  </a>

  <a href="/vaultline" className="archive-panel vaultline-panel">

    <div className="archive-panel-overlay">

      <p>VAULTLINE</p>

      <h2>Recovered Artifacts</h2>

      <span>INSPECT EVIDENCE →</span>

    </div>

  </a>

</section>
    </>
  );
}