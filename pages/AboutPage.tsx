import React from "react";
import { HeroArtwork } from "../HeroArtwork";
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <>
      {/* MAIN HERO & INTRO SECTION */}
      <section className="page-section about-page" aria-labelledby="about-heading">
        <div className="page-hero">
          <HeroArtwork
            image="/about-hero.jpg"
            alt="About GRVEZ VAULT"
            loading="lazy"
          />
        </div>

        <div className="page-content">
          <div className="page-intro">
            <p className="eyebrow">ABOUT</p>
            
            <h1 id="about-heading">
              GRVEZ VAULT
            </h1>

            <p>
              GRVEZ VAULT is an independent creative archive founded by 
              songwriter and creative director Sheldyn Gruhn. It brings together 
              music, writing, film, visual work, design, and the evolving body 
              of work surrounding Gizzy Graves, DMONIX, Vaultline, and related 
              projects.
            </p>
          </div>

          <div className="content-grid">
            <article className="detail-card">
              <h2>Sheldyn Gruhn</h2>
              <p>
                Songwriter, creative director, and founder of GRVEZ VAULT. Sheldyn Gruhn 
                develops the songwriting, visual direction, written work, design, 
                filmmaking, and broader creative direction behind the archive.
              </p>
            </article>

            <article className="detail-card">
              <h2>Gizzy Graves</h2>
              <p>
                Artist identity curated by Sheldyn Gruhn, centered on the music, 
                visual language, and creative work developed under the Gizzy Graves name.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DMONIX SECTION */}
      <section className="about-story">
        <div className="page-content">
          <p className="eyebrow">WITHIN THE VAULT</p>
          
          <h2>DMONIX</h2>
          
          <p className="story-copy">
            A distinct creative identity within GRVEZ VAULT, developed alongside 
            Gizzy Graves as part of the broader creative world surrounding the archive.
          </p>
        </div>
      </section>

      {/* WHAT LIVES IN THE VAULT */}
      <section className="core-values">
        <div className="page-content">
          <p className="eyebrow">THE WORK</p>

          <div className="values-grid">
            <article className="value-card">
              <h3>Music</h3>
              <p>
                Original songs, recorded releases, demos, and audio work catalogued 
                across the archive.
              </p>
            </article>

            <article className="value-card">
              <h3>Manuscripts & Writing</h3>
              <p>
                Written work, poetry, essays, and ongoing manuscript projects 
                that document ideas and observations over time.
              </p>
            </article>

            <article className="value-card">
              <h3>Film & Documentary</h3>
              <p>
                Documentary films, short-form visual work, and recorded material 
                developed and preserved through GRVEZ VAULT.
              </p>
            </article>

            <article className="value-card">
              <h3>Visual Art & Design</h3>
              <p>
                Photography, visual artwork, design direction, symbolism, and 
                the overall aesthetic language of the archive.
              </p>
            </article>

            <article className="value-card">
              <h3>Vaultline</h3>
              <p>
                Apparel and design created through Vaultline by Gizzy Graves, 
                the merchandise arm connected to GRVEZ VAULT.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* THE ARCHIVE */}
      <section className="about-story">
        <div className="page-content">
          <p className="eyebrow">THE ARCHIVE</p>
          
          <h2>Chronology Preserved</h2>
          
          <p className="story-copy">
            GRVEZ VAULT preserves the development of the work over time, keeping 
            music, writing, visuals, film, and design connected to the periods 
            and projects they came from.
          </p>
        </div>
      </section>

      {/* NAVIGATION / CTA */}
      <section className="about-story">
        <div className="page-content">
          <p className="eyebrow">NAVIGATE</p>
          
          <h2>DIRECTORY</h2>
          
          <div className="archive-stack">
            <Link to="/music" className="metal-button">
              Listen
            </Link>
            <Link to="/archive" className="metal-button">
              Archive
            </Link>
            <Link to="/vaultline" className="metal-button">
              Vaultline
            </Link>
            <Link to="/contact" className="metal-button">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}