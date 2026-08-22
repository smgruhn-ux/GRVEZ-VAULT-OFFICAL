import React from "react";
import { HeroArtwork } from "../HeroArtwork";
import { Link } from "react-router-dom";

export function DmonixPage() {
  return (
    <>
      <section className="page-section about-page" aria-labelledby="dmonix-heading">
        <div className="page-hero">
          <HeroArtwork
            image="/dmonix-hero.jpg"
            alt="DMONIX"
            loading="lazy"
          />
        </div>

        <div className="page-content">
          <div className="page-intro">
            <p className="eyebrow">CREATIVE IDENTITY</p>

            <h1 id="dmonix-heading">
              DMONIX
            </h1>

            <p>
              DMONIX is a distinct creative identity within GRVEZ VAULT,
              developed alongside Gizzy Graves as part of the broader creative
              world surrounding the archive.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="page-content">
          <p className="eyebrow">NAVIGATE</p>

          <div className="archive-stack">
            <Link to="/about" className="metal-button">
              Back to About
            </Link>
            <Link to="/archive" className="metal-button">
              Archive
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
