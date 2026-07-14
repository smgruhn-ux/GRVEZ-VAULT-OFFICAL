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
      Different ideas.
      Different chapters.
    </p>

    <p className="vault-description">
    Some connections appeared to explain themselves.
    Until time revealed something even more compelling.
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

     <section className="archive-grid">

  <a href="/music" className="archive-panel music-panel">

    <div className="archive-panel-overlay">

      <p>MUSIC</p>

      <h2>Recorded Chapters</h2>

      <span>ENTER →</span>

    </div>

  </a>

  <a href="/manuscripts" className="archive-panel manuscript-panel">

    <div className="archive-panel-overlay">

      <p>MANUSCRIPTS</p>

      <h2>The Written Record</h2>

      <span>OPEN →</span>

    </div>

  </a>

  <a href="/media" className="archive-panel media-panel">

    <div className="archive-panel-overlay">

      <p>MEDIA</p>

      <h2>Recovered Footage</h2>

      <span>WATCH →</span>

    </div>

  </a>

  <a href="/vaultline" className="archive-panel vaultline-panel">

    <div className="archive-panel-overlay">

      <p>VAULTLINE</p>

      <h2>Artifacts</h2>

      <span>EXPLORE →</span>

    </div>

  </a>

</section>
    </>
  );
}