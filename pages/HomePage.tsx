import React from "react";
import { HeroArtwork } from "../HeroArtwork";

export function HomePage() {
  return (
    <>
      <section className="hero-section home-hero">
        <HeroArtwork
          image="/home-hero.png"
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
            THIS IS NOT A PORTFOLIO
          </p>

          <h2>
            Nothing Here Exists
            <br />
            By Accident.
          </h2>

          <p className="vault-description">
            Long before there was a website, there were songs.
            Before there were manuscripts, there were questions.
            Before there was a documentary, there was a growing body
            of creative work that refused to exist as separate pieces.
          </p>

          <p className="vault-description">
            GRVEZ VAULT preserves music, writing, symbolism,
            visual art, filmmaking, apparel, and original ideas
            exactly as they were created—allowing every visitor
            to explore the archive for themselves.
          </p>

        </div>

      </section>

      <section className="vault-intro">

        <div className="vault-intro-content">

          <p className="vault-label">
            EXPLORE
          </p>

          <h2>
            Every Door
            <br />
            Leads Somewhere.
          </h2>

          <div className="content-grid">

            <article className="detail-card">

              <h3>MUSIC</h3>

              <p>
                Heavy rock, cinematic composition, and evolving
                chapters preserved through sound.
              </p>

              <a href="/music" className="vault-button">
                ENTER
              </a>

            </article>

            <article className="detail-card">

              <h3>MANUSCRIPTS</h3>

              <p>
                Long-form writing documenting ideas,
                discoveries, and observations.
              </p>

              <a href="/manuscripts" className="vault-button">
                READ
              </a>

            </article>

            <article className="detail-card">

              <h3>MEDIA</h3>

              <p>
                Photography, documentary projects,
                production, and visual storytelling.
              </p>

              <a href="/media" className="vault-button">
                WATCH
              </a>

            </article>

            <article className="detail-card">

              <h3>VAULTLINE</h3>

              <p>
                Apparel and artifacts designed
                as extensions of the archive.
              </p>

              <a href="/vaultline" className="vault-button">
                EXPLORE
              </a>

            </article>

          </div>

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