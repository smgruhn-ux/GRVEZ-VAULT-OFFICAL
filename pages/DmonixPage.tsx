import React from "react";
import { Link } from "react-router-dom";
import { HeroArtwork } from "../HeroArtwork";

export function DmonixPage() {
  return (
    <section className="page-section" aria-labelledby="dmonix-heading">
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
          <h1 id="dmonix-heading">DMONIX</h1>
          <p>
            DMONIX is a distinct creative identity within GRVEZ VAULT, developed alongside Gizzy Graves as part of the broader creative world surrounding the archive.
          </p>
          <div className="inline-actions">
            <Link className="metal-button" to="/about">
              Back to About
            </Link>
            <Link className="metal-button secondary" to="/archive">
              Archive
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
