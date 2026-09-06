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

      {/* PRIMARY PATHWAYS: The core of GRVEZ VAULT */}
      <section className="home-pathways">
        <div className="home-pathways-primary">
          <a href="/music" className="archive-panel music-panel pathway-large">
            <div className="archive-panel-overlay">
              <p>MUSIC</p>
              <h2>Recorded Chapters</h2>
              <span>LISTEN \u2192</span>
            </div>
          </a>
          <a href="/archive" className="archive-panel manuscript-panel pathway-large">
            <div className="archive-panel-overlay">
              <p>THE ARCHIVE</p>
              <h2>Every Record Preserved</h2>
              <span>EXPLORE \u2192</span>
            </div>
          </a>
        </div>
      </section>

      {/* FEATURED RESEARCH */}
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
                href="/relational-continuity"
                className="vault-button"
              >
                EXPLORE THE FRAMEWORK
              </a>
              <a
                href="https://a.co/d/0jeiip0w"
                className="vault-button secondary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: ".8rem" }}
              >
                BUY THE BOOK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY PATHWAYS */}
      <section className="home-pathways">
        <div className="home-pathways-secondary">
          <a href="/films" className="archive-panel media-panel pathway-secondary">
            <div className="archive-panel-overlay">
              <p>FILMS & MEDIA</p>
              <h2>Visual Projects</h2>
              <span>VIEW \u2192</span>
            </div>
          </a>
          <a href="/vaultline" className="archive-panel vaultline-panel pathway-secondary">
            <div className="archive-panel-overlay">
              <p>VAULTLINE</p>
              <h2>Recovered Artifacts</h2>
              <span>SHOP \u2192</span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
