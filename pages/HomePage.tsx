import React from "react";
import { HeroArtwork } from "../HeroArtwork";

export function HomePage() {
  return (
    <>
      <section className="hero-section home-hero">
        <HeroArtwork
          image="/home-hero.png"
          alt="GRVEZ VAULT"
          clean
        />
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
            <a href="/relational-continuity">
              <img
                src="/founding-edition.jpeg"
                alt="Relational Continuity Hypothesis Founding Edition"
                style={{ width: "340px", maxWidth: "100%", borderRadius: "12px", boxShadow: "0 20px 50px rgba(0,0,0,.45)" }}
              />
            </a>
          </div>
          <div className="featured-book-info">
            <p className="eyebrow">FOUNDING EDITION</p>
            <h2>RELATIONAL CONTINUITY HYPOTHESIS</h2>
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
                href="https://a.co/d/0jeiip0w"
                className="vault-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                BUY THE BOOK
              </a>
              <a href="/relational-continuity" className="vault-button secondary" style={{ marginLeft: ".8rem" }}>
                EXPLORE THE FRAMEWORK
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="archive-grid archive-grid-5">
        <a href="/music" className="archive-panel music-panel">
          <div className="archive-panel-overlay">
            <p>MUSIC</p>
            <h2>Recorded Chapters</h2>
            <span>OPEN CASE \u2192</span>
          </div>
        </a>
        <a href="/archive" className="archive-panel manuscript-panel">
          <div className="archive-panel-overlay">
            <p>THE ARCHIVE</p>
            <h2>The Written Record</h2>
            <span>REVEAL \u2192</span>
          </div>
        </a>
        <a href="/relational-continuity" className="archive-panel" style={{ backgroundImage: 'linear-gradient(135deg, rgba(6,6,8,0.92), rgba(20,15,22,0.95)), radial-gradient(circle at 30% 50%, rgba(182,58,80,0.2), transparent 60%)' }}>
          <div className="archive-panel-overlay">
            <p>RESEARCH</p>
            <h2>Relational Continuity</h2>
            <span>READ THE HYPOTHESIS \u2192</span>
          </div>
        </a>
        <a href="/vaultline" className="archive-panel vaultline-panel">
          <div className="archive-panel-overlay">
            <p>VAULTLINE</p>
            <h2>Recovered Artifacts</h2>
            <span>INSPECT EVIDENCE \u2192</span>
          </div>
        </a>
        <a href="/films" className="archive-panel media-panel">
          <div className="archive-panel-overlay">
            <p>FILMS & MEDIA</p>
            <h2>Visual Documentation</h2>
            <span>VIEW EVIDENCE \u2192</span>
          </div>
        </a>
      </section>
    </>
  );
}
